GAME := $(G)

run:
	npm run babel-node -- './src/bin/$(GAME)'

install:
	yarn install

publish:
	yarn publish

lint:
	npm run eslint -- .
