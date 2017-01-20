'use strict'

const editor = require('.')

const initialText = `\
This is a nice & small editor that works like nano.

Try it!
`

editor(initialText)
// .on('data', (text) => {
// 	console.log(text)
// })
.on('abort', (text) => {
	console.log('You aborted.')
	console.log(text)
})
.on('submit', (text) => {
	console.log('You submitted.')
	console.log(text)
})
