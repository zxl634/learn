setup:
	touch package.json && echo '{\n  "name": "App_v1"\n}' > package.json
bump-version:
	gsed -i -E "s/(App_v)\w+/\1$(shell cat version)/" package.json 
reset:
	rm package.json && make setup
