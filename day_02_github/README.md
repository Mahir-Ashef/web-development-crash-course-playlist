# Intro to GitHub

Have you got a good handle on Git? let’s look at GitHub.

### GitHub ?
Github is a code hosting cloud for version control and collaboration. It lets you and others work together on a single project from anywhere.

##### In this tutorial I'll show you how to use github.

### Steps:
#### Step 1. Create a github account
* Goto GitHub official site and signup with required information.



#### Step 2. Create a Repository
 * A repository is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets. It's recommended including a README.md file.

 **To create a new repository**

  1. In the upper right corner, next to your avatar or identicon, click **+**  and then select New repository.
  2. Name your repository hello-world.
  3. Write a short description(optional).
  4. Mark Initialize this repository with a README.
  5. Then Click **Create repository** button.

![create repo](https://user-images.githubusercontent.com/27342413/29606997-b1adfce4-8811-11e7-93b8-0380f9acba5e.jpg)

#### Step 3. code something epic on your local directory.
  1. Create a index.html file and write some code onto it
  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>1st Git Repo</title>
    </head>
    <body>
      <h1> Create a repo on GitHub </h1>
      <p>Create a reo on github is very easy</p>
    </body>
  </html>
  ```

  2. Initialize git, Stagging and commit this repo. Goto the project directory and type

  ```
  $ git init
  $ git add .
  $ git commit -m "initial commit"
  ```


#### Step 4. Push it into GitHub
  1. Find your repository origin from adress bar. It may be look like this.
    ```
    https://github.com/User_Name/hello-world
    ```
  2. Add remote origin and push your code into git repository
  ```
  $ git remote add origin https://github.com/User_Name/hello-world
  $ git push -u origin master
  ```
  3. It may be ask your github User_Name and pass . Enter those carefully and hit Enter.

Congrats, You have pushed your code into GitHub successfully.
