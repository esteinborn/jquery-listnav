# Get the last commit author to see if we should continue
AUTHOR=$(git show -p | grep Author)

# Check to see if this is a pull request if so skip the test because it was ran during the initial commit.
if [ "$AUTHOR" != "Author: Travis-CI <travis@travis-ci.org>" -a "$TRAVIS_PULL_REQUEST" == "false" ]; then

# Setup Git
# cd $HOME
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis-CI"

# Clone Repo
#git clone --quiet --branch=${TRAVIS_BRANCH} https://${GH_TOKEN}@github.com/nys-its/excelsior.git  ${TRAVIS_BRANCH} > /dev/null

# Move into the cloned project folder
#cd ${TRAVIS_BRANCH}


    # Check to see if the commit was to master. If so we need to redeploy the zip.
    # if [ "$TRAVIS_BRANCH" == "master" ]; then

    #     # Create the travis last build file
    #     echo "Travis Build: $TRAVIS_BUILD_NUMBER" > .lastBuilt
    #     date >> .lastBuilt

    #     # Add the zip to the current build and deploy it back to Github
    #     git add -f excelsior.zip
    #     git add -f .lastBuilt
    #     git commit -m "TRAVIS BUILD $TRAVIS_BUILD_NUMBER"
    #     git push -fq origin ${TRAVIS_BRANCH} > /dev/null

    # fi

# We are all done!
# echo -e "Travis is done"

else

echo -e "Skipping after script."

fi