JobSearchApp
A sleek React Native app for browsing, viewing, and bookmarking job listings with a modern UI.
Features
Images 
![Image](https://github.com/user-attachments/assets/e6f08d61-466b-454b-9627-5178a69d8f6e)

![Image](https://github.com/user-attachments/assets/c7e3f936-5dfd-4d75-9066-a99c8b907707)

![Image](https://github.com/user-attachments/assets/883ab4e4-8a48-4cfe-bc58-afc7e45979a0)

![Image](https://github.com/user-attachments/assets/38263838-557a-464e-b02d-5982bdfb49a6)

![Image](https://github.com/user-attachments/assets/d81a39ba-5b53-4bad-9ade-fa3d82b23075)

Browse jobs from an external API
View detailed job info (location, salary, etc.)
Bookmark jobs locally with AsyncStorage
Bottom tab navigation (Jobs & Bookmarks)
Shimmer loading effects
Contact employers via phone/WhatsApp
Error handling & empty states

Installation

Clone the repo:
git clone <repository-url>
cd JobSearchApp


Install dependencies:
npm install


Set up React Native environment (guide).

Start the app:
npm start



Usage

Jobs: Browse and refresh job listings, tap for details.
Bookmarks: View/remove saved jobs.
Details: See job info, contact employers, toggle bookmarks.

Dependencies

react-native
@react-navigation/native, bottom-tabs, stack
react-native-paper
@expo/vector-icons
axios
@react-native-async-storage/async-storage
react-native-gesture-handler

Install:
npm install react-native @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack react-native-paper @expo/vector-icons axios @react-native-async-storage/async-storage react-native-gesture-handler

Structure
JobSearchApp/
├── components/         # UI components (JobCard, DetailItem, etc.)
├── navigation/         # AppNavigator for tabs & stacks
├── screens/            # Jobs, Bookmarks, JobDetails screens
├── styles/             # Centralized styles
├── utils/              # Bookmark storage utils
├── App.js              # App entry point
└── README.md

Notes

Uses https://testapi.getlokalapp.com/common/jobs API.
Styles in styles/styles.js for consistency.
Bookmarks persist via AsyncStorage.

License
MIT License
