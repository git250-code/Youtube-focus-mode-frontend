# 🎯 YouTube Focus — Frontend (Chrome extension)

A small Chrome extension that lets you load and play YouTube playlists in a distraction-focused way.  
The extension fetches playlist items from a backend API (hosted separately) and opens videos minimalistically.

---

## Overview

This frontend is a Chrome extension built with HTML/CSS/JS. It displays a popup where you paste a YouTube playlist URL and then shows thumbnails and “Watch” buttons. The extension calls a backend API (hosted on Render or local) which talks to the YouTube Data API (so your API key stays secret).

---

## Tech stack

- HTML, CSS, JavaScript (Vanilla)
- Chrome Extensions Manifest V3
- Backend: Node.js + Express (separate repo / service)

---

## Prerequisites

- Chrome browser (developer mode)
- A deployed backend URL (or running `localhost` backend)
- Basic Git for version control (optional but recommended)

---

## Folder structure (what should be in the extension repo)

youtube-focus-frontend/
├── manifest.json
├── popup.html
├── popup.js
├── content.js (optional — used if you want to inject DOM changes on youtube.com)
├── background.js (optional)
├── icons/ (optional icons)
└── README.md

## How to load in Chrome
1. copy the repo
git clone 
