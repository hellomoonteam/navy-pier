import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current: {
      scene: 1,
      day: 'defaultday'
    },
    defaultday: {
      scenes: {
        1: {
          name: 'welcome1',
          template: 'video',
          template4: null,
          background: 'welcome_1.mp4',
          duration: '61'
        },
        2: {
          name: 'event1',
          template: 'TemplateEvent',
          template4: null,
          background: 'event_1.mp4',
          duration: '58',
          event: {
            title: 'Special Event',
            subtitle: 'Special Event Sub-Title',
            content: '<p>The content of the <em>special</em> event.</p><ul><li>List 1</li><li>List 2</li><li>List 3</li></ul>',
          }
        },
        3: {
          name: 'program1',
          template: 'TemplateList',
          template4: null,
          background: 'program_1.mp4',
          duration: '91',
          lists: {
            1: {
              headline: 'TODAY AT <br> NAVY PIER',
              duration: '91',
              events: {
                1: {
                  title: ' ',
                  subtitle: ' ',
                  logistics: ' ',
                  description: ' ',
                }
              }
            }
          }
        },
        4: {
          name: 'trailer1',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_1.mp4',
          duration: '48',
          lists: {
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
                }
              }
            }
          }
        },
        5: {
          name: 'branding2',
          template: 'video',
          template4: null,
          background: 'branding_2.mp4',
          duration: '33'
        },
        6: {
          name: 'program2',
          template: 'TemplateList',
          template4: null,
          background: 'program_2.mp4',
          duration: '91',
          lists: {
            1: {
              headline: 'TODAY AT <br> NAVY PIER',
              duration: '91',
              events: {
                1: {
                  title: ' ',
                  subtitle: ' ',
                  logistics: ' ',
                  description: ' ',
                }
              }
            }
          }
        },
        7: {
          name: 'trailer2',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_2.mp4',
          duration: '48',
          lists: {
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
                }
              }
            }
          }
        },
        8: {
          name: 'welcome3',
          template: 'video',
          template4: null,
          background: 'welcome_3.mp4',
          duration: '61'
        },
        9: {
          name: 'event2',
          template: 'TemplateEvent',
          template4: null,
          background: 'event_2.mp4',
          duration: '58',
          event: {
            title: 'Special Event',
            subtitle: 'Special Event Sub-Title',
            content: '<p>The content of the <em>special</em> event.</p><ul><li>List 1</li><li>List 2</li><li>List 3</li></ul>',
          }
        },
        10: {
          name: 'program3',
          template: 'TemplateList',
          template4: null,
          background: 'program_3.mp4',
          duration: '91',
          lists: {
            1: {
              headline: 'TODAY AT <br> NAVY PIER',
              duration: '91',
              events: {
                1: {
                  title: ' ',
                  subtitle: ' ',
                  logistics: ' ',
                  description: ' ',
                }
              }
            }
          }
        },
        11: {
          name: 'trailer3',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_3.mp4',
          duration: '48',
          lists: {
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
                }
              }
            }
          }
        },
        12: {
          name: 'branding4',
          template: 'video',
          template4: null,
          background: 'branding_4.mp4',
          duration: '33'
        },
        13: {
          name: 'program4',
          template: 'TemplateList',
          template4: null,
          background: 'program_4.mp4',
          duration: '91',
          lists: {
            1: {
              headline: 'TODAY AT <br> NAVY PIER',
              duration: '91',
              events: {
                1: {
                  title: ' ',
                  subtitle: ' ',
                  logistics: ' ',
                  description: ' ',
                }
              }
            }
          }
        },
        14: {
          name: 'trailer4',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_4.mp4',
          duration: '48',
          lists: {
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
                }
              }
            }
          }
        },
      }
    }
  },
  getters: {
    currentScene: state => {
      return state.current.scene;
    },
    currentDay: state => {
      return state.current.day;
    },
    sceneCount: state => {
      return Object.keys(state[state.current.day].scenes).length;
    },
    activeScene: state => {
      return state[state.current.day].scenes[state.current.scene];
    },
    nextScene: state => {
      var sceneCount = Object.keys(state[state.current.day].scenes).length;
      var nextScene = state.current.scene + 1;
      if (nextScene > sceneCount) {
        nextScene = 1;
      }
      return state[state.current.day].scenes[nextScene];
    },
    nextSceneAlt: state => {
      var sceneCount = Object.keys(state[state.current.day].scenes).length;
      var nextSceneId = state.current.scene + 1;

      // Event Trailer Check (some event trailers are disabled)
      if (state[state.current.day].scenes[nextSceneId].template == 'TrailerList') {
        if (state[state.current.day].scenes[nextSceneId].lists[1].display != true) {
          nextSceneId += 1;
        }
      }

      // Loop Scene ID
      if (nextSceneId > sceneCount) {
        nextSceneId = nextSceneId - sceneCount;
      }

      return state[state.current.day].scenes[nextSceneId];
    },

    skipNextScene: state => {
      var skipScene = false;
      var nextSceneId = state.current.scene + 1;

      // Event Trailer Check (some event trailers are disabled)
      if (state[state.current.day].scenes[nextSceneId].template == 'TrailerList') {
        if (state[state.current.day].scenes[nextSceneId].lists[1].display != true) {
          skipScene = true;
        }
      }

      // Special Events Check (some special events are disabled)
      if (state[state.current.day].scenes[nextSceneId].template == 'TemplateEvent') {

        if (state[state.current.day].scenes[nextSceneId].event.display != true) {
          skipScene = true;
        }
      }

      // returns a boolean indicating if the next scene should be skipped
      return skipScene;
    }
  },

  mutations: {
    setScene: (state, payload) => {
      state.current.scene = payload;
    },
    setDay: (state, payload) => {
      state.current.day = payload;
    },
    FETCH_EVENTS(state, events) {
      console.log("trailer data fetched: ", events);

      // Set event lists up (a single event list repeats)
      state[state.current.day].scenes[3].lists[1].events = events.events;
      state[state.current.day].scenes[6].lists[1].events = events.events;
      state[state.current.day].scenes[10].lists[1].events = events.events;
      state[state.current.day].scenes[13].lists[1].events = events.events;

      // Set event trailers up, each slot has it's own trailer data
      // this logic assumes that we have only one list per event trailer
      if (Object.keys(events.eventTrailers).length >= 4) {
        state[state.current.day].scenes[4].lists[1] = events.eventTrailers[1];
        state[state.current.day].scenes[4].duration = events.eventTrailers[1].duration;
        state[state.current.day].scenes[7].lists[1] = events.eventTrailers[2];
        state[state.current.day].scenes[7].duration = events.eventTrailers[2].duration;
        state[state.current.day].scenes[11].lists[1] = events.eventTrailers[3];
        state[state.current.day].scenes[11].duration = events.eventTrailers[3].duration;
        state[state.current.day].scenes[14].lists[1] = events.eventTrailers[4];
        state[state.current.day].scenes[14].duration = events.eventTrailers[4].duration;
      } else {
        console.log('not enough trailer data - no trailers loaded');
      }

      // Special Events
      state[state.current.day].scenes[2].event = events.specialEvents[1];
      state[state.current.day].scenes[9].event = events.specialEvents[2];
    }
  },
  actions: {
    fetchEvents({ commit }, { self })  {
      var endpoint = "https://navypier.org/wp-json/concierge/v1/today?api_key=Q4CaKY3zUn24djY6jVbr52VP";
      // var endpoint = "http://navypierdev.wpengine.com/wp-json/concierge/v1/today?api_key=Q4CaKY3zUn24djY6jVbr52VP";

      Vue.axios.get(endpoint)
      .then((response) => {
        commit("FETCH_EVENTS", response.data);
      })
      .catch((error => {
          console.log(error);
      }))
    }
  }
});