rm -rvf dist
gulp build
git add . 
git commit -m "Rebuild"
git push 
