# Firebase Configuration Template

## You need to replace the placeholder config in index.html with your actual Firebase config.

### Where to find it:

1. Go to: https://console.firebase.google.com/
2. Select your project (the same one you use for Math and Reading apps)
3. Click the gear icon ⚙️ → **Project Settings**
4. Scroll down to **"Your apps"** section
5. If you don't see a web app, click **"Add app"** → **Web (</>)**
6. Copy the `firebaseConfig` object

### What it looks like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project-name.firebaseapp.com",
  databaseURL: "https://your-project-name-default-rtdb.firebaseio.com",
  projectId: "your-project-name",
  storageBucket: "your-project-name.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### Where to paste it in index.html:

Open `index.html` and find this section (around line 580):

```javascript
// Firebase Configuration - YOU NEED TO ADD YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

**Replace the entire `firebaseConfig` object** with your real one from Firebase Console.

### Database Structure

The app will automatically create this structure in your Firebase Realtime Database:

```
science/
  ├── progress/
  │   ├── 1/  (Chapter 1 progress)
  │   │   ├── correct: 0
  │   │   ├── total: 0
  │   │   ├── accuracy: 0
  │   │   └── mastered: false
  │   ├── 2/  (Chapter 2 progress)
  │   └── ... (up to chapter 15)
  ├── parentSettings/
  │   └── pinHash: "1509442"  (hash of PIN "1234")
  ├── lastVisit: "Thu Oct 24 2024"
  └── streak: 0
```

### Firebase Database Rules

In Firebase Console → Realtime Database → Rules, use:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Important:** These rules allow anyone with the URL to read/write data. 
This is fine for a personal/family app, but for production apps you should 
implement proper authentication.

### Testing Firebase Connection

After adding your config:

1. Open the app in a browser
2. Open browser console (F12 → Console tab)
3. You should NOT see any Firebase errors
4. Answer a question
5. Refresh the page
6. Your progress should still be there!

If you see errors, check:
- Firebase config is correct
- Database exists in Firebase Console
- Database rules are set correctly
- No typos in the config

---

**Once you've added your Firebase config, the app is ready to use!** 🚀