# Get the last commit author to see if we should continue
AUTHOR=$(git show -p | grep Author)

# Check to see if this is a pull request if so skip the test because it was ran during the initial commit.
if [ "$AUTHOR" != "Author: Travis-CI <travis@travis-ci.org>" -a "$TRAVIS_PULL_REQUEST" == "false" ]; then

  echo -e "Starting to update GitHub Pages\n"

  #copy data we're interested in to other place
  echo -e "Copying new files to a temp folder\n"
  cp -R demo $HOME/demo

  #go to home
  cd $HOME

  #using token clone gh-pages branch
  echo -e "Cloning repo\n"
  git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/esteinborn/jquery-listnav.git  gh-pages > /dev/null

  #go into directory and copy data we're interested in to that directory

  echo -e "Entering repo folder\n"
  cd gh-pages

  echo -e "Deleting all existing repo content except for .git folder\n"
  # The next line came from Stack Overflow, love that site!
  # http://stackoverflow.com/a/22340057/682288
  find . -path ./.git -prune -o -exec rm -rf {} \; 2> /dev/null

  echo -e "Copying new files into repo\n"
  cp -Rf $HOME/demo/* .

  #add, commit and push files
  git add -f .
  git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed to gh-pages"
  git push -fq origin gh-pages > /dev/null

  echo -e "Done creating GitHub Pages branch!\n"
else

echo -e "Skipping after script."

fi