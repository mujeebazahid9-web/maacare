# MaaCare

**Every mother deserves safe care.**

MaaCare is a free, simple mother and child health guide that runs in any phone browser.
It is built for village mothers and community health workers: big buttons, icons, voice reading,
and no account or internet needed after the first visit.

Built for the **Code for Change** hackathon on Devpost.

## Features

- **10 languages:** English, Urdu, Punjabi (Shahmukhi), Arabic, Hindi, Bengali, Spanish, French, Kiswahili, Indonesian (right-to-left layout for Urdu, Punjabi and Arabic)
- **Danger signs:** clear icons and short phrases that tell a mother when to go to a hospital immediately
- **My pregnancy:** trimester guidance with a week slider
- **Reminders:** enter the first day of the last period to get the expected delivery date, 8 checkup visits, and baby vaccine visit dates; one tap adds them to the phone calendar (.ics) with a one-day-before alert
- **Voice reading:** a speaker button reads every tip aloud, for mothers who cannot read well
- **Works offline:** a service worker caches the app after the first visit
- **Private:** no account, no tracking, no data leaves the phone (language and date are saved only in the browser)

## Run it

No build step and no dependencies.

```
cd maacare
python3 -m http.server 8000
```

Open http://localhost:8000 in a browser.

## Put it online (free)

- **Netlify Drop:** go to app.netlify.com/drop and drag the `maacare` folder onto the page.
- **GitHub Pages:** upload the files to a repository, then Settings > Pages > Deploy from branch.

Offline mode and "Add to home screen" need the page to be served over https (both options above do this).

## Add or fix a language

All text is in `i18n.js`. Add an entry to `LANGS` and a block to `I18N` with the same keys as `en`.
After a midwife or doctor who speaks the language has checked the medical text, add its code to
`REVIEWED_LANGS` in `index.html`; until then the app shows a "not yet reviewed" note.

## Medical content and safety

- MaaCare gives **general guidance only** and always tells users to see a doctor or midwife.
- Checkup timing follows the WHO recommendation of at least 8 antenatal contacts (about weeks 12, 20, 26, 30, 34, 36, 38, 40).
- Danger signs follow the commonly used WHO pregnancy danger-sign list.
- Baby vaccine dates are approximate; users are told to follow their baby's vaccine card.
- Translations other than those marked reviewed are machine-assisted and must be checked by a health professional before real-world use.

## Known limits

- Voice reading uses the phone's built-in voices. If a phone has no voice for a language, the app says so. Punjabi uses the Urdu voice.
- Trimester guidance is general; week-by-week baby development is planned.

## Files

- `index.html` - the app (HTML, CSS, JavaScript)
- `i18n.js` - all translations
- `sw.js` - offline support
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png` - install to home screen
