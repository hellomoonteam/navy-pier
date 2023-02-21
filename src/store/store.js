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
          background: 'welcome_1.mp4',
          duration: '61'
        },
        2: {
          name: 'event1',
          template: 'TemplateEvent',
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
          background: 'branding_2.mp4',
          duration: '33'
        },
        6: {
          name: 'program2',
          template: 'TemplateList',
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
          background: 'welcome_3.mp4',
          duration: '61'
        },
        9: {
          name: 'event2',
          template: 'TemplateEvent',
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
          background: 'branding_4.mp4',
          duration: '33'
        },
        13: {
          name: 'program4',
          template: 'TemplateList',
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
      var nextSceneId = state.current.scene + 1;

      // Event Trailer Check (some event trailers are disabled)
      if (state[state.current.day].scenes[nextSceneId]) {
        if (state[state.current.day].scenes[nextSceneId].template == 'TrailerList') {
          if (state[state.current.day].scenes[nextSceneId].lists[1].display != true) {
            nextSceneId += 1;
          }
        } else if (state[state.current.day].scenes[nextSceneId].template == 'TemplateEvent') {
          if (state[state.current.day].scenes[nextSceneId].event.display != true) {
            nextSceneId += 1;
          }
        }
      }

      // Loop Scene ID
      if (nextSceneId > sceneCount) {
        nextSceneId = nextSceneId - sceneCount;
      }

      return state[state.current.day].scenes[nextSceneId];
    },
    skipNextScene: state => {
      var sceneCount = Object.keys(state[state.current.day].scenes).length;
      var nextSceneId = state.current.scene + 1;
      var skipScene = false;

      // Event Trailer Check (some event trailers are disabled)
      if (state[state.current.day].scenes[nextSceneId]) {
        if (state[state.current.day].scenes[nextSceneId].template == 'TrailerList') {
          if (state[state.current.day].scenes[nextSceneId].lists[1].display === false) {
            skipScene = true;
          }
        } else if (state[state.current.day].scenes[nextSceneId].template == 'TemplateEvent') {
          if (state[state.current.day].scenes[nextSceneId].event.display === false) {
            skipScene = true;
          }
        }
      }
      
      if (nextSceneId > sceneCount) {
        nextSceneId = nextSceneId - sceneCount;
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

      // TODAY
      // A single event list repeats
      state[state.current.day].scenes[3].lists[1].events = events.today;
      state[state.current.day].scenes[6].lists[1].events = events.today;
      state[state.current.day].scenes[10].lists[1].events = events.today;
      state[state.current.day].scenes[13].lists[1].events = events.today;

      // TRAILERS
      // Set event trailers up, each slot has it's own trailer data
      // this logic assumes that we have only one list per event trailer
      if (Object.keys(events.trailers).length >= 4) {
        state[state.current.day].scenes[4].lists[1] = events.trailers[0];
        state[state.current.day].scenes[4].duration = events.trailers[0].duration;
        state[state.current.day].scenes[7].lists[1] = events.trailers[1];
        state[state.current.day].scenes[7].duration = events.trailers[1].duration;
        state[state.current.day].scenes[11].lists[1] = events.trailers[3];
        state[state.current.day].scenes[11].duration = events.trailers[3].duration;
        state[state.current.day].scenes[14].lists[1] = events.trailers[4];
        state[state.current.day].scenes[14].duration = events.trailers[4].duration;
      } else {
        console.log('not enough trailer data - no trailers loaded');
      }

      // SPECIAL EVENTS
      state[state.current.day].scenes[2].event = events.special[0];
      state[state.current.day].scenes[9].event = events.special[1];
    }
  },
  actions: {
    fetchEvents({ commit }, { self })  {
      var endpoint = "https://navypier.org/wp-json/concierge/v2/special-events-group/";

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