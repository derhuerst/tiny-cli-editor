# tiny-cli-editor

**A nano-like command line editor.** Really basic, but very lightweight. Can be used as a programmatically from JS.

[![asciicast](https://asciinema.org/a/100110.png)](https://asciinema.org/a/100110)

The following features are missing, but I'd like to implement them in the future:

- copy to clipboard, paste from it
- ask for confirmation on `ctrl+c`

I won't implement these features:

- syntax highlighting
- panels/bars/overlays
- mouse support
- plugin system

[![npm version](https://img.shields.io/npm/v/tiny-cli-editor.svg)](https://www.npmjs.com/package/tiny-cli-editor)
[![dependency status](https://img.shields.io/david/derhuerst/tiny-cli-editor.svg)](https://david-dm.org/derhuerst/tiny-cli-editor)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/tiny-cli-editor.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)

*tiny-cli-editor* uses [*prompt-skeleton*](https://github.com/derhuerst/prompt-skeleton) to have a behavior consistent with [other prompts](https://github.com/derhuerst/prompt-skeleton#prompts-using-prompt-skeleton).


## Installing

```shell
npm install tiny-cli-editor # to use it as a library
npm install -g tiny-cli-editor # to use it from the shell
```


## Usage

```shell
editor index.js
```

`Ctrl + C` to abort, `Ctrl + D` to save the file.

To use *tiny-cli-editor* programmatically:

```js
const editor = require('tiny-cli-editor')

editor('Hello this is dog.')
.on('data', (text) => {
	// do something with the text
})
.on('abort', (text) => {
	// do something with the text
})
.on('submit', (text) => {
	// do something with the text
})
```


## Related

- [`date-prompt`](https://github.com/derhuerst/date-prompt)
- [`mail-prompt`](https://github.com/derhuerst/mail-prompt)
- [`multiselect-prompt`](https://github.com/derhuerst/multiselect-prompt)
- [`number-prompt`](https://github.com/derhuerst/number-prompt)
- [`range-prompt`](https://github.com/derhuerst/range-prompt)
- [`select-prompt`](https://github.com/derhuerst/select-prompt)
- [`text-prompt`](https://github.com/derhuerst/text-prompt)
- [`tree-select-prompt`](https://github.com/derhuerst/tree-select-prompt)
- [`cli-autocomplete`](https://github.com/derhuerst/cli-autocomplete)
- [`switch-prompt`](https://github.com/derhuerst/switch-prompt)


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/location/issues).
