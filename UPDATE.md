## CURRENT SCHEDULE

1. Welcome 1
2. Special Event 1 (API)
3. Today at Navy Pier 1 (API)
4. Trailer List 1 (API)
5. Branding 2
6. Today at Navy Pier 2 (API)
7. Trailer List 2 (API)
8. Welcome 3
9. Special Event 2 (API)
10. Today at Navy Pier 3 (API)
11. Trailer List 3 (API)
12. Branding 4
13. Today at Navy Pier 4 (API)
14. Trailer List 4 (API)

## API DATA NEEDED

---

"Today at Navy Pier"
A scrolling list of events. This appears 4 times in the schedule loop, each time with a unique video background.

JSON
today: {
  1: {
    title: ' ',
    subtitle: ' ',
    logistics: ' ',
    description: ' ',
  },
  2: {...},
  3: {...},
  4: {...}
}

Videos
program_1.mp4, program_2.mp4, program_3.mp4, program_4.mp4

---

"Trailer List"
Another scrolling list of events but this one has a headline option. This is designed go hold multiple events, in this children durations should add up to the parent duration. (duration should equal the video length). This appears 4 times in the schedule loop, each time with a unique video background.

JSON
duration: '91',
trailers: {
  1: {
    headline: ' ',
    duration: '48',
    logistics:  ' ',
    description: ' ',
    events: {
      1: {
        title: ' ',
        logistics: ' ',
        description: ' ',
      },
      2. { ... }
    },
  },
  2: {...},
  3: {...},
  4: {...}
}


Videos
trailer_1.mp4, trailer_2.mp4, trailer_3.mp4, trailer_4.mp4

---

"Special Events"
A scrolling list of events. There are two slots for this in the schedule loop

JSON
special: {
  1: {
    title: ' ',
    subtitle: ' ',
    content: HTML STRING,
  },
  2: {...}
}

Videos
event_1.mp4, event_2.mp4

---

Full JSON Response
{
  today: {
    1: {
      title: ' ',
      subtitle: ' ',
      logistics: ' ',
      description: ' ',
    },
    2: {...},
    3: {...},
    4: {...}
  },
  trailers: {
    headline: 'TODAY AT <br> NAVY PIER',
    duration: '91',
    events: {
      1: {
        title: ' ',
        subtitle: ' ',
        logistics: ' ',
        description: ' ',
      }
      2: {...},
      3: {...},
      4: {...}
    }
  },
  special: {
    1: {
      title: ' ',
      subtitle: ' ',
      content: HTML STRING,
    },
    2: {...}
  }
},
trailers: {
  1: {
    headline: ' ',
    duration: '48',
    logistics:  ' ',
    description: ' ',
    events: {
      1: {
        title: ' ',
        logistics: ' ',
        description: ' ',
      },
      2. { ... }
    },
  },
  2: {...},
  3: {...},
  4: {...}
}
