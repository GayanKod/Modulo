# Modulo

## Table of contents
* [Modulo](#modulo)
* [Branching convension](#branching-convension)
* [Technologies](#technologies)
* [Folder Structure](#folder-structure)
* [Development](#development)

## Modulo

## Branching convension

`main` branch will be used to deploy production releases.

 use Individual branches to do your own coding.
## Technology (Tech Stack)

1. React
1. TypeScript
1. Sass
1. MaterialUI
1. .NET

## Folder/file structure

Follow the current naming convention and folder structure.

```
Modulo
├── client                   // Frontend
|   ├── public               // Public folder
|   ├── src                  // Add all the source files here
| 	|   ├── assets           // Assets folder
| 	|   ├── components       // Components folder. Add all sub components here
|	|   ├── pages            // Main pages folder such as About Page, Landing Page etc.
| 	|   ├── styles           // Styles files
| 	|   ├── stylesVar        // Fixed Styles Library 
|	|   ├── App.tsx          // App.tsx
| 	|   └── index.tsx        // index.tsx file
|   ├── .gitignore           // Gitignore file
|   └── package.json         // node module dependencies
├── API                      //Backend
|       ├── controllers      // Add all controller for models here
└── readme.md                // README file
```

## Development

Follow the follwing steps to begin development.

1. Clone this repository.
1. cd client.
1. Run `npm install`.
1. Test locally using `npm start` command. //start Frontend 
1. cd server. 
1. Run `npm install`.
1. Test locally using `npm start` command. //start Backend 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\