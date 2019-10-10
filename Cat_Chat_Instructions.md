# Cat Chat
In this tutorial you will learn how to make a simple chat web app with [Firebase](https://firebase.google.com), [Vue.JS](https://vuejs.org), Javascript, HTML, and CSS. This tutorial is intended for people who have used HTML and CSS before.

## Getting started
you will need the following for this project:

- Text editor I recommend using [Atom](https://atom.io), [VS Code](https://code.visualstudio.com), or [Webstorm](https://www.jetbrains.com/webstorm/) (if you are student you can get all Jet Brains products for free)
- Node JS and NPM, I recommend installing through [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md).

Once you have Node installed you need to install the Vue CLI and firebase tools. The Vue cli will be used to create the project structure and compile our code. To install it, simply run: 

`` npm install -g @vue/cli-service-global ``

`` npm i -g firebase-tools``

Once that runs, check that it worked properly by running:

`` vue -V ``

It should output 3.5.5 or something similar.

## setting up the project
In order to setup the project navigate to your working directory and run the command ``vue create [app-name]`` for app name we will use cat-chat. After running that command you will be greeted with a prompt asking you to choose a preset. Go down and choose Manually select features. 

/images/select features.png

Select all of the options highlighted above then press enter.
Next you will be prompted to use history mode. Type Y then hit enter.

For css preprocessor choose sass/scss with dart-sass
Choose save in dedicated config files

Then open the directory and run ``npm run serve`` this will launch the development server and allow you to access your work at [http://localhost:8080](http://localhost:8080)

## install additional dependencies
Before we start programming lets install all of the dependencies we will need for this project.

Moment JS: `npm i -s moment`
Firebase: `npm i -s firebase`
Mini Reset CSS: `npm I minireset.css -s`

## Layout
Now that you have learned how to create a  baseplate for an app. We need to create our UI. Because this tutorial focuses on creating web apps I will just have you simply clone the simple UI I designed in Adobe XD. If you want to take a look at the design specs you can go here: [https://xd.adobe.com/spec/43cd92c0-ab67-4c76-4d30-5f72a4a09e24-35fc/](https://xd.adobe.com/spec/43cd92c0-ab67-4c76-4d30-5f72a4a09e24-35fc/)

/images/Screen Shot 2019-10-09 at 6.13.22 PM.png


To do this please run navigate to a new directory and run `git clone git@github.com:hyphen-hacks/Web-Application-Development-Workshop.git` This will copy the repository into your current directory. Navigate into the folder called cat-chat styles open this directory and install the dependencies `npm i ` then open the folder with your editor. Then start the development server.

/images/Screen Shot 2019-10-09 at 7.43.49 PM.png

When you look at the URL in your browser you should see something like the image above. 

## getting started with firebase
Firebase is a realtime database and authentication system by Google. They have a very generous free tier that we will take advantage of for this project.

To get started go to: [https://console.firebase.google.com/](https://console.firebase.google.com/). And login. 

After logging in, create a new project. Enter the name cat-chat then choose to disable google analytics. 

Once it has been created go to the Authentication tab, click set up sign in method, and enable sign in with google. 

Then go to the database tab and enable real time database in testing mode. 

Now go back to the project overview tab and add a web app. 

/images/Screen Shot 2019-10-09 at 7.54.21 PM.png

Type in app nickname: cat-chat then click register

Now copy and paste your firebase config and the line of code underneath.

/images/Screen Shot 2019-10-09 at 7.55.48 PM.png

In a terminal run `npm i -s firebase` to install the firebase SDKs to your project

Now in your code editor open the main.js file inside of src directory. 

Add the line `import firebase from ‘firebase` to the top of the document. This imports the firebase SDKs for our use.

Now underneath the imports paste the firebase config into the file.

/images/carbon.png
It should look like this.

## Setting up authentication

Open the app.vue file. Add a mounted function to the export default object. 

/images/mounted.png


This function will fire every time the app is loaded. When the app loads we need to check wether or not the user is signed in. To check this we will use the firebase auth method onAuthStateChanged()

Add this to your mounted function:

`firebase.auth().onAuthStateChanged((user) => {`
`if (user) {`
`// User is signed in.`
`} else {`
`// No user is signed in.`
`}`
`});`

This function will fire every time the user signs in or out. If the user is signed in we want to show them the chat page so add `this.$router.push()`






