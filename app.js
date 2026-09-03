/* ==========================================================================
   FC CALLE MUNDE - MULTI-ADMIN RATINGS, DPS, FPL FANTASY & INSTAGRAM HUB
   ========================================================================== */

(function () {
  'use strict';

  // --- DEFAULT ACCURATE SQUAD DATA FOR FC CALLE MUNDE ---
  const DEFAULT_ROSTER = [
    {
      "id": "p1",
      "name": "Ashiq",
      "aliases": ["Ashiq"],
      "primaryPos": "DEF",
      "secPos": ["FWD"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 0,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p2",
      "name": "Pjul",
      "aliases": ["Pjul", "pjul"],
      "primaryPos": "FWD",
      "secPos": ["MID"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 1,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p3",
      "name": "Yash",
      "aliases": ["Yash", "mc"],
      "primaryPos": "GK",
      "secPos": ["DEF"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 2,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p4",
      "name": "Vinay",
      "aliases": ["Vinay", "Vimabappe", "Vima"],
      "primaryPos": "DEF",
      "secPos": ["GK", "MID"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 3,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p5",
      "name": "Karan",
      "aliases": ["Karan", "Coach"],
      "primaryPos": "MID",
      "secPos": ["DEF"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 4,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p6",
      "name": "Jitu",
      "aliases": ["Jitu"],
      "primaryPos": "FWD",
      "secPos": [],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 5,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p7",
      "name": "Girish",
      "aliases": ["Girish", "Model"],
      "primaryPos": "FWD",
      "secPos": ["MID"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 6,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p8",
      "name": "Vishnu",
      "aliases": ["Vishnu", "Krishtiano"],
      "primaryPos": "MID",
      "secPos": ["FWD"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 7,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p9",
      "name": "Arpit Singh",
      "aliases": ["Arpit Singh", "original vale", "keeper"],
      "primaryPos": "GK",
      "secPos": ["MID"],
      "attending": true,
      "overridePos": "GK",
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 8,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p10",
      "name": "Sam",
      "aliases": ["Sam", "sam", "new guy keeper only"],
      "primaryPos": "GK",
      "secPos": ["MID"],
      "attending": true,
      "overridePos": "GK",
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 9,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p11",
      "name": "Himanshu",
      "aliases": ["Himanshu"],
      "primaryPos": "FWD",
      "secPos": ["DEF", "MID"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 10,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p12",
      "name": "Vishal",
      "aliases": ["Vishal"],
      "primaryPos": "DEF",
      "secPos": ["FWD"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 11,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p13",
      "name": "Arpit new",
      "aliases": ["Arpit new", "Arpit"],
      "primaryPos": "MID",
      "secPos": ["DEF"],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 12,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p14",
      "name": "Adil",
      "aliases": ["Adil"],
      "primaryPos": "FWD",
      "secPos": [],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 13,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p15",
      "name": "Nikhil",
      "aliases": ["Nikhil"],
      "primaryPos": "FWD",
      "secPos": [],
      "attending": true,
      "overridePos": true,
      "isExplicitReserve": true,
      "reserveTag": "R1",
      "rsvpIndex": 14,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p_1786470089908y7sj",
      "name": "Anurag",
      "aliases": ["Anurag", "Tiger", "Tbhoi", "Tbhai"],
      "primaryPos": "DEF",
      "secPos": ["MID"],
      "attending": false,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 999,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p_17864701154902o88",
      "name": "Manthan",
      "aliases": ["Manthan"],
      "primaryPos": "DEF",
      "secPos": [],
      "attending": true,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 999,
      "avatarUrl": "assets/manthan.jpg",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    },
    {
      "id": "p_178647013665191ub",
      "name": "Anupam",
      "aliases": ["Anupam"],
      "primaryPos": "FWD",
      "secPos": ["DEF"],
      "attending": false,
      "overridePos": null,
      "isExplicitReserve": false,
      "reserveTag": null,
      "rsvpIndex": 999,
      "avatarUrl": "",
      "adminRatings": {
        "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
      }
    }
  ];

  // --- LATEST LIVE OFFICIAL FPL DATA FOR CALLE MUNDE BEFORE KICKOFF (ID: 889829) ---
  const FALLBACK_FPL_DATA = {
    "league": { "id": 889829, "name": "Calle Munde Before Kickoff" },
    "standings": {
      "has_next": false,
      "page": 1,
      "results": [
        { "rank": 1, "player_name": "Jitendra Singh Jadav", "entry_name": "Bhadvengers.AI", "event_total": 106, "total": 158 },
        { "rank": 2, "player_name": "Anurag Kakaty", "entry_name": "NovocAin't", "event_total": 87, "total": 153 },
        { "rank": 3, "player_name": "Bharath Kumar", "entry_name": "Seven Thirty", "event_total": 88, "total": 145 },
        { "rank": 4, "player_name": "Manthan Arora", "entry_name": "ModiShah United", "event_total": 90, "total": 138 },
        { "rank": 5, "player_name": "ANAS SULAIMAN", "entry_name": "Kerala Blasters", "event_total": 75, "total": 137 },
        { "rank": 6, "player_name": "vishnu v", "entry_name": "rip", "event_total": 62, "total": 134 },
        { "rank": 7, "player_name": "Srijan Bhattacharyya", "entry_name": "Everytime Loser", "event_total": 88, "total": 127 },
        { "rank": 8, "player_name": "Karan K", "entry_name": "Tukde Tukde Gang", "event_total": 62, "total": 122 },
        { "rank": 9, "player_name": "himanshu pundhir", "entry_name": "baz", "event_total": 54, "total": 121 },
        { "rank": 10, "player_name": "Arpit Sharma", "entry_name": "ARS", "event_total": 51, "total": 118 },
        { "rank": 11, "player_name": "Vinay Mobharkar", "entry_name": "Vinay's 11", "event_total": 78, "total": 116 },
        { "rank": 12, "player_name": "Pulkit Agarwal", "entry_name": "Hadippa", "event_total": 55, "total": 94 },
        { "rank": 13, "player_name": "Pranjul Purwar", "entry_name": "black mambaa", "event_total": 61, "total": 84 },
        { "rank": 14, "player_name": "Vishal Singh", "entry_name": "VSR", "event_total": 58, "total": 80 }
      ]
    }
  };

  // --- ADMIN CREDENTIALS ---
  const ADMIN_USER = 'admin';
  const ADMIN_PASS = 'admin';

  // --- STATE MANAGEMENT ---
  let state = {
    roster: [],
    matchDate: new Date().toISOString().split('T')[0],
    matchVenue: 'Calle Munde Turf',
    currentCombos: [],
    comboIndex: 0,
    generatedMatch: null,
    history: [],
    isAdminAuth: false,
    cloudEndpoint: 'https://api.npoint.io/0819fc_calle_munde',
    cloudKey: '',
    posFilter: 'ALL',
    fplLeagueId: '889829'
  };

  let fplState = {
    leagueId: '889829',
    data: FALLBACK_FPL_DATA,
    loading: false,
    lastSyncTime: null
  };

  let weatherState = {
    current: null,
    daily: null,
    loading: false,
    lastUpdated: null
  };

  // --- LOCAL STORAGE KEYS ---
  const STORAGE_KEY_ROSTER = 'fc_calle_munde_roster_v16';
  const STORAGE_KEY_HISTORY = 'fc_calle_munde_history_v16';
  const STORAGE_KEY_ENDPOINT = 'fc_calle_munde_cloud_endpoint';
  const STORAGE_KEY_CLOUD_KEY = 'fc_calle_munde_cloud_key';
  const STORAGE_KEY_FPL_ID = 'fc_calle_munde_fpl_league_id';

  // --- MULTI-ADMIN PARAMETERIZED RATING CALCULATION ENGINE ---
  function getPlayerRatingStats(player) {
    if (!player) return { rating: 7.0, speedAvg: 7.0, accuracyAvg: 7.0, defenseAvg: 7.0, knowledgeAvg: 7.0, count: 0, adminList: [] };

    const ratingsMap = player.adminRatings || {};
    const keys = Object.keys(ratingsMap);

    const customKeys = keys.filter(k => k !== 'System Default');
    const activeKeys = customKeys.length > 0 ? customKeys : (keys.length > 0 ? keys : []);

    if (activeKeys.length === 0) {
      return { rating: 7.0, speedAvg: 7.0, accuracyAvg: 7.0, defenseAvg: 7.0, knowledgeAvg: 7.0, count: 0, adminList: [] };
    }

    let totalSpeed = 0;
    let totalAccuracy = 0;
    let totalDefense = 0;
    let totalKnowledge = 0;
    let totalOverallSum = 0;
    const adminList = [];

    activeKeys.forEach(k => {
      const entry = ratingsMap[k];
      const speed = parseFloat(entry.speed) || 7.0;
      const accuracy = parseFloat(entry.accuracy) || 7.0;
      const defense = parseFloat(entry.defense) || 7.0;
      const knowledge = parseFloat(entry.knowledge) || 7.0;

      const adminScore = (speed + accuracy + defense + knowledge) / 4.0;

      totalSpeed += speed;
      totalAccuracy += accuracy;
      totalDefense += defense;
      totalKnowledge += knowledge;
      totalOverallSum += adminScore;

      adminList.push({
        adminName: entry.adminName || k,
        adminScore,
        speed,
        accuracy,
        defense,
        knowledge
      });
    });

    const count = activeKeys.length;
    const rating = totalOverallSum / count;

    return {
      rating: parseFloat(rating.toFixed(2)),
      speedAvg: parseFloat((totalSpeed / count).toFixed(1)),
      accuracyAvg: parseFloat((totalAccuracy / count).toFixed(1)),
      defenseAvg: parseFloat((totalDefense / count).toFixed(1)),
      knowledgeAvg: parseFloat((totalKnowledge / count).toFixed(1)),
      count: customKeys.length > 0 ? count : 0,
      adminList
    };
  }

  function getRating(player) {
    return getPlayerRatingStats(player).rating;
  }

  // --- AUTOMATIC MATCH FORMAT ENGINE ---
  function determineAutoMatchFormat(count) {
    if (count <= 0) {
      return { teamSize: 7, totalNeeded: 14, reserveCount: 0, label: '7v7 (Default)' };
    }
    if (count === 10) {
      return { teamSize: 5, totalNeeded: 10, reserveCount: 0, label: '5v5 (10 players)' };
    }
    if (count === 11) {
      return { teamSize: 5, totalNeeded: 11, reserveCount: 1, label: '5v5 + 1 Sub R1 (11 players)' };
    }
    if (count === 12) {
      return { teamSize: 6, totalNeeded: 12, reserveCount: 0, label: '6v6 (12 players)' };
    }
    if (count === 13) {
      return { teamSize: 6, totalNeeded: 13, reserveCount: 1, label: '6v6 + 1 Sub R1 (13 players)' };
    }
    if (count === 14) {
      return { teamSize: 7, totalNeeded: 14, reserveCount: 0, label: '7v7 (14 players)' };
    }
    if (count === 15) {
      return { teamSize: 7, totalNeeded: 15, reserveCount: 1, label: '7v7 + 1 Sub R1 (15 players)' };
    }
    if (count === 16) {
      return { teamSize: 7, totalNeeded: 16, reserveCount: 2, label: '7v7 + 2 Subs R1/R2 (16 players)' };
    }
    if (count === 17) {
      return { teamSize: 7, totalNeeded: 17, reserveCount: 3, label: '7v7 + 3 Subs (17 players)' };
    }
    
    const teamSize = Math.max(1, Math.floor(count / 2));
    const reserveCount = count % 2;
    return {
      teamSize,
      totalNeeded: count,
      reserveCount,
      label: reserveCount > 0 ? `${teamSize}v${teamSize} + ${reserveCount} Sub (${count}p)` : `${teamSize}v${teamSize} (${count}p)`
    };
  }

  // --- INITIALIZATION ---
  function init() {
    loadState();
    setupEventListeners();
    renderAll();
    renderFplHub();
    fetchMontevideoWeather();
    initAntigravityParticles();
    lucide.createIcons();
    fetchCloudRoster();
    fetchFplStandings(state.fplLeagueId);

    // Auto-poll cloud DB every 15s
    setInterval(fetchCloudRoster, 15000);
    // Auto-poll FPL standings every 60s
    setInterval(() => fetchFplStandings(state.fplLeagueId), 60000);
    // Auto-poll weather every 10 mins
    setInterval(fetchMontevideoWeather, 600000);
  }

  function loadState() {
    const savedEndpoint = localStorage.getItem(STORAGE_KEY_ENDPOINT);
    if (savedEndpoint) state.cloudEndpoint = savedEndpoint;

    const savedCloudKey = localStorage.getItem(STORAGE_KEY_CLOUD_KEY);
    if (savedCloudKey) state.cloudKey = savedCloudKey;

    const savedFplId = localStorage.getItem(STORAGE_KEY_FPL_ID);
    if (savedFplId) {
      state.fplLeagueId = savedFplId;
      fplState.leagueId = savedFplId;
    }

    const savedRoster = localStorage.getItem(STORAGE_KEY_ROSTER);
    if (savedRoster) {
      try {
        state.roster = JSON.parse(savedRoster);
      } catch (e) {
        state.roster = [...DEFAULT_ROSTER];
      }
    } else {
      state.roster = [...DEFAULT_ROSTER];
    }

    const manthanP = state.roster.find(p => p.name.toLowerCase() === 'manthan');
    if (manthanP && !manthanP.avatarUrl) {
      manthanP.avatarUrl = 'assets/manthan.jpg';
    }

    const savedHistory = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (savedHistory) {
      try {
        state.history = JSON.parse(savedHistory);
      } catch (e) {
        state.history = [];
      }
    }

    const dateInput = document.getElementById('match-date');
    if (dateInput) dateInput.value = state.matchDate;
  }

  function saveRoster(pushToCloud = true) {
    state.roster.forEach(p => {
      p.rating = getRating(p);
    });

    localStorage.setItem(STORAGE_KEY_ROSTER, JSON.stringify(state.roster));
    renderAll();
    if (pushToCloud && state.cloudEndpoint) {
      pushCloudRoster();
    }
  }

  // --- LIVE FPL FANTASY LEAGUE HUB ENGINE (FAST FAILOVER + AUTO REFRESH) ---
  function fetchFplStandings(leagueId = '889829') {
    renderFplHub();

    const cacheBuster = `?t=${Date.now()}`;
    const targetUrl = `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`;
    
    // First try fetching latest local snapshot, then proxies
    const endpoints = [
      `./fpl_standings.json${cacheBuster}`,
      `https://corsproxy.io/?${encodeURIComponent(targetUrl + cacheBuster)}`,
      `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl + cacheBuster)}`
    ];

    let epIndex = 0;

    function tryNextEndpoint() {
      if (epIndex >= endpoints.length) return;
      const currentUrl = endpoints[epIndex];
      epIndex++;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      fetch(currentUrl, { signal: controller.signal })
        .then(res => {
          clearTimeout(timeoutId);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then(data => {
          let parsedData = null;
          if (data && data.contents) {
            try {
              parsedData = JSON.parse(data.contents);
            } catch (e) {
              parsedData = null;
            }
          } else if (data && data.standings) {
            parsedData = data;
          }

          if (parsedData && parsedData.standings && parsedData.standings.results) {
            fplState.data = parsedData;
            fplState.lastSyncTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            renderFplHub();
          } else {
            tryNextEndpoint();
          }
        })
        .catch(err => {
          clearTimeout(timeoutId);
          tryNextEndpoint();
        });
    }

    tryNextEndpoint();
  }

  function renderFplHub() {
    const data = fplState.data || FALLBACK_FPL_DATA;
    if (!data || !data.standings || !data.standings.results) return;

    const leagueTitle = document.getElementById('fpl-league-title');
    const leagueIdDisplay = document.getElementById('fpl-league-id-display');
    const tableBody = document.getElementById('fpl-table-body');
    const lastUpdated = document.getElementById('fpl-last-updated');

    if (lastUpdated) {
      if (fplState.lastSyncTime) {
        lastUpdated.textContent = `Auto-Synced at ${fplState.lastSyncTime} • Refreshing every 60s`;
      } else {
        lastUpdated.textContent = `Live Standings Connected`;
      }
    }

    const results = data.standings.results;

    if (results.length > 0) {
      const topPts = results[0].total;
      const leaders = results.filter(r => r.total === topPts);
      const leaderNames = leaders.map(r => r.player_name).join(' & ');
      const leaderTeams = leaders.map(r => r.entry_name).join(' / ');

      const lName = document.getElementById('fpl-leader-name');
      const lTeam = document.getElementById('fpl-leader-teams');
      const lTotal = document.getElementById('fpl-leader-total');

      if (lName) lName.textContent = leaderNames;
      if (lTeam) lTeam.textContent = leaderTeams;
      if (lTotal) lTotal.textContent = `${topPts} pts`;

      const topGwPts = Math.max(...results.map(r => r.event_total));
      const gwScorers = results.filter(r => r.event_total === topGwPts);
      const gwNames = gwScorers.map(r => r.player_name).join(' & ');
      const gwTeams = gwScorers.map(r => r.entry_name).join(' / ');

      const gName = document.getElementById('fpl-top-gw-name');
      const gTeam = document.getElementById('fpl-top-gw-team');
      const gPts = document.getElementById('fpl-top-gw-pts');

      if (gName) gName.textContent = gwNames;
      if (gTeam) gTeam.textContent = gwTeams;
      if (gPts) gPts.textContent = `+${topGwPts} pts`;
    }

    if (tableBody) {
      tableBody.innerHTML = results.map(r => {
        let rankClass = 'rank-other';
        if (r.rank === 1) rankClass = 'rank-1';
        else if (r.rank === 2) rankClass = 'rank-2';
        else if (r.rank === 3) rankClass = 'rank-3';

        return `
          <tr>
            <td><span class="fpl-rank-badge ${rankClass}">#${r.rank}</span></td>
            <td><strong>${r.player_name}</strong></td>
            <td><span class="text-muted">${r.entry_name}</span></td>
            <td><span class="text-emerald font-weight-bold">+${r.event_total}</span></td>
            <td><span class="rating-star-tag" style="font-size:0.9rem;">${r.total} pts</span></td>
          </tr>
        `;
      }).join('');
    }

    lucide.createIcons();
  }

  // --- MONTEVIDEO WEATHER & SMART MATCHDAY CLOTHING ENGINE ---
  function fetchMontevideoWeather() {
    weatherState.loading = true;
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=-34.9011&longitude=-56.1645&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=America%2FMontevideo';

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        weatherState.current = data.current;
        weatherState.daily = data.daily;
        weatherState.lastUpdated = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        weatherState.loading = false;
        renderWeatherHub();
      })
      .catch(err => {
        weatherState.loading = false;
        console.warn('Weather fetch error:', err);
      });
  }

  function getWeatherConditionDescription(code) {
    // WMO Weather interpretation codes
    if (code === 0) return { text: 'Clear Sky ☀️', icon: 'sun' };
    if (code === 1 || code === 2) return { text: 'Mainly Clear / Partly Cloudy ⛅', icon: 'cloud-sun' };
    if (code === 3) return { text: 'Overcast Clouds ☁️', icon: 'cloud' };
    if (code >= 45 && code <= 48) return { text: 'Foggy / Mist 🌫️', icon: 'cloud-fog' };
    if (code >= 51 && code <= 55) return { text: 'Light Drizzle 🌦️', icon: 'cloud-drizzle' };
    if (code >= 61 && code <= 65) return { text: 'Rain Showers 🌧️', icon: 'cloud-rain' };
    if (code >= 80 && code <= 82) return { text: 'Heavy Rain Showers 🌧️⛈️', icon: 'cloud-rain-wind' };
    if (code >= 95) return { text: 'Thunderstorm ⛈️', icon: 'cloud-lightning' };
    return { text: 'Breezy Weather 🌤️', icon: 'cloud' };
  }

  function getWindDirectionCardinal(degrees) {
    const directions = ['N (North)', 'NNE', 'NE', 'ENE', 'E (East)', 'ESE', 'SE', 'SSE', 'S (South)', 'SSW', 'SW', 'WSW', 'W (West)', 'WNW', 'NW', 'NNW'];
    const idx = Math.round((degrees % 360) / 22.5);
    return directions[idx % 16];
  }

  function renderWeatherHub() {
    if (!weatherState.current) return;
    const cur = weatherState.current;

    const tempVal = document.getElementById('weather-current-temp');
    const realFeel = document.getElementById('weather-realfeel');
    const condText = document.getElementById('weather-condition-text');
    const timeStamp = document.getElementById('weather-time-stamp');

    const windSpeed = document.getElementById('weather-wind-speed');
    const windDir = document.getElementById('weather-wind-dir');
    const windImpact = document.getElementById('weather-wind-impact');
    const windRating = document.getElementById('weather-wind-rating');

    const rainProb = document.getElementById('weather-rain-prob');
    const humidity = document.getElementById('weather-humidity');
    const turfGrip = document.getElementById('weather-turf-grip');
    const rainRating = document.getElementById('weather-rain-rating');

    const cond = getWeatherConditionDescription(cur.weather_code);

    if (tempVal) tempVal.textContent = `${Math.round(cur.temperature_2m)}°C`;
    if (realFeel) realFeel.textContent = `${Math.round(cur.apparent_temperature)}°C`;
    if (condText) condText.textContent = cond.text;
    if (timeStamp && weatherState.lastUpdated) timeStamp.textContent = `Live at ${weatherState.lastUpdated}`;

    // Wind logic
    const speed = cur.wind_speed_10m;
    if (windSpeed) windSpeed.textContent = `${speed.toFixed(1)} km/h`;
    if (windDir) windDir.textContent = getWindDirectionCardinal(cur.wind_direction_10m);

    if (windRating && windImpact) {
      if (speed < 12) {
        windRating.textContent = 'Light Breeze';
        windRating.className = 'weather-pill pill-good';
        windImpact.textContent = 'Ball flight: True & Stable';
      } else if (speed <= 24) {
        windRating.textContent = 'Moderate Wind';
        windRating.className = 'weather-pill pill-moderate';
        windImpact.textContent = 'Ball flight: Slight drift on long balls';
      } else {
        windRating.textContent = 'Strong Gusts 💨';
        windRating.className = 'weather-pill pill-alert';
        windImpact.textContent = 'Ball flight: Noticeable curve on aerials';
      }
    }

    // Rain / Humidity logic
    const prec = cur.precipitation || 0;
    const hum = cur.relative_humidity_2m;
    if (humidity) humidity.textContent = `${hum}%`;

    let maxRainProb = 0;
    if (weatherState.daily && weatherState.daily.precipitation_probability_max) {
      maxRainProb = weatherState.daily.precipitation_probability_max[0] || 0;
    }
    if (rainProb) rainProb.textContent = `${maxRainProb}%`;

    if (rainRating && turfGrip) {
      if (prec > 0 || maxRainProb > 50) {
        rainRating.textContent = 'Wet Surface 🌧️';
        rainRating.className = 'weather-pill pill-alert';
        turfGrip.textContent = 'Traction: Slick Turf (Use AG Studs)';
      } else if (hum > 85) {
        rainRating.textContent = 'High Dew / Damp';
        rainRating.className = 'weather-pill pill-moderate';
        turfGrip.textContent = 'Traction: Damp grass, fast ball skip';
      } else {
        rainRating.textContent = 'Dry & Crisp';
        rainRating.className = 'weather-pill pill-good';
        turfGrip.textContent = 'Traction: Optimum Firm Grip';
      }
    }

    // GENERATE INTELLIGENT CLOTHING & GEAR ADVICE
    renderClothingAdvice(cur.temperature_2m, cur.apparent_temperature, speed, maxRainProb, hum);

    // RENDER 5-DAY FORECAST GRID
    renderDailyForecast();

    lucide.createIcons();
  }

  function renderClothingAdvice(temp, feel, wind, rainProb, hum) {
    const summaryBadge = document.getElementById('gear-summary-badge');
    const adviceUpper = document.getElementById('gear-advice-upper');
    const adviceLower = document.getElementById('gear-advice-lower');
    const adviceOuter = document.getElementById('gear-advice-outer');
    const adviceFootwear = document.getElementById('gear-advice-footwear');

    if (!adviceUpper) return;

    if (feel <= 11 || (feel <= 14 && wind >= 20)) {
      // COLD / BREEZY TURF NIGHT
      if (summaryBadge) {
        summaryBadge.textContent = '🥶 Thermal Layer Recommended';
        summaryBadge.className = 'gear-status-badge pill-alert';
      }
      adviceUpper.innerHTML = '<strong>Long-sleeve thermal base layer</strong> underneath club jersey. Keeps core warm during pauses.';
      adviceLower.innerHTML = 'Football shorts + optional <strong>compression tights/leggings</strong>. High grip wool/cotton socks.';
      adviceOuter.innerHTML = '<strong>Windbreaker or fleece track jacket</strong> for pre-match warm-up and post-game sideline.';
      adviceFootwear.innerHTML = 'Standard turf / AG boots. <strong>Goalkeepers: Warm thermal gloves with latex grip!</strong>';
    } else if (feel <= 17) {
      // MODERATE / PLEASANT TURF NIGHT
      if (summaryBadge) {
        summaryBadge.textContent = '⚡ Ideal Football Weather';
        summaryBadge.className = 'gear-status-badge pill-good';
      }
      adviceUpper.innerHTML = 'Standard breathable match jersey. Short sleeves are great during continuous play.';
      adviceLower.innerHTML = 'Standard match shorts + calf-length football socks.';
      adviceOuter.innerHTML = 'Light track zip-up jacket to stay warm before 10:00 PM kickoff and post-match.';
      adviceFootwear.innerHTML = 'AG / Multi-ground studs for crisp acceleration and turns.';
    } else {
      // WARM / HUMID NIGHT
      if (summaryBadge) {
        summaryBadge.textContent = '🔥 Hot & Humid (Hydrate)';
        summaryBadge.className = 'gear-status-badge pill-moderate';
      }
      adviceUpper.innerHTML = 'Ultra-lightweight moisture-wicking jersey. Bring 1 spare dry jersey.';
      adviceLower.innerHTML = 'Lightweight football shorts with moisture ventilation.';
      adviceOuter.innerHTML = 'Light towel for sweat management. 1L+ electrolyte hydration bottle.';
      adviceFootwear.innerHTML = 'Firm turf boots. Breathable cotton grip socks to avoid blisters.';
    }

    if (rainProb >= 40) {
      adviceOuter.innerHTML += ' <span class="text-accent-pink">🌧️ High rain chance: pack a waterproof kit bag & change of dry clothes.</span>';
    }
  }

  function renderDailyForecast() {
    const container = document.getElementById('weather-daily-forecast');
    if (!container || !weatherState.daily) return;

    const daily = weatherState.daily;
    const days = daily.time || [];

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    container.innerHTML = days.slice(0, 5).map((dateStr, i) => {
      const dateObj = new Date(dateStr + 'T12:00:00');
      const dayName = weekdays[dateObj.getDay()];
      const isTuesday = dateObj.getDay() === 2;
      const maxT = Math.round(daily.temperature_2m_max[i]);
      const minT = Math.round(daily.temperature_2m_min[i]);
      const windM = Math.round(daily.wind_speed_10m_max[i]);
      const code = daily.weather_code[i];
      const cond = getWeatherConditionDescription(code);

      return `
        <div class="daily-day-card ${isTuesday ? 'tuesday-highlight' : ''}">
          <span class="daily-day-name">${isTuesday ? '⭐ Tue (Match)' : dayName}</span>
          <span class="daily-day-icon">${cond.text.split(' ').pop()}</span>
          <span class="daily-day-temps">${maxT}° / <span class="text-muted">${minT}°</span></span>
          <span class="daily-day-wind">💨 ${windM} km/h</span>
        </div>
      `;
    }).join('');
  }

  // --- OPTION 1: LIVE CLOUD DATABASE SYNC ENGINE ---
  function fetchCloudRoster() {
    if (!state.cloudEndpoint) return;

    const headers = { 'Accept': 'application/json' };
    if (state.cloudKey) headers['X-Master-Key'] = state.cloudKey;

    fetch(state.cloudEndpoint, { method: 'GET', headers: headers })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        let cloudRoster = null;
        if (Array.isArray(data)) cloudRoster = data;
        else if (data && Array.isArray(data.roster)) cloudRoster = data.roster;
        else if (data && data.record && Array.isArray(data.record.roster)) cloudRoster = data.record.roster;

        if (cloudRoster && cloudRoster.length > 0) {
          state.roster = cloudRoster;
          const manthanP = state.roster.find(p => p.name.toLowerCase() === 'manthan');
          if (manthanP && !manthanP.avatarUrl) {
            manthanP.avatarUrl = 'assets/manthan.jpg';
          }
          localStorage.setItem(STORAGE_KEY_ROSTER, JSON.stringify(state.roster));
          renderAll();
        }
      })
      .catch(err => {});
  }

  function pushCloudRoster() {
    if (!state.cloudEndpoint) return;

    const headers = { 'Content-Type': 'application/json' };
    if (state.cloudKey) headers['X-Master-Key'] = state.cloudKey;

    const payload = JSON.stringify({ roster: state.roster });

    fetch(state.cloudEndpoint, { method: 'PUT', headers: headers, body: payload })
      .then(res => {
        if (!res.ok) {
          return fetch(state.cloudEndpoint, { method: 'POST', headers: headers, body: payload });
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        showToast('Synced updates to central Cloud DB!');
      })
      .catch(err => {});
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Nav Tabs & Mobile Dock Sync
    document.querySelectorAll('.nav-tab, .dock-item').forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        switchTab(targetTab);
      });
    });

    // FPL Live Refresh Button
    document.getElementById('btn-refresh-fpl')?.addEventListener('click', () => {
      fetchFplStandings(state.fplLeagueId);
      showToast('Refreshing live FPL standings...');
    });

    // Weather Live Refresh Button
    document.getElementById('btn-refresh-weather')?.addEventListener('click', () => {
      fetchMontevideoWeather();
      showToast('Refreshing live Montevideo weather...');
    });

    // Save FPL League ID Button
    document.getElementById('btn-save-fpl-id')?.addEventListener('click', () => {
      const newId = document.getElementById('fpl-league-id-input')?.value.trim();
      if (newId) {
        state.fplLeagueId = newId;
        localStorage.setItem(STORAGE_KEY_FPL_ID, newId);
        fetchFplStandings(newId);
        showToast(`Saved FPL League ID: ${newId}`);
      }
    });

    // Date & Venue Inputs
    document.getElementById('match-date')?.addEventListener('change', (e) => {
      state.matchDate = e.target.value;
    });
    document.getElementById('match-venue')?.addEventListener('change', (e) => {
      state.matchVenue = e.target.value;
    });

    // Buttons
    document.getElementById('btn-select-attending')?.addEventListener('click', openAttendanceModal);
    document.getElementById('btn-quick-rsvp')?.addEventListener('click', () => openModal('modal-rsvp'));
    document.getElementById('btn-generate-teams')?.addEventListener('click', generateTeams);
    document.getElementById('btn-reroll')?.addEventListener('click', rerollCombo);
    document.getElementById('btn-copy-whatsapp')?.addEventListener('click', copyWhatsAppMessage);

    // RSVP Textarea Input Preview
    const rsvpTextarea = document.getElementById('rsvp-textarea');
    if (rsvpTextarea) {
      rsvpTextarea.addEventListener('input', previewRsvpParsing);
    }
    document.getElementById('btn-apply-rsvp')?.addEventListener('click', applyRsvpParsing);

    // Form Player Submit
    const formPlayer = document.getElementById('form-player');
    if (formPlayer) {
      formPlayer.addEventListener('submit', handlePlayerSave);
    }

    // ADMIN LOGIN GATE LISTENERS
    document.getElementById('admin-login-form')?.addEventListener('submit', handleAdminLogin);
    document.getElementById('btn-admin-logout')?.addEventListener('click', handleAdminLogout);

    // ADMIN PANEL LISTENERS
    document.getElementById('admin-add-player-form')?.addEventListener('submit', handleAdminAddPlayer);
    
    // Sliders live preview setup for Admin Panel
    ['admin-speed', 'admin-accuracy', 'admin-defense', 'admin-knowledge'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', updateAdminFormCalculatedPreview);
    });

    // Sliders live preview setup for Edit Modal
    ['modal-speed', 'modal-accuracy', 'modal-defense', 'modal-knowledge'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', updateModalFormCalculatedPreview);
    });

    document.getElementById('btn-admin-batch-import')?.addEventListener('click', handleAdminBatchImport);
    document.getElementById('btn-admin-clear-all')?.addEventListener('click', clearAllStorageDatabase);

    // Position Filter Buttons
    document.querySelectorAll('.pos-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.pos-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.posFilter = btn.getAttribute('data-pos');
        const searchVal = document.getElementById('roster-search')?.value.trim().toLowerCase() || '';
        renderRoster(searchVal);
      });
    });

    // Modal Close buttons
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close');
        closeModal(modalId);
      });
    });

    // Roster Search
    document.getElementById('roster-search')?.addEventListener('input', (e) => {
      renderRoster(e.target.value.trim().toLowerCase());
    });

    // Attendance Search & Actions
    document.getElementById('attendance-search')?.addEventListener('input', (e) => {
      renderAttendanceList(e.target.value.trim().toLowerCase());
    });
    document.getElementById('btn-select-all')?.addEventListener('click', selectTopPlayers);
    document.getElementById('btn-clear-all')?.addEventListener('click', clearAllAttendance);
    document.getElementById('btn-confirm-attendance')?.addEventListener('click', () => closeModal('modal-attendance'));

    // JSON Export / Import
    document.getElementById('btn-export-json')?.addEventListener('click', exportRosterJson);
    document.getElementById('input-import-json')?.addEventListener('change', importRosterJson);
  }

  function updateAdminFormCalculatedPreview() {
    const sp = parseFloat(document.getElementById('admin-speed').value) || 7.0;
    const ac = parseFloat(document.getElementById('admin-accuracy').value) || 7.0;
    const df = parseFloat(document.getElementById('admin-defense').value) || 7.0;
    const kn = parseFloat(document.getElementById('admin-knowledge').value) || 7.0;

    document.getElementById('val-admin-speed').textContent = sp.toFixed(1);
    document.getElementById('val-admin-accuracy').textContent = ac.toFixed(1);
    document.getElementById('val-admin-defense').textContent = df.toFixed(1);
    document.getElementById('val-admin-knowledge').textContent = kn.toFixed(1);

    const calc = (sp + ac + df + kn) / 4.0;
    document.getElementById('admin-calc-rating-badge').textContent = `Calculated Rating: ${calc.toFixed(1)} ★`;
  }

  function updateModalFormCalculatedPreview() {
    const sp = parseFloat(document.getElementById('modal-speed').value) || 7.0;
    const ac = parseFloat(document.getElementById('modal-accuracy').value) || 7.0;
    const df = parseFloat(document.getElementById('modal-defense').value) || 7.0;
    const kn = parseFloat(document.getElementById('modal-knowledge').value) || 7.0;

    document.getElementById('val-modal-speed').textContent = sp.toFixed(1);
    document.getElementById('val-modal-accuracy').textContent = ac.toFixed(1);
    document.getElementById('val-modal-defense').textContent = df.toFixed(1);
    document.getElementById('val-modal-knowledge').textContent = kn.toFixed(1);

    const calc = (sp + ac + df + kn) / 4.0;
    document.getElementById('modal-calc-rating-badge').textContent = `Score: ${calc.toFixed(1)} ★`;
  }

  // --- ADMIN AUTHENTICATION HANDLERS ---
  function handleAdminLogin(e) {
    e.preventDefault();
    const userVal = document.getElementById('admin-user-input').value.trim();
    const passVal = document.getElementById('admin-pass-input').value.trim();

    if (userVal === ADMIN_USER && passVal === ADMIN_PASS) {
      state.isAdminAuth = true;
      document.getElementById('admin-login-card').classList.add('hidden');
      document.getElementById('admin-authenticated-content').classList.remove('hidden');
      renderAdminTable();
      showToast('Admin login successful! Access granted.');
    } else {
      showToast('Invalid credentials! Default: admin / admin', 'error');
    }
  }

  function handleAdminLogout() {
    state.isAdminAuth = false;
    document.getElementById('admin-authenticated-content').classList.add('hidden');
    document.getElementById('admin-login-card').classList.remove('hidden');
    document.getElementById('admin-pass-input').value = '';
    showToast('Logged out of Squad Admin Panel.');
  }

  // --- TAB SWITCHING ---
  function switchTab(tabId) {
    document.querySelectorAll('.nav-tab, .dock-item').forEach(t => {
      if (t.getAttribute('data-tab') === tabId) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
    const activePage = document.getElementById(tabId);
    if (activePage) activePage.classList.add('active');

    if (tabId === 'tab-fpl') {
      renderFplHub();
      fetchFplStandings(state.fplLeagueId);
    }

    if (tabId === 'tab-weather') {
      renderWeatherHub();
      fetchMontevideoWeather();
    }

    if (tabId === 'tab-admin') {
      if (state.isAdminAuth) {
        document.getElementById('admin-login-card').classList.add('hidden');
        document.getElementById('admin-authenticated-content').classList.remove('hidden');
        renderAdminTable();
      } else {
        document.getElementById('admin-login-card').classList.remove('hidden');
        document.getElementById('admin-authenticated-content').classList.add('hidden');
      }
    }
  }

  // --- MODAL HELPERS ---
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('hidden');
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
  }

  // --- RSVP WHATSAPP PARSER ENGINE ---
  function previewRsvpParsing() {
    const text = document.getElementById('rsvp-textarea').value;
    const previewContainer = document.getElementById('rsvp-preview-results');
    const tagsGrid = document.getElementById('rsvp-detected-tags');
    const countSpan = document.getElementById('rsvp-detected-count');

    if (!text.trim()) {
      previewContainer.classList.add('hidden');
      return;
    }

    const lines = text.split('\n');
    const detected = [];

    lines.forEach(line => {
      const parsed = parseLineForPlayer(line);
      if (parsed) detected.push(parsed);
    });

    countSpan.textContent = detected.length;
    tagsGrid.innerHTML = detected.map(d => `
      <span class="tag-pill ${d.isNew ? 'new-player' : ''}">
        ${d.name} ${d.isReserve ? `[${d.reserveTag || 'R1'}]` : ''} ${d.positionTag ? `(${d.positionTag})` : ''} ${d.isNew ? '✨ New' : ''}
      </span>
    `).join('');

    previewContainer.classList.remove('hidden');
  }

  function parseLineForPlayer(line) {
    let clean = line.trim();
    if (!clean) return null;

    const resMatch = clean.match(/^(R\d+|Reserve)/i);
    const isReserve = Boolean(resMatch);
    const reserveTag = resMatch ? resMatch[1].toUpperCase() : null;

    clean = clean.replace(/^(?:R\d+|\d+)[\]\)\.\-\s]+/i, '').trim();
    if (!clean || clean.length < 2) return null;

    let positionTag = null;
    if (/keeper|gk/i.test(clean)) {
      positionTag = 'GK';
    } else if (/def/i.test(clean)) {
      positionTag = 'DEF';
    } else if (/mid/i.test(clean)) {
      positionTag = 'MID';
    } else if (/fwd|forward/i.test(clean)) {
      positionTag = 'FWD';
    }

    let namePart = clean;
    if (clean.toLowerCase().includes('aka')) {
      namePart = clean.split(/aka/i)[0].trim();
    }
    namePart = namePart.replace(/[\(\[\-].*?[\)\]]/g, '').trim();

    const cleanLower = namePart.toLowerCase();

    let matched = null;
    for (let i = 0; i < state.roster.length; i++) {
      const p = state.roster[i];
      if (p.name.toLowerCase() === cleanLower) {
        matched = p;
        break;
      }
      if (p.aliases && p.aliases.some(a => a.toLowerCase().trim() === cleanLower)) {
        matched = p;
        break;
      }
    }

    if (!matched) {
      for (let i = 0; i < state.roster.length; i++) {
        const p = state.roster[i];
        const pNameLower = p.name.toLowerCase();
        if (cleanLower && (pNameLower.includes(cleanLower) || cleanLower.includes(pNameLower))) {
          matched = p;
          break;
        }
        if (p.aliases && Array.isArray(p.aliases)) {
          const aliasMatch = p.aliases.some(a => {
            const aLower = a.toLowerCase().trim();
            return aLower && (aLower.includes(cleanLower) || cleanLower.includes(aLower));
          });
          if (aliasMatch) {
            matched = p;
            break;
          }
        }
      }
    }

    return {
      rawLine: line,
      name: matched ? matched.name : (namePart || clean),
      matchedPlayer: matched || null,
      positionTag: positionTag,
      isReserve: isReserve,
      reserveTag: reserveTag,
      isNew: !matched
    };
  }

  function applyRsvpParsing() {
    const text = document.getElementById('rsvp-textarea').value;
    if (!text.trim()) return;

    const lines = text.split('\n');
    let addedCount = 0;
    const attendingOrder = [];

    state.roster.forEach(p => {
      p.attending = false;
      p.overridePos = null;
      p.isExplicitReserve = false;
      p.reserveTag = null;
      p.rsvpIndex = 999;
    });

    lines.forEach((line, idx) => {
      const parsed = parseLineForPlayer(line);
      if (parsed) {
        if (parsed.matchedPlayer) {
          parsed.matchedPlayer.attending = true;
          parsed.matchedPlayer.rsvpIndex = idx;
          if (parsed.positionTag) parsed.matchedPlayer.overridePos = parsed.positionTag;
          if (parsed.isReserve) {
            parsed.matchedPlayer.isExplicitReserve = true;
            parsed.matchedPlayer.reserveTag = parsed.reserveTag || 'R1';
          }
          attendingOrder.push(parsed.matchedPlayer);
          addedCount++;
        } else {
          const newP = {
            id: 'p_' + Date.now() + Math.random().toString(36).substr(2, 4),
            name: parsed.name,
            aliases: [parsed.name],
            primaryPos: parsed.positionTag || 'MID',
            secPos: [],
            attending: true,
            overridePos: parsed.positionTag || null,
            isExplicitReserve: parsed.isReserve,
            reserveTag: parsed.reserveTag || 'R1',
            rsvpIndex: idx,
            avatarUrl: '',
            adminRatings: {
              "System Default": { "adminName": "System Default", "speed": 7.0, "accuracy": 7.0, "defense": 7.0, "knowledge": 7.0 }
            }
          };
          state.roster.push(newP);
          attendingOrder.push(newP);
          addedCount++;
        }
      }
    });

    if (attendingOrder.length === 15) {
      const explicitRes = attendingOrder.find(p => p.isExplicitReserve);
      if (!explicitRes) {
        const lastPlayer = attendingOrder[attendingOrder.length - 1];
        lastPlayer.isExplicitReserve = true;
        lastPlayer.reserveTag = 'R1';
      }
    }

    saveRoster();
    closeModal('modal-rsvp');
    document.getElementById('rsvp-textarea').value = '';
    document.getElementById('rsvp-preview-results').classList.add('hidden');
    showToast(`Checked in ${addedCount} players from WhatsApp RSVP!`);
    switchTab('tab-balancer');
  }

  // --- SQUAD ADMIN PANEL HANDLERS ---
  function handleAdminAddPlayer(e) {
    e.preventDefault();
    const adminName = document.getElementById('admin-reviewer-name').value.trim() || 'Admin 1';
    const name = document.getElementById('admin-name').value.trim();
    const aliasesRaw = document.getElementById('admin-aliases').value;
    const avatarUrl = document.getElementById('admin-avatar-url').value.trim();
    const primaryPos = document.getElementById('admin-primary-pos').value;

    const speed = parseFloat(document.getElementById('admin-speed').value) || 7.0;
    const accuracy = parseFloat(document.getElementById('admin-accuracy').value) || 7.0;
    const defense = parseFloat(document.getElementById('admin-defense').value) || 7.0;
    const knowledge = parseFloat(document.getElementById('admin-knowledge').value) || 7.0;

    if (!name) return;

    const aliases = aliasesRaw ? aliasesRaw.split(',').map(s => s.trim()).filter(Boolean) : [name];
    if (!aliases.includes(name)) aliases.unshift(name);

    const secPos = [];
    document.querySelectorAll('input[name="admin-sec-pos"]:checked').forEach(cb => {
      if (cb.value !== primaryPos) secPos.push(cb.value);
    });

    let existingP = state.roster.find(p => p.name.toLowerCase() === name.toLowerCase());

    if (!existingP) {
      existingP = {
        id: 'p_' + Date.now() + Math.random().toString(36).substr(2, 4),
        name,
        aliases,
        primaryPos,
        secPos,
        attending: true,
        overridePos: null,
        avatarUrl,
        adminRatings: {}
      };
      state.roster.push(existingP);
    } else {
      existingP.primaryPos = primaryPos;
      existingP.secPos = secPos;
      if (aliases.length > 0) existingP.aliases = aliases;
      if (avatarUrl) existingP.avatarUrl = avatarUrl;
    }

    if (!existingP.adminRatings) existingP.adminRatings = {};
    existingP.adminRatings[adminName] = {
      adminName,
      speed,
      accuracy,
      defense,
      knowledge,
      timestamp: Date.now()
    };

    saveRoster();

    document.getElementById('admin-add-player-form').reset();
    document.getElementById('admin-reviewer-name').value = adminName;
    updateAdminFormCalculatedPreview();

    const stats = getPlayerRatingStats(existingP);
    showToast(`Saved rating & DP for ${name} by ${adminName}! Average: ${stats.rating.toFixed(1)} ★`);
  }

  function handleAdminBatchImport() {
    const text = document.getElementById('admin-batch-textarea').value.trim();
    if (!text) return;

    const lines = text.split('\n');
    let importedCount = 0;

    lines.forEach(line => {
      const parts = line.split(',').map(s => s.trim()).filter(Boolean);
      if (parts.length >= 1) {
        const name = parts[0];
        const rating = parts[1] ? parseFloat(parts[1]) || 7.0 : 7.0;
        const primaryPos = parts[2] && ['GK', 'DEF', 'MID', 'FWD'].includes(parts[2].toUpperCase()) ? parts[2].toUpperCase() : 'MID';
        const secPos = parts[3] ? [parts[3].toUpperCase()] : [];
        const aliases = parts[4] ? parts[4].split('/').map(a => a.trim()) : [name];
        if (!aliases.includes(name)) aliases.unshift(name);

        const newP = {
          id: 'p_' + Date.now() + Math.random().toString(36).substr(2, 4),
          name,
          aliases,
          primaryPos,
          secPos,
          attending: true,
          overridePos: null,
          avatarUrl: '',
          adminRatings: {
            "System Default": { "adminName": "System Default", "speed": rating, "accuracy": rating, "defense": rating, "knowledge": rating }
          }
        };
        state.roster.push(newP);
        importedCount++;
      }
    });

    saveRoster();
    document.getElementById('admin-batch-textarea').value = '';
    showToast(`Batch imported ${importedCount} players to storage & cloud!`);
  }

  function clearAllStorageDatabase() {
    if (!confirm('CAUTION: Are you sure you want to clear all team members stored in database?')) return;
    state.roster = [];
    saveRoster();
    showToast('Storage database cleared.', 'error');
  }

  function renderAdminTable() {
    const tbody = document.getElementById('admin-table-body');
    const tableCount = document.getElementById('admin-table-count');
    const statTotal = document.getElementById('admin-stat-total');
    const statGk = document.getElementById('admin-stat-gk');
    const statAvg = document.getElementById('admin-stat-avg');

    if (!tbody) return;

    const total = state.roster.length;
    const gks = state.roster.filter(p => p.primaryPos === 'GK').length;
    const avgRating = total > 0 ? (state.roster.reduce((s, p) => s + getRating(p), 0) / total).toFixed(1) : '0.0';

    if (tableCount) tableCount.textContent = total;
    if (statTotal) statTotal.textContent = total;
    if (statGk) statGk.textContent = gks;
    if (statAvg) statAvg.textContent = `${avgRating}★`;

    tbody.innerHTML = state.roster.map(p => {
      const stats = getPlayerRatingStats(p);
      const initials = p.name.split(' ').map(n => n[0]).join('').substr(0, 2).toUpperCase();
      const avatarHtml = p.avatarUrl ? `<img src="${p.avatarUrl}" alt="${p.name}" class="admin-dp-thumb">` : `<span class="pos-badge pos-${p.primaryPos.toLowerCase()}">${initials}</span>`;

      return `
        <tr>
          <td>${avatarHtml}</td>
          <td><strong>${p.name}</strong></td>
          <td><span class="pos-badge pos-${p.primaryPos.toLowerCase()}">${p.primaryPos}</span></td>
          <td><span class="text-muted">${p.aliases ? p.aliases.join(', ') : '-'}</span></td>
          <td><span class="rating-badge">${stats.rating.toFixed(1)} ★</span></td>
          <td><span class="admin-count-badge">${stats.count > 0 ? `${stats.count} Admins` : 'Default'}</span></td>
          <td>
            <button class="btn-icon btn-edit-player" data-id="${p.id}" title="Edit / Rate"><i data-lucide="edit-3"></i></button>
            <button class="btn-icon btn-delete-player" data-id="${p.id}" title="Delete"><i data-lucide="trash-2"></i></button>
          </td>
        </tr>
      `;
    }).join('');

    lucide.createIcons();

    tbody.querySelectorAll('.btn-edit-player').forEach(btn => {
      btn.addEventListener('click', () => openPlayerModal(btn.getAttribute('data-id')));
    });
    tbody.querySelectorAll('.btn-delete-player').forEach(btn => {
      btn.addEventListener('click', () => deletePlayer(btn.getAttribute('data-id')));
    });
  }

  // --- AUTOMATIC TEAM BALANCING ENGINE ---
  function generateTeams() {
    const attending = state.roster.filter(p => p.attending);

    if (attending.length < 4) {
      openAttendanceModal();
      showToast(`Please select at least 4 attending players to generate teams! Current: ${attending.length}`, 'error');
      return;
    }

    const config = determineAutoMatchFormat(attending.length);

    let activePool = [...attending];
    let designatedReserves = [];

    if (config.reserveCount > 0) {
      const explicitResList = activePool.filter(p => p.isExplicitReserve);
      if (explicitResList.length > 0) {
        explicitResList.forEach((rp, idx) => {
          designatedReserves.push({ player: rp, tag: rp.reserveTag || `R${idx + 1}`, label: `${rp.reserveTag || 'R1'} - Floating Rotation Sub` });
        });
        const resIds = new Set(explicitResList.map(p => p.id));
        activePool = activePool.filter(p => !resIds.has(p.id));
      } else {
        const sortedByRsvp = [...activePool].sort((a, b) => (b.rsvpIndex || 0) - (a.rsvpIndex || 0));
        const lastPlayer = sortedByRsvp[0];
        designatedReserves.push({ player: lastPlayer, tag: 'R1', label: 'R1 - Floating Rotation Sub' });
        activePool = activePool.filter(p => p.id !== lastPlayer.id);
      }
    }

    const combinations = [];
    const teamSize = config.teamSize;
    const subsets = getKSubsets(activePool, teamSize);
    
    subsets.forEach(teamA => {
      const teamAIds = new Set(teamA.map(p => p.id));
      const teamB = activePool.filter(p => !teamAIds.has(p.id)).slice(0, teamSize);

      const scoreObj = evaluateTeamSplit(teamA, teamB);
      combinations.push({
        teamA,
        teamB,
        reserves: designatedReserves,
        formatLabel: config.label,
        score: scoreObj.score,
        ratingDiff: scoreObj.ratingDiff,
        gkBalanced: scoreObj.gkBalanced,
        teamAAvg: scoreObj.teamAAvg,
        teamBAvg: scoreObj.teamBAvg,
        teamAOffense: scoreObj.teamAOffense,
        teamBOffense: scoreObj.teamBOffense
      });
    });

    combinations.sort((a, b) => b.score - a.score);

    state.currentCombos = combinations;
    state.comboIndex = 0;
    state.generatedMatch = combinations[0];

    renderGeneratedTeams();
    document.getElementById('teams-output-container').classList.remove('hidden');
    document.getElementById('teams-output-container').scrollIntoView({ behavior: 'smooth' });
    showToast(`Balanced teams generated for ${config.label}!`);
  }

  function rerollCombo() {
    if (!state.currentCombos || state.currentCombos.length <= 1) return;
    state.comboIndex = (state.comboIndex + 1) % Math.min(state.currentCombos.length, 10);
    state.generatedMatch = state.currentCombos[state.comboIndex];
    renderGeneratedTeams();
    showToast(`Switched to balanced option #${state.comboIndex + 1}!`);
  }

  function evaluateTeamSplit(teamA, teamB) {
    const getPos = p => p.overridePos || p.primaryPos;

    const teamARating = teamA.reduce((sum, p) => sum + getRating(p), 0);
    const teamBRating = teamB.reduce((sum, p) => sum + getRating(p), 0);
    const teamAAvg = teamARating / (teamA.length || 1);
    const teamBAvg = teamBRating / (teamB.length || 1);
    const ratingDiff = Math.abs(teamAAvg - teamBAvg);

    const teamAGKs = teamA.filter(p => getPos(p) === 'GK').length;
    const teamBGKs = teamB.filter(p => getPos(p) === 'GK').length;
    const gkDiff = Math.abs(teamAGKs - teamBGKs);
    const gkBalanced = (teamAGKs === teamBGKs);

    const teamAOffense = teamA.filter(p => ['FWD', 'MID'].includes(getPos(p))).reduce((sum, p) => sum + getRating(p), 0) / (teamA.length || 1);
    const teamBOffense = teamB.filter(p => ['FWD', 'MID'].includes(getPos(p))).reduce((sum, p) => sum + getRating(p), 0) / (teamB.length || 1);
    const offenseDiff = Math.abs(teamAOffense - teamBOffense);

    let penalty = (ratingDiff * 25) + (gkDiff * 30) + (offenseDiff * 10);
    let score = Math.max(70, Math.min(100, Math.round(100 - penalty)));

    return {
      score,
      ratingDiff: parseFloat(ratingDiff.toFixed(2)),
      gkBalanced,
      teamAAvg: parseFloat(teamAAvg.toFixed(2)),
      teamBAvg: parseFloat(teamBAvg.toFixed(2)),
      teamAOffense: parseFloat(teamAOffense.toFixed(2)),
      teamBOffense: parseFloat(teamBOffense.toFixed(2))
    };
  }

  function getKSubsets(array, k) {
    const results = [];
    function helper(start, current) {
      if (current.length === k) {
        results.push([...current]);
        return;
      }
      for (let i = start; i < array.length; i++) {
        current.push(array[i]);
        helper(i + 1, current);
        current.pop();
        if (results.length > 300) break;
      }
    }
    helper(0, []);
    return results;
  }

  // --- RENDER TEAMS VIEW ---
  function renderGeneratedTeams() {
    const match = state.generatedMatch;
    if (!match) return;

    const scoreVal = document.getElementById('balance-score-val');
    const scoreDesc = document.getElementById('balance-score-desc');
    const scorePath = document.getElementById('score-circle-path');
    const ratingGapVal = document.getElementById('rating-gap-val');
    const gkBalanceVal = document.getElementById('gk-balance-val');

    if (scoreVal) scoreVal.textContent = `${match.score}%`;
    if (ratingGapVal) ratingGapVal.textContent = `${match.ratingDiff} pts`;
    if (gkBalanceVal) gkBalanceVal.textContent = match.gkBalanced ? 'Yes (Balanced)' : 'Uneven';
    if (scorePath) scorePath.setAttribute('stroke-dasharray', `${match.score}, 100`);

    if (scoreDesc) {
      if (match.score >= 95) scoreDesc.textContent = `🔥 Perfect Balance! (${match.formatLabel})`;
      else if (match.score >= 90) scoreDesc.textContent = `⚡ Excellent balance across skill and positions. (${match.formatLabel})`;
      else scoreDesc.textContent = `⚖️ Good overall balance (${match.formatLabel}).`;
    }

    document.getElementById('team-a-avg').textContent = match.teamAAvg;
    document.getElementById('team-a-offense').textContent = match.teamAOffense;
    document.getElementById('team-b-avg').textContent = match.teamBAvg;
    document.getElementById('team-b-offense').textContent = match.teamBOffense;

    renderTeamPlayerList('team-a-list', match.teamA);
    renderTeamPlayerList('team-b-list', match.teamB);

    // Reserves Section
    const reservesCard = document.getElementById('reserves-card');
    const reservesList = document.getElementById('reserves-list');

    if (match.reserves && match.reserves.length > 0) {
      reservesList.innerHTML = match.reserves.map(r => `
        <li class="reserve-item-pill">
          <span class="reserve-tag">${r.tag}</span>
          <span class="player-name-text"><strong>${r.player.name}</strong> (${r.player.overridePos || r.player.primaryPos})</span>
          <span class="player-rating-pill">${getRating(r.player).toFixed(1)} ★</span>
          <span class="text-muted">(${r.label})</span>
        </li>
      `).join('');
      reservesCard.classList.remove('hidden');
    } else {
      reservesCard.classList.add('hidden');
    }

    renderPitchTactical(match.teamA, match.teamB, match.reserves);
  }

  function renderTeamPlayerList(containerId, players) {
    const ul = document.getElementById(containerId);
    if (!ul) return;

    const posOrder = { GK: 1, DEF: 2, MID: 3, FWD: 4 };
    const getPos = p => p.overridePos || p.primaryPos;
    const sorted = [...players].sort((a, b) => posOrder[getPos(a)] - posOrder[getPos(b)]);

    ul.innerHTML = sorted.map(p => {
      const pos = getPos(p);
      const initials = p.name.split(' ').map(n => n[0]).join('').substr(0, 2).toUpperCase();
      const avatarContent = p.avatarUrl ? `<img src="${p.avatarUrl}" alt="${p.name}" class="avatar-img">` : initials;

      return `
        <li class="player-item">
          <div class="player-main-info">
            <div class="player-avatar-circle pos-${pos.toLowerCase()}" style="width:30px;height:30px;font-size:0.7rem;">${avatarContent}</div>
            <span class="pos-badge pos-${pos.toLowerCase()}">${pos}</span>
            <span class="player-name-text">${p.name}</span>
            ${p.overridePos ? `<span class="sec-pos-tags">(${pos} today)</span>` : ''}
          </div>
          <span class="player-rating-pill">${getRating(p).toFixed(1)} ★</span>
        </li>
      `;
    }).join('');
  }

  function renderPitchTactical(teamA, teamB, reserves = []) {
    const pitchA = document.getElementById('pitch-team-a');
    const pitchB = document.getElementById('pitch-team-b');
    const pitchTitle = document.getElementById('pitch-formation-title');

    if (!pitchA || !pitchB) return;

    if (pitchTitle) pitchTitle.textContent = `${state.generatedMatch ? state.generatedMatch.formatLabel : 'Auto'} Tactical Formation View`;

    pitchA.innerHTML = renderPitchHalfRows(teamA, 'A', 'token-a', false);
    pitchB.innerHTML = renderPitchHalfRows(teamB, 'B', 'token-b', true);
  }

  function renderPitchHalfRows(players, teamTag, tokenClass, isBottomHalf = false) {
    const getPos = p => p.overridePos || p.primaryPos;
    
    let gks = players.filter(p => getPos(p) === 'GK');
    if (gks.length === 0) gks = [players[0]];
    const gkIds = new Set(gks.map(p => p.id));

    const remaining = players.filter(p => !gkIds.has(p.id));
    
    let fwds = remaining.filter(p => getPos(p) === 'FWD');
    if (fwds.length === 0 && remaining.length > 0) {
      fwds = [remaining[remaining.length - 1]];
    }
    const fwdIds = new Set(fwds.map(p => p.id));

    const defsAndMids = remaining.filter(p => !fwdIds.has(p.id));

    const renderNode = p => {
      const avatarContent = p.avatarUrl ? `<img src="${p.avatarUrl}" alt="${p.name}" class="avatar-img">` : getPos(p);
      return `
        <div class="pitch-player-node">
          <div class="pitch-token ${tokenClass}">${avatarContent}</div>
          <span class="pitch-player-name">${p.name.split(' ')[0]}</span>
        </div>
      `;
    };

    const gkRowHtml = `<div class="pitch-row">${gks.map(renderNode).join('')}</div>`;
    const midRowHtml = `<div class="pitch-row">${defsAndMids.map(renderNode).join('')}</div>`;
    const fwdRowHtml = `<div class="pitch-row">${fwds.map(renderNode).join('')}</div>`;

    if (isBottomHalf) {
      return fwdRowHtml + midRowHtml + gkRowHtml;
    } else {
      return gkRowHtml + midRowHtml + fwdRowHtml;
    }
  }

  function copyWhatsAppMessage() {
    const match = state.generatedMatch;
    if (!match) return;

    const getPos = p => p.overridePos || p.primaryPos;
    const formatDate = (dateStr) => {
      const d = new Date(dateStr + 'T00:00:00');
      return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    let msg = `⚽ *FC CALLE MUNDE - MATCH TEAMS* ⚽\n`;
    msg += `📅 *Date:* ${formatDate(state.matchDate)}\n`;
    msg += `📍 *Venue:* ${state.matchVenue}\n`;
    msg += `⚔️ *Format:* ${match.formatLabel} | ⚖️ *Balance Index:* ${match.score}%\n\n`;

    msg += `🎽 *TEAM A (BIBS / LIGHT)* (Avg: ${match.teamAAvg}★)\n`;
    match.teamA.forEach((p, i) => {
      msg += `${i + 1}. ${p.name} (${getPos(p)})\n`;
    });

    msg += `\n👕 *TEAM B (DARK / NO BIBS)* (Avg: ${match.teamBAvg}★)\n`;
    match.teamB.forEach((p, i) => {
      msg += `${i + 1}. ${p.name} (${getPos(p)})\n`;
    });

    if (match.reserves && match.reserves.length > 0) {
      msg += `\n🔄 *RESERVES / ROTATION SUBS:*\n`;
      match.reserves.forEach((r) => {
        msg += `${r.tag} - ${r.player.name} (${r.player.overridePos || r.player.primaryPos})\n`;
      });
    }

    msg += `\n🔥 Let's play! Please be on pitch 10 mins early.`;

    navigator.clipboard.writeText(msg).then(() => {
      showToast('Copied formatted match announcement to clipboard!');
    }).catch(() => {
      showToast('Copy failed. Please manually select text.', 'error');
    });
  }

  function renderRoster(filterText = '') {
    const container = document.getElementById('roster-list-container');
    const totalCount = document.getElementById('count-total-players');
    if (!container) return;

    const total = state.roster.length;
    if (totalCount) totalCount.textContent = total;

    const gksCount = state.roster.filter(p => p.primaryPos === 'GK').length;
    const defsCount = state.roster.filter(p => p.primaryPos === 'DEF').length;
    const midsCount = state.roster.filter(p => p.primaryPos === 'MID').length;
    const fwdsCount = state.roster.filter(p => p.primaryPos === 'FWD').length;

    const rosterStatsList = state.roster.map(p => getPlayerRatingStats(p));
    const avgRating = total > 0 ? (rosterStatsList.reduce((sum, s) => sum + s.rating, 0) / total).toFixed(1) : '0.0';

    const highestRatedIndex = rosterStatsList.reduce((maxIdx, s, idx, arr) => s.rating > arr[maxIdx].rating ? idx : maxIdx, 0);
    const highestPlayer = state.roster[highestRatedIndex];
    const highestStats = rosterStatsList[highestRatedIndex];

    const rStatTotal = document.getElementById('roster-stat-total');
    const rStatAvg = document.getElementById('roster-stat-avg');
    const rStatStar = document.getElementById('roster-stat-star');

    if (rStatTotal) rStatTotal.textContent = total;
    if (rStatAvg) rStatAvg.textContent = `${avgRating}★`;
    if (rStatStar) rStatStar.textContent = highestPlayer ? `${highestPlayer.name} (${highestStats ? highestStats.rating.toFixed(1) : 7.0}★)` : '-';

    const cAll = document.getElementById('filter-count-all');
    const cGk = document.getElementById('filter-count-gk');
    const cDef = document.getElementById('filter-count-def');
    const cMid = document.getElementById('filter-count-mid');
    const cFwd = document.getElementById('filter-count-fwd');

    if (cAll) cAll.textContent = total;
    if (cGk) cGk.textContent = gksCount;
    if (cDef) cDef.textContent = defsCount;
    if (cMid) cMid.textContent = midsCount;
    if (cFwd) cFwd.textContent = fwdsCount;

    let filtered = state.roster;

    if (state.posFilter && state.posFilter !== 'ALL') {
      filtered = filtered.filter(p => p.primaryPos === state.posFilter);
    }

    if (filterText) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(filterText) ||
        p.primaryPos.toLowerCase().includes(filterText) ||
        (p.aliases && p.aliases.some(a => a.toLowerCase().includes(filterText)))
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="glass-card full-width text-center" style="grid-column: 1 / -1; padding: 40px;">
          <p class="text-muted">No players found matching current search or position filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => {
      const stats = getPlayerRatingStats(p);
      const posClass = `pos-${p.primaryPos.toLowerCase()}`;
      const initials = p.name.split(' ').map(n => n[0]).join('').substr(0, 2).toUpperCase();
      const avatarContent = p.avatarUrl ? `<img src="${p.avatarUrl}" alt="${p.name}" class="avatar-img">` : initials;

      return `
        <div class="player-card">
          <div class="player-card-header">
            <div class="player-avatar-box">
              <div class="player-avatar-circle ${posClass}">${avatarContent}</div>
              <div class="player-card-title">
                <h3>${p.name}</h3>
                ${p.aliases && p.aliases.length > 0 ? `
                  <div class="player-aliases-tags">
                    ${p.aliases.map(a => `<span class="alias-pill">${a}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
            <div class="rating-box-stack text-right">
              <span class="rating-star-tag">${stats.rating.toFixed(1)} ★</span>
              ${stats.count > 0 ? `<br><span class="admin-count-badge" style="margin-top:4px;display:inline-block;">${stats.count} Admins</span>` : ''}
            </div>
          </div>

          <!-- 4 ATTRIBUTE PROGRESS METERS -->
          <div class="player-card-attributes">
            <div class="attr-row">
              <span class="attr-name">⚡ Speed</span>
              <div class="attr-bar-wrapper"><div class="attr-bar-fill" style="width: ${stats.speedAvg * 10}%"></div></div>
              <span class="attr-score-num">${stats.speedAvg}</span>
            </div>
            <div class="attr-row">
              <span class="attr-name">🎯 Accuracy</span>
              <div class="attr-bar-wrapper"><div class="attr-bar-fill" style="width: ${stats.accuracyAvg * 10}%"></div></div>
              <span class="attr-score-num">${stats.accuracyAvg}</span>
            </div>
            <div class="attr-row">
              <span class="attr-name">🛡️ Defense</span>
              <div class="attr-bar-wrapper"><div class="attr-bar-fill" style="width: ${stats.defenseAvg * 10}%"></div></div>
              <span class="attr-score-num">${stats.defenseAvg}</span>
            </div>
            <div class="attr-row">
              <span class="attr-name">🧠 Knowledge</span>
              <div class="attr-bar-wrapper"><div class="attr-bar-fill" style="width: ${stats.knowledgeAvg * 10}%"></div></div>
              <span class="attr-score-num">${stats.knowledgeAvg}</span>
            </div>
          </div>

          <div class="player-card-footer">
            <div class="player-pos-pills">
              <span class="pos-badge ${posClass}">${p.primaryPos}</span>
              ${p.secPos && p.secPos.length > 0 ? p.secPos.map(sp => `<span class="sec-pos-tags">(${sp})</span>`).join('') : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    lucide.createIcons();
  }

  function openPlayerModal(playerId = null) {
    const modalTitle = document.getElementById('modal-player-title');
    const form = document.getElementById('form-player');
    if (!form) return;

    form.reset();
    document.getElementById('player-id').value = '';
    document.getElementById('modal-reviewer-name').value = 'Admin 1';
    document.getElementById('player-avatar-url').value = '';

    const pastReviewsBox = document.getElementById('modal-past-reviews-container');
    const pastReviewsList = document.getElementById('modal-past-reviews-list');
    const pastReviewsCount = document.getElementById('modal-reviews-count');

    if (playerId) {
      const p = state.roster.find(item => item.id === playerId);
      if (p) {
        modalTitle.textContent = `Edit & Rate: ${p.name}`;
        document.getElementById('player-id').value = p.id;
        document.getElementById('player-name').value = p.name;
        document.getElementById('player-aliases').value = p.aliases ? p.aliases.join(', ') : '';
        document.getElementById('player-avatar-url').value = p.avatarUrl || '';
        document.getElementById('player-primary-pos').value = p.primaryPos;

        const stats = getPlayerRatingStats(p);
        document.getElementById('modal-speed').value = stats.speedAvg;
        document.getElementById('modal-accuracy').value = stats.accuracyAvg;
        document.getElementById('modal-defense').value = stats.defenseAvg;
        document.getElementById('modal-knowledge').value = stats.knowledgeAvg;

        updateModalFormCalculatedPreview();

        document.querySelectorAll('input[name="sec-pos"]').forEach(cb => {
          cb.checked = p.secPos ? p.secPos.includes(cb.value) : false;
        });

        if (stats.adminList && stats.adminList.length > 0) {
          pastReviewsCount.textContent = stats.adminList.length;
          pastReviewsList.innerHTML = stats.adminList.map(a => `
            <div class="review-item-pill">
              <span><strong>${a.adminName}</strong> rated:</span>
              <span class="rating-badge">${a.adminScore.toFixed(1)} ★ (Spd:${a.speed} Acc:${a.accuracy} Def:${a.defense} Knw:${a.knowledge})</span>
            </div>
          `).join('');
          pastReviewsBox.classList.remove('hidden');
        } else {
          pastReviewsBox.classList.add('hidden');
        }
      }
    } else {
      modalTitle.textContent = 'Add New Player';
      document.getElementById('modal-speed').value = 7.0;
      document.getElementById('modal-accuracy').value = 7.0;
      document.getElementById('modal-defense').value = 7.0;
      document.getElementById('modal-knowledge').value = 7.0;
      updateModalFormCalculatedPreview();
      pastReviewsBox.classList.add('hidden');
    }

    openModal('modal-player');
  }

  function handlePlayerSave(e) {
    e.preventDefault();
    const id = document.getElementById('player-id').value;
    const adminName = document.getElementById('modal-reviewer-name').value.trim() || 'Admin 1';
    const name = document.getElementById('player-name').value.trim();
    const aliasesRaw = document.getElementById('player-aliases').value;
    const avatarUrl = document.getElementById('player-avatar-url').value.trim();
    const primaryPos = document.getElementById('player-primary-pos').value;

    const speed = parseFloat(document.getElementById('modal-speed').value) || 7.0;
    const accuracy = parseFloat(document.getElementById('modal-accuracy').value) || 7.0;
    const defense = parseFloat(document.getElementById('modal-defense').value) || 7.0;
    const knowledge = parseFloat(document.getElementById('modal-knowledge').value) || 7.0;

    const aliases = aliasesRaw ? aliasesRaw.split(',').map(s => s.trim()).filter(Boolean) : [name];
    if (!aliases.includes(name)) aliases.unshift(name);

    const secPos = [];
    document.querySelectorAll('input[name="sec-pos"]:checked').forEach(cb => {
      if (cb.value !== primaryPos) secPos.push(cb.value);
    });

    if (!name) return;

    let p = null;
    if (id) {
      p = state.roster.find(item => item.id === id);
    }
    if (!p) {
      p = {
        id: 'p_' + Date.now(),
        name,
        aliases,
        primaryPos,
        secPos,
        attending: true,
        overridePos: null,
        avatarUrl,
        adminRatings: {}
      };
      state.roster.push(p);
    } else {
      p.name = name;
      p.aliases = aliases;
      p.primaryPos = primaryPos;
      p.secPos = secPos;
      if (avatarUrl) p.avatarUrl = avatarUrl;
    }

    if (!p.adminRatings) p.adminRatings = {};
    p.adminRatings[adminName] = {
      adminName,
      speed,
      accuracy,
      defense,
      knowledge,
      timestamp: Date.now()
    };

    saveRoster();
    closeModal('modal-player');

    const stats = getPlayerRatingStats(p);
    showToast(`Saved rating & DP for ${name} by ${adminName}! Average: ${stats.rating.toFixed(1)} ★`);
  }

  function deletePlayer(playerId) {
    if (!confirm('Are you sure you want to remove this player from FC Calle Munde roster?')) return;
    state.roster = state.roster.filter(p => p.id !== playerId);
    saveRoster();
    showToast('Player removed from roster.');
  }

  function updateAttendanceCount() {
    const attendingCount = state.roster.filter(p => p.attending).length;
    const config = determineAutoMatchFormat(attendingCount);

    const countAttending = document.getElementById('count-attending');
    const countTarget = document.getElementById('count-target');
    const autoFormatText = document.getElementById('auto-format-text');

    if (countAttending) countAttending.textContent = attendingCount;
    if (countTarget) countTarget.textContent = attendingCount;
    if (autoFormatText) autoFormatText.textContent = config.label;
  }

  function openAttendanceModal() {
    renderAttendanceList();
    openModal('modal-attendance');
  }

  function renderAttendanceList(filterText = '') {
    const grid = document.getElementById('attendance-list-grid');
    const countAttending = document.getElementById('modal-attending-count');
    const countTarget = document.getElementById('modal-target-count');
    if (!grid) return;

    const attendingCount = state.roster.filter(p => p.attending).length;
    const config = determineAutoMatchFormat(attendingCount);

    if (countAttending) countAttending.textContent = attendingCount;
    if (countTarget) countTarget.textContent = attendingCount;

    let filtered = state.roster;
    if (filterText) {
      filtered = state.roster.filter(p =>
        p.name.toLowerCase().includes(filterText) ||
        (p.aliases && p.aliases.some(a => a.toLowerCase().includes(filterText)))
      );
    }

    grid.innerHTML = filtered.map(p => `
      <div class="att-card ${p.attending ? 'selected' : ''}" data-id="${p.id}">
        <input type="checkbox" class="att-checkbox" ${p.attending ? 'checked' : ''}>
        <span class="pos-badge pos-${(p.overridePos || p.primaryPos).toLowerCase()}">${p.overridePos || p.primaryPos}</span>
        <span class="player-name-text">${p.name}</span>
        <span class="player-rating-pill">${getRating(p).toFixed(1)}</span>
      </div>
    `).join('');

    grid.querySelectorAll('.att-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const p = state.roster.find(item => item.id === id);
        if (p) {
          p.attending = !p.attending;
          saveRoster();
          renderAttendanceList(filterText);
        }
      });
    });
  }

  function selectTopPlayers() {
    const attendingCount = state.roster.filter(p => p.attending).length || 14;
    state.roster.forEach((p, idx) => {
      p.attending = idx < attendingCount;
    });
    saveRoster();
    renderAttendanceList();
    showToast(`Selected top ${attendingCount} players.`);
  }

  function clearAllAttendance() {
    state.roster.forEach(p => p.attending = false);
    saveRoster();
    renderAttendanceList();
  }

  function exportRosterJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.roster, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `FC_Calle_Munde_Roster_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast('Exported roster JSON file!');
  }

  function importRosterJson(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (evt) {
      try {
        const imported = JSON.parse(evt.target.result);
        if (Array.isArray(imported)) {
          state.roster = imported;
          saveRoster();
          showToast('Imported squad roster successfully!');
        }
      } catch (err) {
        showToast('Invalid JSON file format.', 'error');
      }
    };
    reader.readAsText(file);
  }

  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
    toast.innerHTML = `
      <i data-lucide="${type === 'error' ? 'alert-circle' : 'check-circle-2'}" class="${type === 'error' ? 'text-accent-pink' : 'text-emerald'}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(40px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function renderAll() {
    renderRoster();
    if (state.isAdminAuth) {
      renderAdminTable();
    }
    updateAttendanceCount();
  }

  // --- ANTIGRAVITY AMBIENT PARTICLE & GLOW MESH ENGINE ---
  function initAntigravityParticles() {
    const canvas = document.getElementById('antigravity-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particleCount = Math.min(width < 768 ? 35 : 70, 85);
    const particles = [];

    const colors = [
      'rgba(16, 185, 129, 0.45)', // Emerald glow
      'rgba(56, 189, 248, 0.35)', // Cyan glow
      'rgba(245, 158, 11, 0.3)'   // Gold subtle
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseAlpha: Math.random() * 0.5 + 0.2
      });
    }

    let mouse = { x: -1000, y: -1000 };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with delicate Antigravity constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and move particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Soft mouse evasion / attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  if (document.getElementById('app')) {
    init();
  }

})();
