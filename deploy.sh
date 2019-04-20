#!/bin/bash

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ToxicJojo/gwent-cards.git master:gh-pages

cd ..
