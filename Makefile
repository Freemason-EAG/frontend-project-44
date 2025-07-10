#Makefile

install: #установить зависимости по package-lock.json
	npm ci

brain-games: #запустить игру
	node bin/brain-games.js
