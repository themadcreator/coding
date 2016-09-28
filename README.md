# Coding a website on github!

### Setup your own repo.

Create an account of github and "fork" this repository.

In the instructions below, replace "themadcreator" with your own github username.


### Checkout code

You only have to do this once at the start.

```sh
git clone git@github.com:themadcreator/coding.git
cd coding
git checkout gh-pages
```


### Edit code

Open a text editor and edit your code.


### Send code up to github

Every time you edit something, you'll need to send the changes
up to github to see it on the web.

```sh
git add --all . && git commit -m "Done editing" && git push origin gh-pages
```

Look at it! https://themadcreator.github.io/coding/

