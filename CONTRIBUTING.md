<div align="center">
  <h1>Contributing</h1>
</div>

## Table of Contents
- [Introduction](#introduction-star)
- Development
  - [Project Setup](#project-setup-hammer) 
    - [With write permissions](#if-you-have-write-permissions)
    - [Everyone else](#for-everyone-else)
  - [Contribute Code](#code-contribution-construction)
- Management
  - [Issue Tracking](#issue-tracking-rotating_light)
  - [Pull Requests Review & Management](#pull-requests-review--management-memo)

## Introduction :star:
This guide should serve as a set of guidelines and instructions for all contributors with respect to how they can participate and improve the project.

The purpose of this guide is to establish a clear and consistent process for contributing to the project. This guide outlines how to setup the project locally, submit issues, branching conventions submit and review pull requests.

## Project Setup :hammer:
### **If you have write permissions:**
Follow these instructions if you have permissions to edit the remote repository 
> Install Node.js
```sh
https://nodejs.org/en/download/
```

> Install yarn using npm
```sh
$ npm install -g yarn
```

> Clone the repo
```sh
$ git clone https://github.com/LaurierHawkHacks/Landing.git
```

> From your terminal, navigate to the root path of clone
```sh
$ cd path/to/your/clone
```

> Install dependencies
```sh
$ yarn
```

> Run local server
```sh
$ yarn dev
```

### **For everyone else:**
Follow these instructions if you **do not** have permissions to edit the remote repository 

> **Note**:
> This project uses GitHub Pull Requests to manage contributions, so [read up on how to fork a GitHub project and file a PR](https://guides.github.com/activities/forking) if you've never done it before

> Install Node.js
```sh
https://nodejs.org/en/download/
```

> Install yarn using npm
```sh
$ npm install -g yarn
```

> Clone the repo
```sh
$ git clone path/to/your/fork.git
```

> From your terminal, navigate to the root path of clone
```sh
$ cd path/to/your/clone
```

> Install dependencies
```sh
$ yarn
```

> Run local server
```sh
$ yarn dev
```

## Code Contribution :construction:

We welcome all contributions to the project. Follow the step-by-step guide below to ensure that your contribution fits the required standard and can be added to the project!

### **To contribute code**:
- [Set up the project](#project-setup).
- Identify any required modifications in the source code. 

- Create and checkout a new branch.
  - `git checkout -b <token/summary/ticket_number>`
  - Tokens that should be used:
    Token Type | Description
    --- | --- 
    `feat`| This is a new feature
    `refac`| This is for refactoring an existing feature
    `bug`| This is for a bug fix
    `doc`| This is for creating & editing documentation
    `test`| This is a branch used for experimenting
  - Your summary should be no more than 2-3 words and seperated by dashes.
  - Your ticket number can be found in the issues / projects tab of the repo.
  - Example:
    - `git checkout -b refac/readme-update/1`

- Implement these changes accordingly.
- Incorporate supplementary documentation as needed to support the modifications made.

- Add modified code for staging
  - `git add <path/to/file>`
  - Note: Add each changed file individually, this will allow for better tracking of issues.
  
- Commit staged file with a descriptive message
  - `git commit -m "your message"`
  - Guidelines for writing a commit message:
    -  You should use the [imperative mood](https://git.kernel.org/pub/scm/git/git.git/tree/Documentation/SubmittingPatches?id=HEAD#n183) for writing your commit messages.
    - Additional resource: https://initialcommit.com/blog/Git-Commit-Message-Imperative-Mood
    - Example:
      - `git commit -m "Update README"`
    - Typical commit messages begin with: `Add`, `Update`, `Delete`, `Refactor` and so forth.
    
- Once you are satisfied with your contribution, go to [Pull Requests](https://github.com/LaurierHawkHacks/Landing/pulls) and open a new pull request with your changes.
- A maintainer or specified reviewer will be assigned to verify and test your changes. See more [here](#pull-requests-review--management).

> **Warning**:
> If your contribution does not align with the instructions above, it will not be acknowledged. 

## Issue Tracking :rotating_light:
Issues will be used for every possible contribution that needs to be made to the project - this includes, bugs, fixes, enhancements, testing and so on. 

Github has predefined labels, they should be used as follows:

  Labels | Description
  --- | --- 
  `bug`| Use if something isn't working / defective
  `documentation`| Use when creating / editing / deleting documentation
  `duplicate`| Use for issue tickets with similar problems
  `enhancement`| Use for new contributions to the codebase
  `good first issue`| Don't use lol - need to remove
  `help wanted`| Use if you are having issues solving a problem
  `invalid`| Use if the issue might break the codebase
  `question`| Use if you are unsure about implementation
  `wontfix`| Use if you no longer want to work on this contribution / is redundant

> **Note**: 
> Multiple labels can be used on any specific issue.

## Pull Requests Review & Management :memo: 

All comments and feedback are welcome on any Pull Request (PR). However, only repository maintainers can approve or deny these requests. 

Once you successfully create a Pull Request, the maintainer will review and sufficently test the contribution to determine if it is merged into the main or any other branch. In the case where you want a speicific reviewer, Github has a feature that will allow you to assign the specified maintainer.

For more information regarding Github's Pull Request review feature, see [here](https://help.github.com/articles/about-pull-request-reviews/).

<div align="right">
  <h6>Author: <a href="https://github.com/aidantrabs">Aidan Traboulay</a> (15/06/2023)</h6>
</div>
