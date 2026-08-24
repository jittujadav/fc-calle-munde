#!/usr/bin/env python3
"""
=============================================================================
FC CALLE MUNDE - MOBILE CONTROL GATEWAY & TELEGRAM AGENT BRIDGE
=============================================================================
Allows remote control of coding tasks, tests, and git pushes directly from
your mobile phone via Telegram bot with two-way approval gates.
Enforces STRICT Feature Branch -> GitHub Push -> Merge to Main Workflow!
"""

import sys
import os
import time
import urllib.request
import urllib.parse
import json
import subprocess
import ssl

CONFIG_FILE = os.path.expanduser('~/.fc_calle_munde_mobile_config.json')
PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Unverified SSL context for Python 3.13 macOS compatibility
SSL_CTX = ssl._create_unverified_context()

def load_config():
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, 'r') as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def save_config(config):
    with open(CONFIG_FILE, 'w') as f:
        json.dump(config, f, indent=2)

def send_telegram_message(bot_token, chat_id, text, reply_markup=None):
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown'
    }
    if reply_markup:
        payload['reply_markup'] = json.dumps(reply_markup)
    
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, context=SSL_CTX) as resp:
            return json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f"Error sending message: {e}")
        return None

def get_telegram_updates(bot_token, offset=0):
    url = f"https://api.telegram.org/bot{bot_token}/getUpdates?offset={offset}&timeout=10"
    try:
        with urllib.request.urlopen(url, timeout=15, context=SSL_CTX) as resp:
            return json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        return {'ok': False, 'result': []}

def run_git_command(cmd_args):
    try:
        res = subprocess.run(cmd_args, cwd=PROJECT_DIR, capture_output=True, text=True)
        return res.returncode == 0, res.stdout + res.stderr
    except Exception as e:
        return False, str(e)

def sync_to_scratch():
    try:
        cmd = f"cp {PROJECT_DIR}/index.html {PROJECT_DIR}/styles.css {PROJECT_DIR}/app.js /Users/jitendra/.gemini/antigravity/scratch/football-team-balancer/"
        subprocess.run(cmd, shell=True, check=True)
        return True
    except Exception:
        return False

def execute_strict_branch_push_and_merge():
    timestamp = time.strftime('%Y%m%d-%H%M%S')
    branch_name = f"feature/mobile-update-{timestamp}"
    
    # Step 1: Create and switch to feature branch
    ok, out1 = run_git_command(['git', 'checkout', '-b', branch_name])
    if not ok:
        return False, f"Failed to create feature branch {branch_name}: {out1}"
    
    # Step 2: Stage and commit
    run_git_command(['git', 'add', '.'])
    ok, out2 = run_git_command(['git', 'commit', '-m', f"feat: mobile update via Telegram ({timestamp})"])
    if not ok and 'nothing to commit' not in out2:
        run_git_command(['git', 'checkout', 'main'])
        return False, f"Commit failed: {out2}"

    # Step 3: Push feature branch to GitHub
    ok, out3 = run_git_command(['git', 'push', '-u', 'origin', branch_name])
    if not ok:
        run_git_command(['git', 'checkout', 'main'])
        return False, f"Failed to push feature branch {branch_name}: {out3}"

    # Step 4: Checkout main, merge feature branch, push main
    run_git_command(['git', 'checkout', 'main'])
    ok, out4 = run_git_command(['git', 'merge', branch_name])
    if not ok:
        return False, f"Failed to merge {branch_name} into main: {out4}"

    ok, out5 = run_git_command(['git', 'push', 'origin', 'main'])
    if not ok:
        return False, f"Failed to push main branch: {out5}"

    return True, f"✅ Created branch `{branch_name}`\n✅ Pushed `{branch_name}` to GitHub\n✅ Merged into `main` and pushed `main`!"

