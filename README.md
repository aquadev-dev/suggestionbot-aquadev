<h1 align="left">Discord Suggestion Bot</h1>
<p align="left">A JavaScript Discord bot that utilises MongoDB to create a suggestion system that allows members of a Discord server to upvote or downvote a topic of discussion that may change the server</p>

<p align="left">See it in action here: (Insert Link Here!)</p>
<h2>About</h2>
<p>
  While working on my Discord bot for the computer science Discord server, I found two unique features I created that I would like to showcase separately, one of them being a suggestion system bot. When working on the suggestion system, I realized it was such a big feature that it deserved a separate showcase spot on my website and Git Hub. It updates the progress bar that tracks the upvotes and downvotes in real time and gives admins the power to approve and reject suggestions.  
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


Make sure you download the emojis for the progress bar and upload them to the server that you are adding the bot to. Go to the folder named 'Bar Images' to find all the ones you need and name them to the name of the images:
- If you don't know how to upload the images to the discord server then you can find out here: <a href="https://support.discord.com/hc/en-us/articles/360036479811-Custom-Emojis#:~:text=To%20upload%20custom%20emojis%2C%20choose,to%20upload%20a%20custom%20emoji." title="Discord Support: How to upload custom emojis">Discord Support: How to upload custom emojis</a>

Also, in the 'formatResult.js' file, you need to copy the ids of the emojis for it to work because it will be different to the ids already there:

```js
const pb = {
    le: '<:le:your-emoji-ids-here>',
    me: '<:me:your-emoji-ids-here>',
    re: '<:re:your-emoji-ids-here>',
    lf: '<:lf:your-emoji-ids-here>',
    mf: '<:mf:your-emoji-ids-here>',
    rf: '<:rf:your-emoji-ids-here>',
  };
```

If you can't get the ids, you can type this to get the id for each emoji:
```
\:le:
\:lf:
\:me:
\:mf:
\:re:
\:rf:
```
It should give you a string like this:
```
<:le:your-emoji-id-here>
```
Make sure the bot you created is added to the discord server you want to run it in:
- Start the bot by running the following command:
```
node .
```

<h2>Configuring the bot</h2>
<p>Before you can start using the bot, you need to run the command:</p>

```
/config-suggestions add <suggestion-channel-name>
```
<p>This adds your guildID and channelID to the bot's database so it can check that the channel the '/suggest' command was run in is in the database of suggestion channels</p>

<p>You can also remove the channel from the database by typing the command:</p>

```
/config-suggestions remove <suggestion-channel-name>
```

<h2>Errors/Warning messages</h2>
<p>If you haven't run the configuration commands, then the bot will send this message:</p>
<img src="/imgs/Warning1.png">
<p>If you don't have enough permissions to run the config commands, it will give you this error:</p>
<img src="/imgs/Warning2.png">
<p>If you run the /suggest command in a channel that is not already in the database, you will get this message:</p>
<img src="/imgs/Warning3.png">
<p>If you have already voted for an option and try to vote again, it will give you this message:</p>
<img src="/imgs/Warning6.png">
<p>If you do not have enough permissions to release the results of the poll, you will get this message:</p>
<img src="/imgs/Warning4.png">
<img src="/imgs/Warning5.png">

<h2>Using the bot</h2>
<p>Once you have configured the bot to create a suggestion, you can run the command:</p>

```
/suggest
```

<p>Then you will get a modal text bot asking you to type in a suggestion for the server:</p>


<p>For example like this:</p>


<p>Also it must be stated that you have 3 minutes to type a suggestion otherwise the program will timeout.</p>

<p>Once you have clicked the purple 'submit' button you should see an embed that looks like this:</p>

<p>The bar should fill if the post is upvoted:</p>

<p>And stay empty if it is downvoted:</p>

<p>And then with one downvote and upvote it shoul be half and half:</p>

<p>If an admin presses the approve button it should look like this:</p>

<p>If an admin presses the reject button it should look like this:</p>



