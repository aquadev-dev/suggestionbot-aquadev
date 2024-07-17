<h1 align="left">Discord Suggestion Bot</h1>
<p align="left">A JavaScript Discord bot that utilises MongoDB to create a suggestion system that allows members of a Discord server to upvote or downvote a topic of discussion that may change the server</p>

<p align="left">See it in action here: (Insert Link Here!)</p>
<h2>About</h2>
<p>
  While working on my Discord bot for the computer science Discord server, I found two unique features I created that I would like to showcase separately with one of them being a suggestion system bot. When working on the suggestion system, realised it was such a big feature that it dserverd a seperate showcase spot on my website and github. 
</p>

<h2>Language and Modules Used</h2>
<div align="start">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" hieght="50" width="60">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/discordjs/discordjs-original.svg" hieght="50" width="60">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original.svg" hieght="50" width="60">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" hieght="50" width="60">
  <img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.svg" hieght="50" width="60">
  <img src="https://raw.githubusercontent.com/underctrl-io/commandkit/next/apps/docs/public/logo_lg.webp" hieght="50" width="60">
</div>

<h2>Tools Used</h2>
<div align="start">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" hieght="50" width="60">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" hieght="50" width="60">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" hieght="50" width="60">
</div>

<h2>Features</h2>

-	Currently allows the users to upvote and downvote a suggestion, which can sway the opinion of whether the admin approves it
-	Checks to see if someone has already upvoted or downvoted, so you can’t vote twice
-	Bar updates in real-time through the use of a MongoDB database
-	Admins can either ‘Approve’ or ‘Reject’ a suggestion by clicking on the respective buttons 


<h2>How to run the bot</h2>
<p align="left">Make sure you install the latest NodeJS version and have a Discord bot application to run the code smoothly.</p>
<p align="left">You can find out how to set up a Discord bot application here: https://discord.com/developers/docs/quick-start/getting-started</p>
<p align="left">You find out how to set up a MongoDB database here: https://www.youtube.com/watch?v=edeNqzKvj0g</p>

- Install discord.js + other dependencies (run each command separately)
```
npm install discord.js
npm install commandkit
npm install mongoose
npm install dotenv
```

- Create a .env file with the following details
```
TOKEN = YOUR_BOT_TOKEN
MONGODB_URI = YOUR_MONGODB_URI
```

- Download the rest of the project files
- Make sure the bot you created is added to the discord server you want to run it in
- Start the bot by running the following command
```
node .
```
