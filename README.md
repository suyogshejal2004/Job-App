
# JobSearchApp

A modern React Native app for browsing, viewing, and bookmarking job listings with an intuitive UI.

## 🌟 Features

* 📋 Browse paginated job listings from an external API
* ℹ️ View detailed job info (location, salary, shift, etc.)
* ⭐ Bookmark jobs locally using AsyncStorage
* 🧭 Bottom tab navigation for Jobs and Bookmarks
* ✨ Shimmer loading placeholders
* 📞 Contact employers via phone or WhatsApp
* 🚫 Handle errors and empty states gracefully

---

### Screenshots

<p float="left">
  <img src="https://github.com/user-attachments/assets/e6f08d61-466b-454b-9627-5178a69d8f6e" width="200" />
  <img src="https://github.com/user-attachments/assets/c7e3f936-5dfd-4d75-9066-a99c8b907707" width="200" />
  <img src="https://github.com/user-attachments/assets/883ab4e4-8a48-4cfe-bc58-afc7e45979a0" width="200" />
  <img src="https://github.com/user-attachments/assets/38263838-557a-464e-b02d-5982bdfb49a6" width="200" />
  <img src="https://github.com/user-attachments/assets/d81a39ba-5b53-4bad-9ade-fa3d82b23075" width="200" />
</p>




---

## 🚀 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/JobSearchApp.git
cd JobSearchApp
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up your environment:**
   Follow the [React Native setup guide](https://reactnative.dev/docs/environment-setup) for Expo.

4. **Run the app:**

```bash
npm start
```

Then use Expo Go or a simulator:

```bash
npm run ios
npm run android
```

---

## 📱 Usage

* **Jobs Screen**: Browse jobs, pull to refresh, or tap for details.
* **Bookmarks Screen**: View or remove saved jobs.
* **Job Details**: Check job info, contact employers, or toggle bookmarks.

---

## 📦 Dependencies

Key libraries used:

```bash
npm install react-native \
  @react-navigation/native \
  @react-navigation/bottom-tabs \
  @react-navigation/stack \
  react-native-paper \
  @expo/vector-icons \
  axios \
  @react-native-async-storage/async-storage \
  react-native-gesture-handler
```

---

## 🗂️ Project Structure

```
JobSearchApp/
├── components/         # UI components (JobCard, DetailItem, ShimmerPlaceholder)
├── navigation/         # Bottom tab and stack navigation
├── screens/            # JobsScreen, BookmarksScreen, JobDetailsScreen
├── styles/             # Centralized styles (styles.js)
├── utils/              # Bookmark storage utilities
├── assets/screens/     # Screenshots/images for README
├── App.js              # App entry point
└── README.md           # Project documentation
```

---

## 📝 Notes

* **API**: Fetches data from `https://testapi.getlokalapp.com/common/jobs`. Ensure API availability or replace with your endpoint.
* **Styling**: Centralized in `styles/styles.js` for maintainability.
* **Storage**: Bookmarks persist locally via AsyncStorage.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---




