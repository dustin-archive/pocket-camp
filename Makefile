# GNU Make 3.8.2 and above

PATH := $(PATH):node_modules/.bin
SHELL := /bin/bash

.ONESHELL:
.SILENT:

start: fresh
	watch-exec 'src/**/*.js' 'make js', 'src/**/*.scss' 'make css' | reload-server

build: fresh
	babel dist/app.js | uglifyjs -o dist/app.js -c -m --source-map "url='app.js.map',content='dist/app.js.map'" &
	postcss dist/app.css -o dist/app.css -u autoprefixer -m
	cleancss dist/app.css -o dist/app.css --source-map

fresh: clean js css

clean:
	rm -rf dist
	mkdir dist

js:
	env $(cat .env) rollup src/app.js -o dist/app.js -f iife -m -c

css:
	node-sass src/app.scss -o dist --source-map true
