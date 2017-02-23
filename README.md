# WDI SG Alumni Gallery : JavaScript Frontend Framework Challenge

## Requirements
You will be building a SPA, that means you will have only one HTML page, and all HTTP requests should be made using AJAX.

To start you need to retrieve the following JSON file, which contains a list of all alumni & students, including their Github names, individual project repository names and links to their deployed applications.

https://raw.githubusercontent.com/wdi-sg/alumni/master/data.json


Using the `githubLogin` and the `repoName` of the various projects, you will be able to fetch additional information from the public Github API, examples below:

__Github API Examples__
- `https://api.github.com/users/jeremiahalex` will return details about the user named __jeremiahalex__
- `https://api.github.com/repos/wdi-sg/peanuts-api` will return details about the repo named __peanuts-api__ owned by the user/org __wdi-sg__
- `https://api.github.com/repos/wdi-sg/peanuts-api/readme` will return the readme details for the above project. You'll probably want to grab the __download_url__ to get the raw file e.g. `https://raw.githubusercontent.com/wdi-sg/peanuts-api/master/README.md`
- `https://api.github.com/repos/wdi-sg/peanuts-api/contents/index.js` will return the file details for the file __index.js__ in the project, again you probabaly want to grab the __download_url__ to get the raw file.


## Phase 1
A user should be able to:
- see a list of all WDI SG Alumni & Students, including name, avatar, bio, github link and blog link (if present)
 - a card based display would be nice e.g. https://v4-alpha.getbootstrap.com/components/card/
- click on a student to see a list of their individual projects including clickable links to the Github Repo & Deployed App for each

## Phase 2
A user should be able to:
- see a list of all projects based upon a project filter (e.g. project3), with a project image displayed (if present else the user's avatar) - it should avoid duplicates for collaborative projects
- click on a project to view the README file for the that project

## Phase 3
A user should be able to:
- filter the students or projects list based upon course batch (e.g. batch 7)

## Phase 4 (Bonus)
A user should be able to save their favourite projects. This will require either a custom API to be made complete with sign-up, signin and registration; or integration with the Github OAuth Authentcation, so the user can signin with Github and star their faviourite repositories.  
