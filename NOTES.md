# BACKGROUND FADE

On Load
    Background
        - Start playing "current scene video"
    BackgroundFade
        - opacity set to 0
        - Load "next scene video"

6 Seconds Before Scene End
    Background
        - No change
    BackgroundFade
        - Begin playing "next scene video"
        - Fade up "next scene video" over 3 seconds

3 Seconds Before Scene End
    Background
        - Load "next scene video"
        - Play "next scene video" at 3 seconds
    BackgroundFade
        - No Change

2 Seconds Before Scene End
    Background
        - No Change
    BackgroundFade
        - Opacity Set to 0

Scene Next Start
    Background
        - No Change
    BackgroundFade
        - opacity set to 0
        - Load "next scene video"

*  Manage the backgroud and background fade videos in separate variables in the store to avoid confusion with current scene.

# TODO
- Video time based events from background video
- Current and Next video variables in store
-