# Jordan's Science 6 Practice App

An interactive science practice application aligned with **BJU Press Science Grade 6 (4th Edition)** curriculum.

## Features

- ✅ **15 Chapters** covering all BJU Science 6 units
- 🔒 **Chapter Locking** - Must master each chapter before advancing
- 📊 **Progress Tracking** - Firebase-powered progress saving
- 🎯 **Mastery System** - 80% accuracy requirement
- 📈 **Parent Dashboard** - PIN-protected detailed progress view
- 🔥 **Daily Streaks** - Encourages consistent practice
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Mix of Question Types** - Multiple choice, True/False, Fill-in-blank

## Curriculum Structure

### Unit 1: A Changing Earth
- Chapter 1: Earthquakes and Volcanoes
- Chapter 2: Weathering and Erosion
- Chapter 3: Natural Resources

### Unit 2: God's Living Creation
- Chapter 4: Cells and Classification
- Chapter 5: Animal Classification
- Chapter 6: Plant Classification

### Unit 3: Energy in Motion
- Chapter 7: Atoms and Molecules
- Chapter 8: Electricity and Magnetism
- Chapter 9: Motion and Machines

### Unit 4: Beyond Our Earth
- Chapter 10: Stars
- Chapter 11: Solar System

### Unit 5: God's Continuing Plan
- Chapter 12: Plant and Animal Reproduction
- Chapter 13: Heredity and Genetics

### Unit 6: Our Intricate Bodies
- Chapter 14: Nervous System
- Chapter 15: Immune System

## Setup Instructions

### 1. Firebase Setup

This app uses Firebase for storing progress. You need to set up your own Firebase project:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use your existing one from Math/Reading apps)
3. In Project Settings, find your Firebase configuration
4. Click "Add app" and select "Web" (</>) if you haven't already
5. Copy your Firebase config

### 2. Configure Firebase in the App

Open `index.html` and find this section (around line 580):

```javascript
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

Replace these values with your actual Firebase configuration.

### 3. Firebase Database Rules

In Firebase Console, go to Realtime Database → Rules and set:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Note:** These rules allow anyone to read/write. For production, you should implement proper authentication.

### 4. Deploy to GitHub Pages

1. Create a new repository called `jordan-science-practice`
2. Upload `index.html` to the repository
3. Go to Settings → Pages
4. Select "main" branch and save
5. Your app will be available at: `https://your-username.github.io/jordan-science-practice`

## Using GitHub Desktop

1. Open GitHub Desktop
2. File → New Repository
3. Name: `jordan-science-practice`
4. Create Repository
5. Drag `index.html` into the repository folder
6. Commit changes
7. Publish repository to GitHub
8. Enable GitHub Pages in repository settings

## Parent Dashboard

- **Default PIN:** 1234
- Access the Parent Dashboard to:
  - View detailed chapter progress
  - See accuracy percentages
  - Reset progress if needed
  - Change PIN

## How It Works

### Mastery Requirements
- Complete at least 5 questions per chapter
- Achieve 80% accuracy or higher
- Once mastered, the next chapter unlocks

### Progress Tracking
- All progress saved to Firebase automatically
- Syncs across devices
- Daily streak tracking encourages consistency

### Question Types
1. **Multiple Choice** - Select the correct answer
2. **True/False** - Determine if the statement is true or false
3. **Fill-in-the-Blank** - Type the missing word

## Customization

### Adding More Questions

To add questions to any chapter, edit the `questionBank` object in `index.html` (starting around line 690).

Example:
```javascript
1: [ // Chapter 1: Earthquakes and Volcanoes
    {
        type: "multiple",
        question: "Your question here?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: 0  // Index of correct answer (0 = first option)
    },
    // ... more questions
]
```

### Changing Mastery Requirements

Find this section in the `finishChapter()` function:

```javascript
// Check for mastery (80% accuracy and at least 5 questions)
if (userProgress[currentChapter].accuracy >= 80 && userProgress[currentChapter].total >= 5) {
    userProgress[currentChapter].mastered = true;
}
```

Adjust the numbers as needed (e.g., change 80 to 70 for 70% accuracy).

### Changing the PIN

Default PIN is `1234`. To change it:
1. Access Parent Dashboard with current PIN
2. Click "Change PIN"
3. Enter new 4-digit PIN

Or change it in code (line 736):
```javascript
parentSettings = {
    pinHash: hashPin("1234") // Change "1234" to your desired PIN
};
```

## Troubleshooting

### Progress Not Saving
- Check that Firebase configuration is correct
- Verify Firebase Database Rules allow read/write
- Check browser console for errors

### Chapters Not Unlocking
- Ensure you've completed at least 5 questions in the previous chapter
- Check that accuracy is 80% or higher
- View Parent Dashboard to see exact progress

### PIN Not Working
- Default PIN is 1234
- Clear browser cache and try again
- Reset PIN in Firebase Console under `science/parentSettings/pinHash`

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Database:** Firebase Realtime Database
- **Hosting:** GitHub Pages
- **Design:** Responsive CSS Grid/Flexbox

## Questions Bank

Each chapter currently has 5 sample questions. You can:
- Add more questions using the same format
- Modify existing questions
- Adjust difficulty levels

## Support

If you need help:
1. Check the troubleshooting section above
2. Review Firebase Console for errors
3. Check browser developer console (F12)

## Version History

- **v1.0** (October 2024) - Initial release with all 15 chapters

## Credits

- Curriculum aligned with BJU Press Science Grade 6, 4th Edition
- Designed for Jordan's learning journey
- Built with ❤️ for effective science education

---

## Quick Start Checklist

- [ ] Set up Firebase project
- [ ] Copy Firebase config to index.html
- [ ] Set Firebase database rules
- [ ] Create GitHub repository
- [ ] Upload index.html
- [ ] Enable GitHub Pages
- [ ] Test the app
- [ ] Share URL with Jordan

**Ready to launch!** 🚀