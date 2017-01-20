'use strict'

const esc = require('ansi-escapes')
const wrap = require('prompt-skeleton')
const window = require('window-size')



const insert = (s, x, c) => s.slice(0, x) + c + s.slice(x)

const Editor = {

	update: function () {
		this.value = this.lines.join('\n')
		this.emit()
	},



	reset: function () {
		this.lines = this.initialLines
		this.cursorX = this.cursorY = 0
		this.update()
		this.render()
	},

	abort: function (c) {
		this.done = true
		this.aborted = !(c.ctrl && c.name === 'd')
		this.out.write(esc.clearScreen + esc.cursorTo(0, 0))
		this.close()
	},

	submit: function () {
		const line = this.lines[this.cursorY]
		this.lines.splice(this.cursorY, 1, line.slice(0, this.cursorX), line.slice(this.cursorX))
		this.cursorY++
		this.cursorX = 0

		this.update()
		this.render()
	},

	up: function () {
		if (this.cursorY === 0) return
		this.cursorY--
		this.cursorX = Math.min(this.cursorX, this.lines[this.cursorY].length)

		this.update()
		this.render()
	},

	down: function () {
		if (this.cursorY === (this.lines.length - 1)) return
		this.cursorY++
		this.cursorX = Math.min(this.cursorX, this.lines[this.cursorY].length)

		this.update()
		this.render()
	},

	left: function () {
		if (this.cursorX === 0) {
			if (this.cursorY === 0) return
			this.cursorY--
			this.cursorX = this.lines[this.cursorY].length
			return
		}
		this.cursorX--

		this.update()
		this.render()
	},
	right: function () {
		const line = this.lines[this.cursorY]
		if (this.cursorX === line.length) {
			if (this.cursorY === (this.lines.length - 1)) return
			this.cursorY++
			this.cursorX = 0
			return
		}
		this.cursorX++

		this.update()
		this.render()
	},

	first: function () {
		this.cursorX = 0

		this.update()
		this.render()
	},
	last: function () {
		const line = this.lines[this.cursorY]
		this.cursorX = line.length

		this.update()
		this.render()
	},

	_: function (c) {
		const {lines, cursorX, cursorY} = this
		lines[cursorY] = insert(lines[cursorY], cursorX, c)
		this.cursorX++

		this.update()
		this.render()
	},

	delete: function (c) {
		const {lines, cursorX, cursorY} = this
		const line = lines[cursorY]

		if (cursorX > 0) {
			lines[cursorY] = line.slice(0, cursorX - 1) + line.slice(cursorX)
			this.cursorX--
		} else if (cursorY > 0) {
			const xFromAbove = this.lines[this.cursorY - 1].length
			lines.splice(cursorY - 1, 2, lines[cursorY - 1] + lines[cursorY])
			this.cursorY--
			this.cursorX = xFromAbove
		} else return

		this.update()
		this.render()
	},



	render: function () {
		if (this.firstRender) {
			this.firstRender = false
			this.out.write('\n'.repeat(window.height))
		}

		const {lines, cursorX, cursorY} = this
		this.out.write(
			esc.clearScreen
			+ lines.join('\n')
			+ esc.cursorTo(cursorX, cursorY)
		)
	}
}



const defaults = {
	lines: [],
	initialLines: [],
	cursorX: 0,
	cursorY: 0,
	firstRender: true,
	done: false,
	aborted: false
}

const lb = /\r?\n/

const editor = (text) => {
	if ('string' !== typeof text) throw new Error('Text must be string.')

	const p = Object.assign(Object.create(Editor), defaults)
	p.intialLines = text.split(lb)
	p.lines = text.split(lb)

	const wrapped = wrap(p)
	p.update()
	return wrapped
}



module.exports = Object.assign(editor, {Editor})
