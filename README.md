# MindPeers-assignment

## Tech Stack Used
- NodeJS
- Socket.io
- ExpressJS
- MongoDB
- HTML5
- CSS

## Flow

- root url have to run 
- an pop-up will come ask for username
- backend will cheack if that username already exists if yes the go forward in not then create a new user using that usename
- clink on chat a pop-up window opens
- enter your msg in input box
- hit send button
- your message will be visible in box in green color and right side
- other users message will be visible in gray color in left side
- all the chat data will be storing in MongoDB
- this app can also be used in any other app just paste iframe link in body tag on html file



## Start Project
  
  - Colne the Repo
  - open terminal 
  - `cd mindpeers-assign`
  - create `.env` file in root and their field based on `example.env`
  - `yarn install`
  - `yarn start`
 
### Use this chat widget in your app -
*just paste `<iframe style="position: fixed; bottom: 0; right:0 ; width: 400px; height: 600px; border: none; z-index: 900;" src="https://mindpeers-riyaz.onrender.com/" ></iframe>` in the last of <body> tag in your main html file of project
