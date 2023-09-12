serve:
	EXECJS_RUNTIME=MiniRacer bundle exec jekyll serve --livereload --incremental


build:
	EXECJS_RUNTIME=MiniRacer JEKYLL_ENV=production bundle exec jekyll build
