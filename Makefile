#Makefile

install: #установить зависимости по package-lock.json
	npm ci

brain-games: #запустить игру
	node bin/brain-games.js

publish: #безопасная проверка перед публикацией в npm
	npm publish --dry-run

lint:  #запустить eslint
	npx eslint

lint-fix:  #автокоррекция
	npx eslint --fix
