# ⚽ FC Calle Munde - Football Team Balancer & Squad Hub

An automated web application built for **FC Calle Munde** to manage weekly 7v7 football matches, balance team skill ratings, parse WhatsApp RSVPs, calculate multi-admin player ratings across 4 attributes (Speed, Accuracy, Defense, Game Knowledge), and manage floating rotation subs (R1/R2).

![FC Calle Munde Banner](https://img.shields.io/badge/FC%20Calle%20Munde-7v7%20Team%20Balancer-10b981?style=for-the-badge&logo=soccer)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success.svg?style=for-the-badge)

---

## 📐 System Architecture Diagram

```mermaid
flowchart TD
    A[📱 WhatsApp Group RSVP Text] -->|1. Paste RSVP| B[📋 WhatsApp Parser Engine]
    B -->|Detects Players & Positions| C[⚡ Automatic Match Format Engine]
    
    C -->|Auto 7v7, 6v6, 5v5| D[⚖️ Combinatorial Balancer Engine]
    
    E[🛡️ Squad Admin Panel] -->|Rate 4 Attributes| F[📊 Multi-Admin Rating Consensus Engine]
    F -->|Speed, Accuracy, Defense, Knowledge| D
    
    D -->|Evaluates Balance Index & GK Parity| G[👕 Team A Bibs vs 🎽 Team B Dark]
    D -->|Designates 15th Player| H[🔄 Rotation Sub R1 / R2]
    
    G --> I[🏟️ Tactical Pitch Lineup View]
    G --> J[📲 1-Click WhatsApp Announcement]
    
    E -->|Auto Sync| K[☁️ Live Central Cloud DB]
    K <-->|15s Auto-Poll| L[🌐 Netlify Live Web App]
```

---

## ✨ Key Features

### 1. ⚡ Automatic Team Balancer & Match Format Engine
- **Combinatorial Balancing:** Evaluates player skill parity, goalkeeper distribution, and offensive balance to produce a **Balance Index (e.g. 98%)**.
- **Auto Format Selection:** Detects squad size and adjusts automatically:
  - 14 players $\rightarrow$ **7v7**
  - 15 players $\rightarrow$ **7v7 + 1 Rotation Sub (R1)**
  - 16 players $\rightarrow$ **7v7 + 2 Rotation Subs (R1/R2)**
  - 12 players $\rightarrow$ **6v6** | 10 players $\rightarrow$ **5v5**
- **Floating Reserve Manager (R1/R2):** Automatically detects designated reserve tags or assigns the last player on WhatsApp RSVP as rotation sub `R1`.

### 2. 🤝 Multi-Admin Parameterized Player Ratings
Rates players across 4 core attributes (scale 1.0 to 10.0):
- ⚡ **Speed** (Pace & Mobility)
- 🎯 **Accuracy** (Passing & Shooting Precision)
- 🛡️ **Defense** (Tackling, Positioning & Interceptions)
- 🧠 **Game Knowledge** (Tactical Awareness & Decision Making)

$$\text{Single Admin Rating} = \frac{\text{Speed} + \text{Accuracy} + \text{Defense} + \text{Game Knowledge}}{4}$$

$$\text{Final Player Rating} = \frac{\sum_{i=1}^N \text{Admin}_i \text{ Score}}{N}$$

### 3. 📸 Instagram Community Channel Hub
- Embedded link to the official FC Calle Munde Instagram: **[@callemunde](https://www.instagram.com/callemunde)**.
- Highlight cards for weekly match reels, Man of the Match voting, and turf slot announcements.

### 4. 🖼️ Player DPs & Read-Only Public Roster
- Support for custom **Profile Picture (DP)** URLs for players.
- Position color-coded initials fallback (`PJ`, `VS`, `AS`).
- Public **Players Tab** is clean & read-only for regular group visitors.

### 5. 🔒 Squad Admin Panel Security
- Admin Panel gated with secure authentication.
- Multi-admin rating submissions, DP updates, and roster modifications are locked behind admin authorization.

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3 Glassmorphism System, Vanilla JavaScript (ES6+)
- **Typography & Icons:** Outfit & Inter Google Fonts, Lucide Icon Set
- **Data Persistence:** Browser `localStorage` + REST Cloud Storage API Sync
- **Deployment:** Netlify & GitHub Pages

---

## 🚀 Local Development Setup

To run the application locally on your computer:

1. Clone this repository:
   ```bash
   git clone https://github.com/jittujadav/fc-calle-munde.git
   cd fc-calle-munde
   ```

2. Start a local HTTP server:
   ```bash
   python3 -m http.server 8080
   ```

3. Open your browser and navigate to:
   ```text
   http://localhost:8080
   ```

---

## 🔐 Admin Panel Access

To manage squad ratings and profile pictures:
- Open the **Admin Panel** tab and log in using your team admin credentials.

---

## 🌿 Git Branching & Merge Workflow

To maintain code quality and prevent direct unreviewed commits on `main`:

1. **Feature Branch:** All new features or UI updates are developed on a separate branch:
   ```bash
   git checkout -b feature/<feature-name>
   ```
2. **Local Preview & Review:** Test locally on `http://localhost:8080` and obtain user review.
3. **Push & Merge:**
   ```bash
   git push -u origin feature/<feature-name>
   git checkout main
   git merge feature/<feature-name>
   git push origin main
   ```

---

## 📄 License

Distributed under the MIT License. Built for **FC Calle Munde** ⚽.

