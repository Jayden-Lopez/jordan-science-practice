# Quick Setup Guide - Jordan's Science Practice

## Step 1: Download GitHub Desktop (if you haven't already)

1. Go to: https://desktop.github.com/
2. Download for Mac
3. Install and sign in with your GitHub account

## Step 2: Get Your Firebase Config

You mentioned using the **same Firebase** as your Math and Reading apps. If you don't have the config handy:

1. Go to: https://console.firebase.google.com/
2. Select your existing project
3. Click the gear icon → Project Settings
4. Scroll down to "Your apps" section
5. You should see your web app config - copy it!

It looks like this:
```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 3: Add Firebase Config to index.html

1. Open `index.html` in a text editor (TextEdit, VS Code, etc.)
2. Find line ~580 (search for "YOUR_API_KEY")
3. Replace the placeholder config with your real Firebase config
4. Save the file

## Step 4: Create Repository with GitHub Desktop

1. Open GitHub Desktop
2. Click: **File → New Repository**
3. Repository name: `jordan-science-practice`
4. Local path: Choose where to save it
5. Click: **Create Repository**

## Step 5: Add Files to Repository

1. GitHub Desktop will open your repository folder
2. Copy these 3 files into that folder:
   - `index.html` (with your Firebase config added)
   - `README.md`
   - `.gitignore`

## Step 6: Commit and Publish

1. In GitHub Desktop, you'll see the files listed
2. Add commit message: "Initial commit - Jordan's Science Practice"
3. Click: **Commit to main**
4. Click: **Publish repository**
5. Make sure "Keep this code private" is UNCHECKED (or checked if you want it private)
6. Click: **Publish repository**

## Step 7: Enable GitHub Pages

1. Go to: https://github.com/YOUR-USERNAME/jordan-science-practice
2. Click: **Settings** (top navigation)
3. Click: **Pages** (left sidebar)
4. Under "Source", select: **main** branch
5. Click: **Save**
6. Wait 1-2 minutes
7. Your app will be live at: `https://YOUR-USERNAME.github.io/jordan-science-practice`

## Step 8: Test It!

1. Open the URL in your browser
2. Try starting Chapter 1
3. Answer some questions
4. Check if progress saves (refresh page and see if your stats are still there)
5. Test Parent Dashboard with PIN: **1234**

## Troubleshooting

### If progress doesn't save:
- Check Firebase config is correct in index.html
- Go to Firebase Console → Database → Make sure database exists
- Check browser console (F12) for errors

### If GitHub Pages doesn't work:
- Wait a few minutes (it can take time)
- Check that index.html is in the root folder (not in a subfolder)
- Check repository settings → Pages is enabled

### If you want to update the app later:
1. Edit files on your Mac
2. Open GitHub Desktop
3. You'll see changes listed
4. Add commit message
5. Click "Commit to main"
6. Click "Push origin"
7. Wait 1-2 minutes for GitHub Pages to update

## Need Help?

Just ask! I can help you:
- Debug Firebase issues
- Add more questions
- Customize the app
- Fix any problems

---

**You're all set!** 🎉

Jordan can start practicing science with the app once you've completed these steps.

Default PIN for Parent Dashboard: **1234**
(You can change this in the dashboard)