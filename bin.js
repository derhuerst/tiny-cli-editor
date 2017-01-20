#!/usr/bin/env node
'use strict'

const fs = require('fs')
const editor = require('.')

const file = process.argv[2]
if (!file) {
	console.error('Provide a file name as argument.')
	process.exit(1)
}

const content = fs.existsSync(file) ? fs.readFileSync(file).toString('utf8') : ''

editor(content)
.on('submit', (content) => fs.writeFileSync(file, content))
.on('abort', () => process.exit(1))
