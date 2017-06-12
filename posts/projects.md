I enjoy experimenting with new technologies and as a kinaesthetic learner find it more natural to learn whilst working on a project. I have compiled a list of some software projects that I've worked on.

# Spotify Terminal Client for Mac
I spend a fair amount of my time at the Terminal, hence I curate a list of helpful functions and aliases in my [bash profile.](https://github.com/ersel/dotfiles)

On a cold January night, I wondered why should I leave warm and comfortable home row of my keyboard to play music, so I wrote a little Node.js app to control Spotify from the convenience of a terminal window.
<script type="text/javascript" src="https://asciinema.org/a/ejbbvaa8833wq4xn4d2xuc9jx.js" id="asciicast-ejbbvaa8833wq4xn4d2xuc9jx" async></script>
Using the client you can search for artists, songs, albums or playlists and start playing directly from the search results. You can also pause, stop, skip, repeat, shuffle, set volume and *even display the lyrics of the current track!*

Client works by talking to *Spotify Web API* to fetch search results and sends commands to local Spotify application by invoking AppleScript functions. You will need to create a Spotify application and update config to include your Client ID and Secret to use the search functionality. In order to get lyrics feature working, you'll need to grab an API token so the client can also talk to the the *Genius API*. For more information [check the set-up section of the documentation.](https://github.com/ersel/spotify-cli-mac#set-up)

[Click here for the GitHub repository](https://github.com/ersel/spotify-cli-mac), or install the client with npm if you already have Node on your Mac.

```npm install spotify-cli-mac -g```

Thinking npm is so *passé?* Be my guest, install using *yarn* whilst curling your moustache then.

```yarn global add spotify-cli-mac```

Once installed type `spotify -h` to see a full list of features available at your finger tips.

# Mental Math
Mental Math is a web app to learn and practice various mental arithmetic tricks, built with [minimalist MVVM framework Vuejs](https://vuejs.org/) and [modern flexbox based CSS framework Bulma](http://bulma.io/).

[![Mental Math Homepage](http://erselaker.com/assets/images/mental_math_homepage.png "Mental Math Homepage")](http://www.mentalmath.fun)

Visit [mentalmath.fun](http://www.mentalmath.fun/) to try it out.

I would like to add more exercises from <a href="https://en.wikipedia.org/wiki/Vedic_Mathematics_(book)">Vedic</a> and [Trachtenberg](https://en.wikipedia.org/wiki/Trachtenberg_system) techniques in the future.

If you would like to contribute, please check this [Wikipedia page for a comprehensive list of techniques](https://en.wikipedia.org/wiki/Mental_calculation) which can be added to the project. I would be happy to help with implementation if you open an issue or submit a pull request on the [GitHub repository.](https://github.com/ersel/mental-math)

# ReadNow & ReadLater Chrome Extensions
Do you end up with a myriad of open tabs on Chrome that you would like to read at some point? Like that interesting post on Medium that you were meant to read for a week now.

Well, breathe a sigh of relief because I've developed a pair of Chrome extensions to fix this problem.

You can install both [ReadLater](https://chrome.google.com/webstore/detail/readlater-bookmarks-in-a/fcabbkcefpkdinlmioihdghblpopckkn?hl=en) and [ReadNow](https://chrome.google.com/webstore/detail/readnow-open-bookmarks-fr/fckiipajjnhkmdhehhhhcgkmgdepdefn?hl=en) extensions from the [Chrome Web Store](https://chrome.google.com/webstore/search/erselaker?hl=en).

Once installed, you can click the ReadLater button to save current tab for later reading. When you're free to read simply click the ReadNow button and saved bookmark will be opened in a new tab and the entry will be removed from ReadLater bookmarks. ReadNow button will also display the number of bookmarks you have queued for reading in the right bottom corner.

![ReadLater and ReadNow Buttons](http://erselaker.com/assets/images/chrome_extension_buttons.png "ReadLater and ReadNow Buttons")

On the settings page for ReadNow extension, you can set in which order you would like to read through your bookmarks; first added, last added or in random order.

![ReadNow Options](http://erselaker.com/assets/images/readnow_options.png "ReadNow Options")

Source code for [ReadNow](https://github.com/ersel/ReadNow) and [ReadLater](https://github.com/ersel/ReadLater) are both on GitHub.

# Time Tracking Bot for Slack

> “What gets measured get managed.”- Peter Drucker

During my time at an early-stage start-up, a key learning I took away was that the most valuable asset of a start-up is the time of its employees. While developing a new product, there will be many manual back-office tasks. Deciding on the right order to automate these to free up employee time is vital. This experience has inspired me to develop a time tracking bot on Slack to record manual tasks in a standardised way. As Peter Drucker says:

I wrote a Serverless nodejs app using AWS Lambda, AWS API Gateway and Google Spreadsheet API. Time tracking records are timestamped with the name of the activity, along with the duration in number of seconds. Both the time tracking records and list of activities that can be recorded are stored in a Google Spreadsheet which can be shared with other people.

People can simply type `\track "onboarding call" 15m` in any Slack chat window and the activity gets recorded in the Google Spreadsheet. After recording an activity, Slack bot compliments the hard work of the employee by choosing a random compliment.

You can check the source code here.

# Arduino Simple IO

I've written a small input/output library in C++ to use my Arduino Uno R3 with an LCD screen and a keypad. It works by initializing an InputLine at the specified column depending on the size of your LCD screen. Once you initialize an input line then you can add as many text labels and alphanumeric input fields as you like.

A linked list data structure was used to store labels and input fields added to the line, which made it quite easy to implement cyclic cursor rotation between fields.

You can see the source code here.

# Yass G! - Yet another static site Generator

This is none other than my blog, which is a simple Nodejs script that takes a few Markdown files and generates HTML pages like the one you are reading at the moment. Feel free to steal it.

