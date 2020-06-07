# Proof of concept - React PWA
This demo is an example of a PWA created with **React**, using **hooks** and **flow**. 



## Creating the React app

    npx create-react-app my-app
    cd my-app
    yarn start



## Service Worker
Registering service worker in **index.js**

    serviceWorker.register();


##  Static Type Checking

> **Flow** is a static type checker for your JavaScript code. It is
> developed at Facebook and is often used with React. It lets you
> annotate the variables, functions, and React components with a special
> type syntax, and catch mistakes early.

In order to use flow we do the following add the following shortcut to the package.json

    "flow" : "flow"

And the tag 

    /*
    * @flow
    */
   to the JavaScript files.
  

## React Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from function components.
For example accessing the `state` without having to use classes.

### useState
We import **useState** from **react**.

    import  { useState } from  'react';

And we use it like this:

    const [editing, setEditing] = useState(false);
    
    const [title, setTitle] = useState(content.title);
    
    const [body, setBody] = useState(content.body);
    
    const [dialogVisible, setDialogVisible] = useState(false);
An example can be found in [RecipeCard.js](https://github.com/adiroman96/recipes-storage/blob/master/src/RecipeCard.js) .

**What exactly is useState?**
Let's take a simplier example:

    const [count, setCounter] = useState(0);

`useState(0)` returns a tuple:

 - fisrt parameter `count` = the current state of the counter 
 - second parameter, `setCounter` = the method used to update the counter's state. 
 



### useEffect

useEffect() is a function that handles our actions when something affects our component.

An example can be found in [LocalStorageReducer.js](https://github.com/adiroman96/recipes-storage/blob/master/src/LocalStorageReducer.js):

    import { useEffect } from  'react';


    useEffect(() => {
    console.log("useEffect");
    saveState(state);
    }, [state]);

