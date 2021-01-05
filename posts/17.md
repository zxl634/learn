# Make simple demo of NW.js

Following [this guide](https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/) to get started.

Creating a [package.json](package.json) and [index.html](index.html).

I then download the binary from [here](https://dl.nwjs.io/v0.50.2/nwjs-v0.50.2-osx-x64.zip)

```console
$ wget https://dl.nwjs.io/v0.50.2/nwjs-v0.50.2-osx-x64.zip
--2021-01-05 11:11:23--  https://dl.nwjs.io/v0.50.2/nwjs-v0.50.2-osx-x64.zip
Resolving dl.nwjs.io (dl.nwjs.io)... 34.206.150.92
Connecting to dl.nwjs.io (dl.nwjs.io)|34.206.150.92|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 130284269 (124M) [application/zip]
Saving to: ‘nwjs-v0.50.2-osx-x64.zip’

     0K .......... .......... .......... .......... ..........  0%  484K 4m23s
127200K .......... .......... ..........                      100% 74.5M=47s

2021-01-05 11:12:11 (2.62 MB/s) - ‘nwjs-v0.50.2-osx-x64.zip’ saved [130284269/130284269]

```

```console
$ unzip nwjs-v0.50.2-osx-x64.zip
Archive:  nwjs-v0.50.2-osx-x64.zip
```

Add the zip and the unzipped folder to [.gitignore](../../.gitignore).

```console
$ echo -e "nwjs*.zip\nnwjs*/" >> ../../.gitignore
```

And then open the app:
```console
$ nwjs-v0.50.2-osx-x64/nwjs.app/Contents/MacOS/nwjs .
```


