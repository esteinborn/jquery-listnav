# Get the last commit author to see if we should continue
AUTHOR=$(git show -p | grep Author)

# Check to see if this is a pull request if so skip the test because it was ran during the initial commit.
if [ "$AUTHOR" != "Author: Travis-CI <travis@travis-ci.org>" -a "$TRAVIS_PULL_REQUEST" == "false" ]; then

echo -e "Starting to update GitHub Pages\n"

  #copy data we're interested in to other place
  cp -R demo $HOME/demo

  #go to home and setup git
  cd $HOME
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis"

  #using token clone gh-pages branch
  git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/esteinborn/jquery-listnav.git  gh-pages > /dev/null

  #go into directory and copy data we're interested in to that directory
  cd gh-pages
  for i in `ls | grep -v ".git"` ; do rm -rf $i; done; rm .gitignore;
  cp -Rf $HOME/demo/* .

  #add, commit and push files
  git add -f .
  git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed to gh-pages"
  git push -fq origin gh-pages > /dev/null

  echo -e "Done creating GitHub Pages branch!\n"
else

echo -e "Skipping after script."

fi