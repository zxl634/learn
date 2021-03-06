# Changing string in file from make target 

When running shell commands in a Makefile it is necessary to include `shell`.[1]

For example in [this Makefile](Makefile) we have the following target:
```
bump-version:
	gsed -i -E "s/(App_v)\w+/\1$(shell cat version)/" package.json 
```

This is used to bump the version in a package.json that looks like this:
```
{
  "name": "App_v1"
}
```

The version number is saved in a separate file called `version`.

The `gsed` command captures `App_v` and the remaining characters of that word, i.e. the version number `1`, and replaces it with the content of capture group `\1` plus the content of the file `version`. The gotcha here is to include `shell` in the command when invoked from a make file.

[1] https://www.gnu.org/software/make/manual/html_node/Shell-Function.html#Shell-Function

