
# 🧠 Mindports – Your Personalized Knowledge Intelligence Hub

Mindports is a context-aware digital memory vault that transforms scattered content into personalized knowledge using intelligent AI modules. It helps you capture, process, and recall web content, videos, documents, and media—just like your second brain.

---

## 🚨 Problem Statement

In the information age, users struggle with:

- Content overload from multiple platforms
- Inefficient bookmarking and scattered archives
- No contextual recall or emotional assistance
- Repeated searches for previously seen material
- Lack of personalized knowledge systems

---

## ✅ Our Solution

Mindports converts your digital interactions into structured memory using AI. From saving a reel to summarizing Reddit, it captures your intent and converts it into actionable intelligence:

- Save and organize content from anywhere
- Contextual recall through AI assistants
- Emotional guidance and productivity nudges
- Domain-specific bots trained on your interests
- Exportable AI memory graphs and toolkits

---

## 🔑 Key Features

### 🔖 Save the Archive
AI-powered Web Clipper to save and categorize articles, PDFs, reels, shorts, tweets, and links. Transcribes video/audio via MCP and summarizes them for your knowledge vault.

### 🧠 Second Brain + API
Context-aware personal assistant trained on your saved content. Enables long-term memory, contextual tool recall, advanced querying, and exports knowledge graphs for team or solo use.

### 🤖 AI Companion Mode + Mood Curation
Emotion-aware chatbot that mirrors your tone and mood. Recommends playlists, motivational nudges, and curated growth content based on productivity state (focus, burnout, learning).

### 🧵 Twitter Thread Analyzer
Crawls tech creator threads, summarizes model/tool updates, and delivers a daily dev digest.

### 🔍 Reddit Crawler
Scans selected subreddits (e.g., r/AI, r/learnprogramming), summarizes top content, and feeds it into your personalized dashboard.

### ⏰ Update Alarm
Trigger-based notifier that sends push digests from Twitter, Reddit, and Medium using creator handles and tags.

### 💬 Topic-Specific AI Chatbot
A focused chatbot trained only on your followed domains and creators. Returns high-signal results without generic LLM noise.

---

## 🛠️ Tech Stack

| Layer            | Tech Stack                                             |
|------------------|--------------------------------------------------------|
| Frontend         | React + Tailwind CSS + ShadCN UI                       |
| State Management | Zustand                                                |
| Backend          | Node.js + Express                                      |
| AI/LLM           | Gemini Pro API                                         |
| Database         | Supabase (PostgreSQL + Supabase Auth)                 |
| Vector Store     | ChromaDB                                               |
| Media Handling   | MCP (for transcription)                                |
| NLP/NLU          | HuggingFace Transformers + Summarization Pipelines     |
| Deployment       | Vercel (Frontend) + Railway (Backend)                 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+
- Supabase account
- Gemini API Key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dubeysanskar/Mindports.git
cd Mindports
```

2. Install dependencies:

```bash
npm install
```

3. Add environment variables in a .env file:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```

4. Start the development server:

```bash
npm run dev
```

Visit: http://localhost:5173

---

## 📦 Scripts

- npm run dev – Start development server
- npm run build – Build production bundle
- npm run preview – Preview production build
- npm run lint – Run linter

---

## 💡 Future Roadmap

- [ ] Browser Extension for Quick Save
- [ ] Mobile App Companion
- [ ] Audio Summary Download
- [ ] Visual Knowledge Map Builder
- [ ] Chrome Context Integration
- [ ] DSA/Tech Study Dashboard with Leaderboards

---

## 💼 Use Cases

- Personalized Study Companion
- Focus-based Productivity Assistant
- AI-Powered Second Brain for Devs
- Domain-Specific News Summarizer
- Knowledge Management for Teams

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License – see the LICENSE file for details.

---

## 🔗 Project Links

GitHub Repo: https://github.com/dubeysanskar/Mindports/

Made with ❤️ by Sanskar Dubey

