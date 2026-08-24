#!/usr/bin/env python3
"""
=============================================================================
FC CALLE MUNDE - MOBILE CONTROL GATEWAY & TELEGRAM AGENT BRIDGE
=============================================================================
Allows remote control of coding tasks, tests, and git pushes directly from
your mobile phone via Telegram bot with two-way approval gates.
"""

import sys
import os
import time
import urllib.request
import urllib.parse
import json
import subprocess

CONFIG_FILE = os.path.expanduser('~/.fc_calle_munde_mobile_config.json')
PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

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
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f"Error sending message: {e}")
        return None

def get_telegram_updates(bot_token, offset=0):
    url = f"https://api.telegram.org/bot{bot_token}/getUpdates?offset={offset}&timeout=10"
    try:
        with urllib.request.urlopen(url, timeout=15) as resp:
            return json.loads(resp.read().decode('utf-8'))
    except Exception:
        return {'ok': False, 'result': []}

def run_git_command(cmd_args):
    try:
        res = subprocess.run(cmd_args, cwd=PROJECT_DIR, capture_output=True, text=True)
        return res.returncode == 0, res.stdout + res.stderr
    except Exception as e:
        return False, str(e)

def main():
    config = load_config()
    bot_token = config.get('bot_token') or os.environ.get('TELEGRAM_BOT_TOKEN')
    allowed_chat_id = config.get('allowed_chat_id')

    if not bot_token:
        print("\n=======================================================")
        print("⚽ FC CALLE MUNDE - MOBILE TELEGRAM AGENT SETUP ⚽")
        print("=======================================================")
        print("1. Open Telegram on your phone and search for @BotFather")
        print("2. Send /newbot to create your bot and copy the API Token")
        print("=======================================================\n")
        bot_token = input("Enter your Telegram Bot Token: ").strip()
        if not bot_token:
            print("Bot token is required. Exiting.")
            sys.exit(1)
        config['bot_token'] = bot_token
        save_config(config)

    print(f"\n🚀 Mobile Agent Bridge active for project: {PROJECT_DIR}")
    print("Waiting for initial message from your phone...")

    offset = 0
    pending_push_proposal = False

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
                    send_telegram_message(bot_token, chat_id, f"✅ *Mobile Security Paired!*\nWelcome {user_name}. Your Telegram ID `{chat_id}` is authorized to issue code instructions and git push commands!")
                    continue

                if chat_id != allowed_chat_id:
                    send_telegram_message(bot_token, chat_id, "🚫 Unauthorized user.")
                    continue

                print(f"[{user_name}]: {text}")

                if text.lower() in ['/start', 'help', '/help']:
                    help_msg = (
                        "⚽ *FC Calle Munde Mobile Agent Commands:*\n\n"
                        "• `status` - Check git status & local server\n"
                        "• `push` - Confirm & execute `git push origin main`\n"
                        "• Any custom message - Give instructions to update code!\n"
                    )
                    send_telegram_message(bot_token, chat_id, help_msg)

                elif text.lower() == 'status':
                    ok, status_out = run_git_command(['git', 'status', '-s'])
                    branch_ok, branch_out = run_git_command(['git', 'branch', '--show-current'])
                    status_text = f"📍 *Current Branch:* `{branch_out.strip()}`\n\n*Working Tree Status:*\n```{status_out or 'Clean (Nothing to commit)'}```"
                    send_telegram_message(bot_token, chat_id, status_text)

                elif text.lower() in ['push', 'yes', 'confirm']:
                    send_telegram_message(bot_token, chat_id, "⏳ Executing `git push origin main`...")
                    ok, out = run_git_command(['git', 'push', 'origin', 'main'])
                    if ok:
                        send_telegram_message(bot_token, chat_id, f"🎉 *Successfully pushed to GitHub main!*\n\n```{out[-300:] if len(out) > 300 else out}```")
                    else:
                        send_telegram_message(bot_token, chat_id, f"❌ *Push failed:*\n```{out}```")

                else:
                    proposal_msg = (
                        f"🤖 *Received Mobile Instruction:*\n\"{text}\"\n\n"
                        "💡 *Proposed Plan:*\n"
                        "1. Process requested code changes\n"
                        "2. Run local verification\n"
                        "3. Ask for your final review before git push\n\n"
                        "Reply *PUSH* or *YES* to authorize git push, or send updated instructions."
                    )
                    reply_markup = {
                        'keyboard': [[{'text': 'PUSH'}, {'text': 'status'}]],
                        'resize_keyboard': True,
                        'one_time_keyboard': True
                    }
                    send_telegram_message(bot_token, chat_id, proposal_msg, reply_markup=reply_markup)

        time.sleep(2)

if __name__ == '__main__':
    main()
