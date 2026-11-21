# Integrated Chinese study app

Open `index.html` in Chrome, Edge or Safari (speech recognition needs one of these; Firefox has no recognition API). Keep all the files together in one folder:

- `index.html` — the app
- `pinyin-data.js` — character → pinyin lookup (~15,000 characters) used to show pinyin for whatever the speech recogniser hears
- `chapter1.js` … `chapter4.js`, `chapter7.js` … `chapter10.js` — vocab and grammar from the textbook (3rd edition outline); dialogues are original scenes using each chapter's vocabulary, not the book's text
- `chapter5.js` — Chapter 5 content (from your study guide)
- `chapter6.js` — Chapter 6 content (draft from the textbook outline; check against your book)

## Adding a chapter
Copy `chapter5.js`, change `id`, `number`, `title`, and the content, then add one line to `index.html`:
```html
<script src="chapter7.js"></script>
```

## Notes
- Works offline once opened, except stroke-order data (fetched from jsdelivr the first time a character is shown) and speech recognition in Chrome (it uses Google's servers).
- Progress lives in the browser's localStorage. Export a backup from Settings.
- AI grading of free translations is optional: paste an Anthropic API key in Settings. The key stays on your device and calls go straight from the browser to api.anthropic.com.
- Install as an app: Chrome/Edge address bar → "Install"; iOS Safari → Share → Add to Home Screen. Serving the folder over HTTPS (e.g. GitHub Pages) makes install more reliable than opening the file directly.
