GAME := $(G)

run:
	npm run babel-node -- './bin/$(GAME)'

install:
	yarn install

publish:
	yarn publish
