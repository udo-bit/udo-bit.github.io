run:
	pnpm docs:dev

build:
	pnpm docs:build

pull:
	git pull

push:
	git add .
	git commit -m "update"
	git push -u origin main