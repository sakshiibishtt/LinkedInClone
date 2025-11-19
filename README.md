# LinkedIn Clone

A full-featured LinkedIn social platform clone built with React, React Native, and Expo. Features AI-generated avatars, randomized connection data, and responsive design across web and mobile platforms.

## 📱 Features

### Web (Frontend)

- **React + TypeScript + Vite** - Fast, modern development experience
- Hero section with profile stats (views, impressions, search appearances)
- Dynamic post feed with engagement metrics
- Post composer with your profile picture
- Filter chips and recommended content
- Responsive LinkedIn-like design

### Mobile (iOS & Android)

- **React Native + Expo + Expo Router** - Native performance
- 5-tab navigation: Home, My Network, Post, Notifications, Jobs
- Double-tap "My Network" to refresh connection suggestions
- Randomized AI-generated connection profiles
- Custom post composer with center floating action button
- Smooth animations and haptic feedback
- Dark mode support

### AI & Randomization

- **Dicebear Avatars** - Realistic AI-generated human faces (lorelei style, PNG format)
- Random name generation from diverse name pools
- Random job titles, companies, and mutual connections
- Dynamic suggestion generation (60+ connections)
- Prefetched avatars for fast loading

## 🛠️ Tech Stack

| Component            | Technology                              |
| -------------------- | --------------------------------------- |
| **Frontend**         | React 19 + TypeScript + Vite            |
| **Mobile**           | React Native + Expo + Expo Router       |
| **Backend**          | Node.js/Express (minimal setup)         |
| **UI Framework**     | React Navigation                        |
| **Icons**            | Expo Vector Icons (Ionicons)            |
| **State Management** | React Hooks + Custom EventBus           |
| **Styling**          | StyleSheet (React Native) + CSS Modules |
| **Avatars**          | Dicebear API (PNG format)               |

## 📁 Project Structure

```
linkedin-clone/
├── backend/                    # Node.js backend API
├── frontend/                   # React web application
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── assets/             # Images (including sakshib.png)
│   │   ├── data.ts             # Mock data & avatar generation
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── mobile/                     # React Native mobile app
│   ├── app/
│   │   └── (tabs)/             # Bottom tab navigation
│   │       ├── index.tsx       # Home screen
│   │       ├── explore.tsx     # My Network (double-tap refresh)
│   │       ├── post.tsx        # Post composer
│   │       ├── alerts.tsx      # Notifications
│   │       └── jobs.tsx        # Jobs
│   ├── components/             # Reusable UI components
│   ├── data/mockData.ts        # Mock data & randomization
│   ├── utils/eventBus.ts       # Event bus for communication
│   ├── package.json
│   └── app.json
└── .gitignore                  # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo Go app (for mobile testing)

### Frontend (Web)

```bash
cd frontend
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Mobile (iOS & Android)

```bash
cd mobile
npm install
npx expo start
```

Scan the QR code with your phone's **Expo Go** app to view the mobile app.

**Mobile Navigation:**

- **Home**: Feed with posts and stats
- **My Network**: Double-tap to refresh connection suggestions with AI avatars
- **Post**: Create new posts
- **Notifications**: Activity feed
- **Jobs**: Job listings

### Backend

```bash
cd backend
npm install
npm start
```

## 🎨 UI Highlights

- **Professional Tab Bar**: LinkedIn blue (#0a66c2) with shadows and elevation
- **AI Avatars**: Realistic human faces for all profiles (Dicebear lorelei)
- **Smooth Animations**: Refresh spinner, transitions, and haptic feedback
- **Dark Mode**: Full dark mode support across all platforms
- **Responsive Design**: Optimized for all screen sizes

## 🔄 Key Interactions

### Double-Tap to Refresh (Mobile)

1. Go to "My Network" tab
2. Double-tap the tab icon
3. Refresh animation appears at top
4. New connection suggestions generate with new names, titles, companies
5. All avatars are prefetched for instant loading

### Post Composer

- Your profile picture (sakshib.png) displays automatically
- Share thoughts, photos, videos, or job posts
- Available on both web and mobile

## 📦 What's Included

✅ Full source code  
✅ Mock data with randomization  
✅ AI avatar generation  
✅ Responsive designs  
✅ Event bus system  
✅ Custom components  
✅ .gitignore for clean uploads

## 🗑️ Project Cleanup

This repository has been optimized for GitHub:

- ✅ `node_modules` removed (reinstall with `npm install`)
- ✅ Build directories removed
- ✅ `.git` and `.vscode` removed
- ✅ Lock files removed
- ✅ `.gitignore` configured

## 📝 License

This project is open source. Feel free to use it for learning, portfolio, or as a starting point for your own LinkedIn clone.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 💡 Future Enhancements

- [ ] Real backend API integration
- [ ] User authentication
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] WebSocket support for real-time updates
- [ ] Media upload functionality
- [ ] Search functionality
- [ ] Advanced filtering

---

**Ready to use!** Clone, install dependencies with `npm install`, and start developing! 🚀
