# Using `Gdiff` in vertical split instead of horizontal

Had a case where I wanted to compare a file from another branch. Using [Fugitive](https://github.com/tpope/vim-fugitive) and its [Gdiffsplit](https://github.com/tpope/vim-fugitive/blob/master/doc/fugitive.txt#L172), I first got a horizontal split, which wasn't as easy to navigate as a vertical split would have been. Luckily, I read [here](https://github.com/tpope/vim-fugitive/issues/508) that simply adding `set diffopt+=vertical` to my `vimrc` solved it.
