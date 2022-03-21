# Modulo
![Algorithm schema](./client/src/assets/img/LogoModulo.png)

## Table of contents
* [Modulo](#modulo)
* [Branching convension](#branching-convension)
* [Technologies](#technology-(Tech Stack))
* [Folder Structure](#folder/file-structure)
* [Development](#development)

## Modulo
The basic trend of educational institution activity is providing educational services. In order to provide standard services, human and physical resources should be managed effectively within the institution. Most of the government and other higher educational institutes including universities are getting the help of online portals such as Moodle and LMS and some are still working manually to fulfil their basic requirements. But changes in the system of education require an adequate response to the challenges of the new circumstance. Therefore, the features of the currently using online tools are not smart enough to provide the best service. Also, the demand for these learning management systems has raised massively due to the emphasis on remote learning during the Covid-19 pandemic situation. It is our purpose to propose a new educational system using modern technologies as a solution to the problem mentioned above. 

Hence, we are proposing an Education Institution Management System which is able to provide more powerful and time - saving features to utilize the resources of the institute. 

In this project we hope to devlop following features:

 *User/Role Management 
 *Lecturer/ lecture halls and lab allocation 
 *Document Manager 
 *Timeline Overview and Analytics 
 *Notice Board 
 *SMS Notification 
 *Feedback/ Complaint/Suggestions section 
 *GPA Calculator 
 *Requisition Manager 
 *Counseling Chat Application 


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

The page will reload if you make edits.