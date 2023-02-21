
# Navy Pier Concierge

This app loops through a video playlist with html content overlays, content is fetched from a Wordpress API. Runs within a full screen browser on a kiosk computer inside of Navy Pier. It was built with [Vue.js](https://vuejs.org/) (version 1).

# Installation

1. Install Node for your platform which also includes NPM, currently the project needs version 12 so you will probably want to use something like nvm.

2. Once Node is installed open a terminal window and change
into the project directory (the one with this README). Run the
following...

`npm install`

That will install the project dependencies and complete installation.


# Run Server

To start the server open a terminal window and change into the project
directory. Then run...

`npm run dev`

The server will start and a Chrome browser window should open with the running
app. If it doesn't visit...

http://localhost:8080/

In order for videos to play without interaction you may need to set Chrome's
autoplay flag. Just go to this URL...

[chrome://flags/#autoplay-policy](chrome://flags/#autoplay-policy)

Set "Autoplay Policy" to "No user gesture is required"

# Editing Videos
Videos are stored on the kiosk computer in the  `static` folder. You need direct access to the computer or access to remote desktop to update them. Resolution of videos is 3320×1280. These should be compressed as MPEG-4 AAC, H.264. When updating videos you must add their duration in the schedule data "src/store/store.js".

# API
Most scenes get data from an API running on WordPress. Each time the loop runs data is fetched. If the fetch was unsuccessful the data will not be updated and the kiosk will try again on the next loop. The fetched data can be edited on. The API endpoint and data assignment can both be edited from "src/store/store.js".
# Editing the Schedule
The schedule is managed in `src/store.js`. Edit the contents of `defaultDay`, this list of scenes allows you to specify a video to play and an html template to overlay on top of it.

All scenes should have these properties.
```
name: Optional, but you should use it
template: The html overlay to use (video, TemplateEvent, TemplateList, TrailerList).
background: The video to play in the background
duration: The duration of the scene in seconds, this should match the video
display: Optional, If included with the value `false` the scene will be skipped
```
## Templates

### Video
A blank template that only shows the video below it.

```
No additional props
```
template name: 
component: 

### TemplateEvent
A simple event promotion with no sub content.
```
event: {
  title: The headline
  subtitle: The subhead
  content: HTML String
}
```
### TemplateList
A scrolling list of events with an editable headline.
```
lists: {
  1: {
    headline: 'TODAY AT <br> NAVY PIER',
    duration: '91',
    events: {
      1: {
        title: The headline,
        subtitle: The subhead,
        logistics: ' ',
        description: ' ',
      }
    }
  }
}
```
### TrailerList
This event promotion has subitems that can be used as a schedule.
```
event: {
  lists: {
    1: {
      headline: The main headline
      duration: The duration of this list
      logistics:  The time and date
      description: A description of the event
      events: {
        1: {
          title: This items headline
          logistics: The time and date
          description: A description of the item
        }
      }
    }
  }
}
```
## Current Schedule
```
1. Welcome 1 (Video)
2. Special Event 1 (TemplateEvent API)
3. Today at Navy Pier 1 (TemplateList API)
4. Trailer List 1 (TrailerList API)
5. Branding 2 (Video)
6. Today at Navy Pier 2 (TemplateList API)
7. Trailer List 2 (TrailerList API)
8. Welcome 3 (Video)
9. Special Event 2 (TemplateEvent API)
10. Today at Navy Pier 3 (TemplateList API)
11. Trailer List 3 (TrailerList API)
12. Branding 4 (Video)
13. Today at Navy Pier 4 (TemplateList API)
14. Trailer List 4 (TrailerList API)
```
