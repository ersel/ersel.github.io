# Software Projects

I enjoy trying new technologies and as a kinaesthetic learner find it more natural to learn whilst working on a project. I have compiled a list of some software projects that I've worked on.

## Spotify Terminal Client for Mac
Terminal is like 127.0.0.1 to me, hence I curate a list of helpful functions and aliases in my bash_profile. On a cold January night, I wondered why should I leave warm and comfortable home row of my keyboard to play music, so I wrote a little Node.js app to control Spotify from the convenience of a terminal window.

With the client you can search for artists, songs, albums or playlists and start playing directly from the search results. You can also pause, stop, skip, repeat, shuffle and set volume and even display the lyrics of the currently playing song.

It works by talking to Spotify Web API to fetch search results then controls local Spotify application through invoking various Apple Scripts. In order to get lyrics feature working, you'll need to grab an API token so the client can talk to the the Genius API.

Click here for the code repo, or install the client directly if you have Node installed.

```npm install spotify-cli-mac -g```

Thinking npm is so passé? Well, be my guest and install with yarn whilst curling your moustache then.

```yarn global add spotify-cli-mac```

Once installed type `spotify -h` for a full list of features you can use.

## Mental Math
Mental Math is a Vuejs app to learn and practice various mental arithmetic tricks. You can try it out at mentalmath.fun, I intend to add more exercises from Vedic and Trachtenberg techniques in the future.

If you are interested in contributing, please check this wikipedia page for a comprehensive list of techniques which can be added to the project. I would be happy to help on implementation if you open an issue on the repo, PRs are welcome.

## ReadNow & ReadLater Chrome Extensions
Do you end up with a myriad of open tabs on Chrome that you would like to read at some point? Like that interesting post on Medium which has been sitting there for days now waiting to be read.

Well, breathe a sigh of relief because I've developed a pair of Chrome extensions to fix this problem. You can install both ReadLater and ReadNow extensions from the Chrome Web Store. Once installed, you can click the ReadLater browser icon and the URL of current tab will be automatically saved to a bookmarks folder. When you are ready to read some of your bookmarks then simply click the ReadNow button and depending on your preferences first, last or a random ReadLater bookmark will be opened in a new tab and the URL will be removed from your ReadLater bookmarks folder.

You can check the code for both extensions on GitHub.

##Time Tracking Bot for Slack

> “What gets measured get managed.”- Peter Drucker

During my time at an early-stage start-up, a key learning I took away was that the most valuable asset of a start-up is the time of its employees. While developing a new product, there will be many manual back-office tasks. Deciding on the right order to automate these to free up employee time is vital. This experience has inspired me to develop a time tracking bot on Slack to record manual tasks in a standardised way. As Peter Drucker says:

I wrote a Serverless nodejs app using AWS Lambda, AWS API Gateway and Google Spreadsheet API. Time tracking records are timestamped with the name of the activity, along with the duration in number of seconds. Both the time tracking records and list of activities that can be recorded are stored in a Google Spreadsheet which can be shared with other people.

People can simply type `\track "onboarding call" 15m` in any Slack chat window and the activity gets recorded in the Google Spreadsheet. After recording an activity, Slack bot compliments the hard work of the employee by choosing a random compliment.

You can check the source code here.

##Arduino Simple IO
I've written a small input/output library in C++ to use my Arduino Uno R3 with an LCD screen and a keypad. It works by initializing an InputLine at the specified column depending on the size of your LCD screen. Once you initialize an input line then you can add as many text labels and alphanumeric input fields as you like.

A linked list data structure was used to store labels and input fields added to the line, which made it quite easy to implement cyclic cursor rotation between fields.

You can see the source code here.

##Yass G! - Yet another static site Generator
This is none other than my blog, which is a simple Nodejs script that takes a few Markdown files and generates HTML pages like the one you are reading at the moment. Feel free to steal it.

