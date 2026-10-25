# Git and GitHub practical guide

Run these commands in Terminal, Command Prompt, or the VS Code terminal from inside this project folder. Install Git first if it is not installed. Create/sign in to your own GitHub account at https://github.com.

## 1. Initialise the project and inspect tracking status
```bash
git init
git status
git add index.html about.html programmes.html contact.html css/style.css js/script.js README.md GIT_GUIDE.md .gitignore
git commit -m "Create initial Department of Computing website"
git status
```

The first commit saves the initial version in your **local** repository.

## 2. Make a homepage change and commit it
Edit `index.html` (for example, change the hero heading or add a short welcome sentence), then run:
```bash
git status
git diff
git add index.html
git commit -m "Improve homepage content"
git log --oneline
```

## 3. Create a branch for the Contact Us page
```bash
git switch -c feature/contact-page
```
If your Git version does not support `git switch`, use `git checkout -b feature/contact-page`.

Make a small change to `contact.html`, save it, then run:
```bash
git status
git diff
git add contact.html
git commit -m "Build contact page"
git log --oneline --all --graph
```

## 4. Merge the feature branch into main
```bash
git switch main
git merge feature/contact-page
git log --oneline --all --graph
git branch
```
If your default branch is called `master`, use `git branch -M main` before proceeding, or replace `main` with your branch name consistently.

## 5. Create a GitHub repository and connect it
On GitHub, create a **new empty repository** (for example, `swd414-computing-website`). Do not initialise it with a README if you already have one locally. Then replace the placeholders below with your own GitHub username and repository name:
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git branch -M main
git push -u origin main
```
If you already added a remote, inspect it with `git remote -v`; update it with `git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git`.

## 6. Make another change after the first upload and push it
Edit `index.html` or `style.css`, then run:
```bash
git status
git diff
git add index.html
git commit -m "Update homepage after GitHub upload"
git push
git log --oneline
```
Use `git add css/style.css` instead if you changed the stylesheet. Make sure the path you stage matches the file you edited.

## 7. Useful checks for your demonstration
```bash
git status
git log --oneline --graph --all
git branch -a
git remote -v
```

## Key concepts
- **Working directory:** files you are editing.
- **Staging area:** selected changes prepared for a commit using `git add`.
- **Commit:** a saved snapshot in the local Git history.
- **Branch:** a separate line of development.
- **Merge:** combines changes from one branch into another.
- **Remote repository:** a repository hosted on a service such as GitHub.
- **Push:** sends local commits to the remote repository.
- **Commit vs push:** committing saves a snapshot to your local repository; pushing uploads committed changes to the remote repository. A commit does not automatically appear on GitHub until it is pushed.

## Screenshot checklist
Capture your own screenshots after completing the steps:
1. Website homepage in the browser.
2. About Us, Programmes, and Contact Us pages.
3. Terminal showing `git log --oneline --graph --all` with at least three commits.
4. Terminal showing `git branch -a` and the merged feature branch in history.
5. GitHub repository page showing the project files and recent commits.
6. GitHub commit history after pushing the final update.

Do not submit screenshots that imply you performed steps you have not actually completed.
