# Intro to Git


## Git ??

Version Control System (VCS) is a software that helps software developers to work together and maintain a complete history of their work.

  ## Advantages of Git
1. Free and open source
2. Fast and small
3. Implicit backup
4. Security
5. Easier branching

## workflow of Git
Step 1 : working directory.

Step 2 : staging area.

Step 3 : Git repository.

![flow](https://user-images.githubusercontent.com/27342413/29567879-58c36a3e-8770-11e7-8dcf-ed18c39a4030.jpg)

***
## **lesson 1:** Install git on linux ubuntu and config.
### Git with Apt
  ```
  $ sudo apt-get update
  $ sudo apt-get install git
  ```

### Git from Source
  ```
  $ sudo apt-get update
  $ sudo apt-get install build-essential libssl-dev libcurl4-gnutls-dev libexpat1-dev gettext unzip

  ```

### Setting your Git username
  Open Terminal. Set a Git username and confirm that you have set the Git username correctly.
  ```
  $ git config --global user.name "Mona Lisa"
  $ git config --global user.name
  > Mona Lisa
  ```

### Setting your email address
Open Terminal. Set a email address. and confirm that you have set the email address correctly.
```
$ git config --global user.email "email@example.com"
$ git config --global user.email
> email@example.com
```
***
## **lesson 2:** Your First Git
#### Steps:
1. Create your first file named index.html in your working directory.
  ```
  $ sudo nano index.html
  ```
2. Fill it with a html snippet
  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>day 1</title>
    </head>
    <body>

    </body>
  </html>
  ```
3. Initialize git : goto your working directory and initialize git
  ```
  $ git init
  ```

4. You probably can see a new directory called **.git** Ignore it now.

5. Now we have to check the status of initializing git by typing
  ```
  $ git status
  ```
files are now on working directory, Very 1st stage on git.

6. Staging area : It's time to transfer all file to staging area.
if you have one file named "index.html" then you can add a single file by following command.
  ```
  $ git add index.html
  ```
but if you have many file to add, then you can just do it by typing a command
  ```
  $ git add .
  ```
7. you can again check the status, to see 'whats happend'
  ```
  $ git status
  ```
your file is now on staging area. :)
8.Commit: Final stage of git. To commit staging section just typing
  ```
  $ git commit -m "Your message here"
  ```
*important notice: Here your message is very important to identify your commit record. Its recommended to try to use a meaningful text here*
***
## **lesson 3:** Commits
**save point**
**snapshot of your code**

Commit holds the current state of the repository. You can consider a commit object as a node of the linked list. Every commit object has a pointer to the parent commit object. From a given commit, you can traverse back by looking at the parent pointer to view the history of the commit. If a commit has multiple parent commits, then that particular commit has been created by merging two branches.

![commit](https://user-images.githubusercontent.com/27342413/29588834-c759a816-87b4-11e7-9e4d-0eaf7e12bf33.jpg)


#### Steps:
1. Now create a "style.css" file in working directory.
  ```
  $ touch style.css
  ```

2. Fill it with a css snippet
  ```
  body{
    background-color: cyan;
    padding: 10px;
  }
  ```
3. Now add and commit all again.
  ```
  $ git add .
  $ git commit -m "added a style.css file"
  ```
4. Check the log
  ```
  $ git log
  ```
5. you probably see something like this

  ```
  commit : b085359c600661f4a3246fef0d9b9e5b7a0069b1
  Author : user <user@mektekbd.com>
  Date   : Tue Aug 22 16:54:48 2017 +0600
  Message: added a style.css file

  commit : 8233cdd7f925d7cd6a7ac6fb5f441e82c913b13d
  Author : user <user@mektekbd.com>
  Date   : Tue Aug 22 16:52:38 2017 +0600
  Message: initial commit
  ```
So, your every commit has a record and you can check them in one line by typing `$ git log` with a flag `--oneline` ,
  ```
  $ git log --oneline
  ```

You may see only first 7 digits of id and commit messages ...
  ```
  b085359 added a style.css file
  8233cdd initial commit
  ```
***
## **lesson 4:** Undoing Things
### Undoing Methods
1. Checkout commit
1. Revert commit
1. Reset commit

![commit](https://user-images.githubusercontent.com/27342413/29588834-c759a816-87b4-11e7-9e4d-0eaf7e12bf33.jpg)


### **git checkout:**
1. Checking out a commit is used for viewing an old version of your code.

2. Commits are called as saved snapshots of your code. Checking out an old commit is a read-only operation. So, it’s impossible to harm your repository while viewing an old revision.

3. During the normal course of development, the HEAD usually points to master or some other local branch, but when you check out a previous commit, HEAD no longer points to a branch—it points directly to a commit. This is called a “detached HEAD” state, and it can be visualized as the following:


#### **Example:**
#### Point to an old version
1. First you'll need to find the id of your old version
  ```
  $ git log --oneline
  ```
  Suppose your project history look like this
  ```
  b7119f2 finalizing ....
  872fa7e again add some snaps
  8a326b7 added snaps
  b085359 added a style.css file
  8233cdd initial commit
  ```
2. You can git checkout to view the "added snaps" commit as follows:
  ```
  $ git checkout 8a326b7
  ```

3. To continue developing, you need to get back to the “current” state of your project:
  ```
  $ git checkout master
  ```

### **git revert:**
git revert is used for undoing a particular commit. But, instead of removing the commit from the project history, it appends a new commit with the resulting content. This prevents Git from losing history.

![revert](https://user-images.githubusercontent.com/27342413/29590571-4e1bc148-87bc-11e7-9b2a-b4cabc6c32a3.jpg)

#### Usages:
for reverting a commit
  ```
  $ git revert <commit>
  ```

you can go back the previous state by simply deleting the last commit ...

### **git reset:**
![danger](https://user-images.githubusercontent.com/27342413/29590797-664d78f0-87bd-11e7-8717-2f073e2ffd49.gif)

  ```
  $ git revert -> safe way to undo changes

  $ git reset  -> dangerous method
  ```

![reset](https://user-images.githubusercontent.com/27342413/29591172-1e5a5e30-87bf-11e7-8cb2-9deea870ae4d.jpg)
#### Usages:
for reseting a commit permanently ..
  ```
  $ git reset <commit> --hard
  ```

## **lesson 5:** Branching git
**Branching is like requesting a new project history. This lesson shows you how git checkout can be used to select a branch and  how git merge can integrate the history of independent branches.**

![braching](https://user-images.githubusercontent.com/27342413/29599090-410a7412-87ef-11e7-8a7a-cd0b884a79f0.jpg)

#### Key Points:
1. *branch* to create a project history.
1. *checkout* to select e branch.
1. *merge* to integrate branches.

### git branch
A **branch** is like an independent history line of a project. It's just a way to request a brand new working directory, staging area, and project history. New commits are recorded in the history for the current branch.

#### Usages:
1. **Listing:** List all of the branches in your repository.
  ```
  $ git branch
  ```

2. **Create:** Create a new branch called <branch>. This does not check out the new branch.
  ```
  $ git branch <branch-name>
  ```
  you can checkout this branch through
  ```
  $ git checkout <branch-name>
  ```
3. **Delete:** To delete a specify branch you can type
  ```
  $ git branch -d <branch-name>
  ```
  This is a “safe” operation in that Git prevents you from deleting the branch if it has unmerged changes.
  To **force delete** a specify branch
  ```
  $ git branch -D <branch-name>
  ```
4. **Rename:** To rename current branch as branch-new you can type
  ```
  $ git branch -m <branch-new>
  ```

### git checkout
The `git checkout` command let you navigate between the branches created by git branch.

#### Usages:
1. **Checking Out:** To check out a existing branch
  ```
  $ git checkout <branch-name>
  ```  

2. **Create and Checkout** To create and checkout a branch
  ```
  $ git checkout -b <branch-new>
  ```

### git merge
Merging is Git's way of putting a forked history back together again. The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.

#### Usages:
1. **merging branch:** To merge a existing branch to current branch
  ```
  $ git merge <branch-name>
  ```
***
