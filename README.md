## Emofify

Convert text to emoji representations in real time!

## Packaged demos


### Usage
When `emojis.js` is loaded, it will load json of emoji names and keywords, save it in a global called `allEmojis`. `allEmojis` has this structure:
```json
{
  "grinning": {
    "keywords": ["face", "smile", "happy", "joy"],
    "char": "😀",
    "category": "people"
  },
  "grin": {
    "keywords": ["face", "happy", "smile", "joy"],
    "char": "😁",
    "category": "people"
  },
  ...
}
```
The `emojify` api has 2 methods:
  * `ShowMeAEmoji(word)` -- returns a boolean if the emoji synosym word exists in `emojis.js`, or false if it doesn't exist.
  * if the emoji exists, a `<i class>` will returned with the emoji word appended inside the class (which will show the awesome emoji), otherwise the text character will be returned

##
This was made as part of ⚡️Hack Kean 2016⚡️ and  is powered by [emojilib](https://github.com/muan/emojilib), and [emojicss] (http://afeld.github.io/emoji-css/)