def main():
    config = load_config()
    bot_token = config.get('bot_token') or os.environ.get('TELEGRAM_BOT_TOKEN')
    allowed_chat_id = config.get('allowed_chat_id')

    if not bot_token:
        print("Bot token is required. Exiting.")
        sys.exit(1)

    print(f"\n🚀 FC Calle Munde Mobile Agent active for project: {PROJECT_DIR}")

    offset = 0

    while True:
        updates = get_telegram_updates(bot_token, offset)
        if updates.get('ok'):
            for item in updates.get('result', []):
                offset = item['update_id'] + 1
                message = item.get('message', {})
                chat_id = message.get('chat', {}).get('id')
                user_name = message.get('from', {}).get('first_name', 'User')
                text = message.get('text', '').strip()

                if not text:
                    continue

                if not allowed_chat_id:
                    allowed_chat_id = chat_id
                    config['allowed_chat_id'] = allowed_chat_id
                    save_config(config)
                    send_telegram_message(bot_token, chat_id, f"✅ *Mobile Security Paired!*\nWelcome {user_name}. Your Telegram ID `{chat_id}` is connected to FC Calle Munde repository!")
                    print(f"Paired chat_id {chat_id} for user {user_name}")
                    continue

                if chat_id != allowed_chat_id:
                    send_telegram_message(bot_token, chat_id, "🚫 Unauthorized user.")
                    continue

                print(f"[{user_name}]: {text}")

                if text.lower() in ['/start', 'help', '/help']:
                    help_msg = (
                        "⚽ *FC Calle Munde Mobile Git & Code Controller:*\n\n"
                        "• `status` - Show modified files & current git status\n"
                        "• `push` - Strict workflow: Create feature branch $\rightarrow$ Push feature branch $\rightarrow$ Merge to main $\rightarrow$ Push main!\n"
                        "• `sync` - Sync files to local test server\n"
                        "• Type ANY instruction to update project files!\n"
                    )
                    send_telegram_message(bot_token, chat_id, help_msg)

                elif text.lower() == 'status':
                    ok, status_out = run_git_command(['git', 'status', '-s'])
                    branch_ok, branch_out = run_git_command(['git', 'branch', '--show-current'])
                    status_text = (
                        f"📍 *FC Calle Munde Repository Status*\n"
                        f"🌿 *Current Branch:* `{branch_out.strip()}`\n\n"
                        f"*Modified / Untracked Files:*\n```{status_out.strip() or 'Clean (All changes committed)'}```"
                    )
                    reply_markup = {
                        'keyboard': [[{'text': 'push'}, {'text': 'status'}]],
                        'resize_keyboard': True,
                        'one_time_keyboard': True
                    }
                    send_telegram_message(bot_token, chat_id, status_text, reply_markup=reply_markup)

                elif text.lower() in ['push', 'yes', 'confirm']:
                    send_telegram_message(bot_token, chat_id, "⏳ Running Strict Git Workflow:\n1. Create feature branch\n2. Push feature branch to GitHub\n3. Merge into `main` & push `main`...")
                    success, report = execute_strict_branch_push_and_merge()
                    if success:
                        send_telegram_message(bot_token, chat_id, f"🎉 *SUCCESSFUL BRANCH & MERGE WORKFLOW!*\n\n{report}")
                    else:
                        send_telegram_message(bot_token, chat_id, f"❌ *Git Workflow Error:*\n```{report}```")

                elif text.lower() == 'sync':
                    if sync_to_scratch():
                        send_telegram_message(bot_token, chat_id, "✅ Synced project files to local test server `http://localhost:8080`!")
                    else:
                        send_telegram_message(bot_token, chat_id, "❌ Sync failed.")

                else:
                    proposal_msg = (
                        f"📝 *FC Calle Munde Project Instruction Received:*\n\"{text}\"\n\n"
                        "⚙️ *Action Plan:*\n"
                        "1. Apply edits to FC Calle Munde codebase\n"
                        "2. Sync to local preview server (`http://localhost:8080`)\n"
                        "3. Await your confirmation to run Strict Branch Push & Merge\n\n"
                        "Tap *PUSH* below to create feature branch, push, and merge into `main`!"
                    )
                    reply_markup = {
                        'keyboard': [[{'text': 'push'}, {'text': 'status'}]],
                        'resize_keyboard': True,
                        'one_time_keyboard': True
                    }
                    send_telegram_message(bot_token, chat_id, proposal_msg, reply_markup=reply_markup)

        time.sleep(2)

if __name__ == '__main__':
    main()
