# Copy dirs with content

```console
$ tree
.
├── README.md
└── dir1
    └── file1

1 directory, 2 files
```

```console
$ cp -r dir1/ dir2/ && tree
.
├── README.md
├── dir1
│   └── file1
└── dir2
    └── file1

2 directories, 3 files
```

"If the source file ends in a /, the contents of the directory are copied rather that the directory itself." - from `man cp`.

```console
$ cp -r dir1 dir3/ && tree
.
├── README.md
├── dir1
│   └── file1
├── dir2
│   └── file1
└── dir3
    └── file1

3 directories, 4 files
```

```console
$ cp -r dir1 dir4 && tree
.
├── README.md
├── dir1
│   └── file1
├── dir2
│   └── file1
├── dir3
│   └── file1
└── dir4
    └── file1

4 directories, 5 files
```
