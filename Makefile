GAME := $(G)

run:
	npm run babel-node -- './src/bin/$(GAME)'

install:
	yarn install

publish:
	yarn publish

check:
	npm run flow -- src

lint:
	npm run eslint -- src
