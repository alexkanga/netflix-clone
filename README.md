# Netflix clone.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. Along with other libraries and APIs:

- CSS to give styles to the different components.

- React-slick to implement a responsive carousel slide for movies.

- Firebase for authentication API for handling user authentication and hosting.

- TMDB API for movies information and database.

## How to use the app?

- [x] In order to enter the application, type your **email address** and click on **'Get Started'**.
- [x] If it's your **first time**, you must register with both **email address** and **password**. Then, you can login and logout at any time.

![Netflix Clone](https://res.cloudinary.com/drpcjt13x/image/upload/v1667417973/Proyectos/Netflix%20clone/netflix-preview_jccvmk.jpg "Netflix Clone App")

## How did I create my Netflix clone app?

The easiest way to create an App React like this, is by creating a basic React template but adding Redux to the template.

- [x] First, you need to have [Node.js](https://nodejs.org/en/) installed in its latest versions.

- [x] Then, a package manager, such as [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/). It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them... you are going to use it a lot!

- [x] Now, create the React app. On your terminal, run the following command. This will create a new directory (my-app or whatever you want to call it) inside the current folder or your selected folder. Note that Redux must be included in the template so the command will be different than just for a React-only app.

```bash
npx create-react-app my-app --template redux
```

... go into your newly generated directory (my-app or whatever you called it)...

```bash
cd my-app
```

... and install additional facilities such as:

- [x] [react-slick](https://react-slick.neostack.com/) library.
      React-Slick is a library to implement slideshow components for cycling through elements—images or slides of text—like a carousel.

npm:

```bash
npm install react-slick --save
```

yarn:

```bash
yarn add react-slick
```

- [x] Then, open this new project in your code editor, if you are using Visual Studio Code (VSC) you can run the following command.

```bash
code .
```

- [x] Finally, start up the React app. Run npm start to fire up your application in the development mode. This should automatically open up on [http://localhost:3000](http://localhost:3000) to view your initial app in your browser.

```bash
npm start
```

The page will reload when you make changes. You may also see any lint errors in the console.

- [x] Also you have to login to both [Firebase](https://firebase.google.com/) and [TMDB API](https://www.themoviedb.org/) to use their services.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

You can take a look at this project in my [github](https://github.com/GuaciG/netflix-clone)

Also, it's hosted on Firebase so, you can see the live version in [this link](https://netflix-clone-3709a.web.app/)

Feedback issues etc. are more than welcome! Thanks!
