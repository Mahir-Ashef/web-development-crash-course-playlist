# Building a Static Server to Serve HTML

##### In this lesson I'll show you how to easily serve static file using NodeJS Package live-server

## 1. Install NodeJS on Ubuntu

* Node.js is an open-source, cross-platform JavaScript runtime environment for developing a wide variety of tools and applications. Node.js runs on most operating systems, including Linux, OSX and Windows.

* Ubuntu 16 has Node.js in its default apt repositories. That version of Node.js can be used to provide a consistent experience across multiple servers.

### Steps:
1. Update your local package index:
```
$ sudo apt-get update
```
2. Install Node.js:
```
$ sudo apt-get install nodejs
```
3. You have to also want to install NPM, which lets you easily manage your different Node.js packages.
```
$ sudo apt-get install npm
```

## 2. Install [live-server](https://www.npmjs.com/package/live-server) using NPM

You should probably install this globally.

#### Npm way
  ```
  npm install -g live-server
  ```
#### Manual way
```
git clone https://github.com/tapio/live-server
cd live-server
npm install # Local dependencies if you want to hack
npm install -g # Install globally
```
## 3. Using live-server
### Steps:
1. Create a folder and a file named index.html
```
$ touch index.html
```
2. Open terminal and goto the directory where you have placed the index.html file.
3. Open index.html file and write some html code.
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Serve a file</title>
  </head>
  <body>
    <h1>Simple file server</h1>
    <p>Serving static file using live-server is very easy.. </p>

  </body>
</html>
```
4. Run your live-server by typing
```
$ live-server
```
5. Open your browser and type localhost:8080 and hit enter.

  *Here 8080 is port. sometimes your port may be busy with other process or application. You can use different port use a flag like this.*

  ```
  live-server --port=3000
  ```


6. Let we need to another route or another file named about.html to serve. 1st create a file named about.html
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>about</title>
  </head>
  <body>
    <h1>live-server</h1>
    <p>This is a little development server with live reload capability. Use it for hacking your HTML/JavaScript/CSS files, but not for deploying the final site.</p>

  </body>
</html>
```
7. To view the page in your site type localhost:3000/about.html
8.  When you make a change to any file, the browser will reload the page - unless it was a CSS file in which case the changes are applied without a reload.
