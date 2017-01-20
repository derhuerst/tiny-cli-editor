# tiny-cli-editor

**A nano-like command line editor.**

[![asciicast](https://asciinema.org/a/100110.png)](https://asciinema.org/a/100110)

[![npm version](https://img.shields.io/npm/v/tiny-cli-editor.svg)](https://www.npmjs.com/package/tiny-cli-editor)
[![dependency status](https://img.shields.io/david/derhuerst/tiny-cli-editor.svg)](https://david-dm.org/derhuerst/tiny-cli-editor)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/tiny-cli-editor.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)

*tiny-cli-editor* uses [*prompt-skeleton*](https://github.com/derhuerst/prompt-skeleton) to have a behavior consistent with [other prompts](https://github.com/derhuerst/prompt-skeleton#prompts-using-prompt-skeleton).


## Installing

```shell
npm install tiny-cli-editor
```


## Usage

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
