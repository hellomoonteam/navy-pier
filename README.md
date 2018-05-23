
# Installation

1. Install Node for your platform which also includes NPM
https://nodejs.org/en/download/

2. Once Node is installed open a terminal window and change
into the project directory (the one with this README). Run the
following...

npm install

That will install the project dependencies and complete installation.


# Run Server

To start the server open a terminal window and change into the project
directory. Then run...

npm run dev

The server will start and a chrome should open a window with the running
app. If it doesn't you can visit the running app by visiting the following
URL...

http://localhost:8080/

In order for videos to play without interaction you will need to set chrome's
autoplay flag. Just go to this URL...

chrome://flags/#autoplay-policy

Set "Autoplay Policy" to "No user gesture is required"