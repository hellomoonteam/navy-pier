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
          name: 'branding1',
          template: 'video',
          template4: null,
          background: 'branding_1.mp4',
          duration: '33'
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
          name: 'welcome2',
          template: 'video',
          template4: null,
          background: 'welcome_2.mp4',
          duration: '61'
        },
        6: {
          name: 'branding2',
          template: 'video',
          template4: null,
          background: 'branding_2.mp4',
          duration: '33'
        },
        7: {
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
        8: {
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
        9: {
          name: 'welcome3',
          template: 'video',
          template4: null,
          background: 'welcome_3.mp4',
          duration: '61'
        },
        10: {
          name: 'branding3',
          template: 'video',
          template4: null,
          background: 'branding_3.mp4',
          duration: '33'
        },
        11: {
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
        12: {
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
        13: {
          name: 'welcome4',
          template: 'video',
          template4: null,
          background: 'welcome_4.mp4',
          duration: '61'
        },
        14: {
          name: 'branding4',
          template: 'video',
          template4: null,
          background: 'branding_4.mp4',
          duration: '33'
        },
        15: {
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
        16: {
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

      if (nextSceneId > sceneCount) {
        nextSceneId = nextSceneId - sceneCount;
      }

      if (state[state.current.day].scenes[nextSceneId].name == 'countdown') {
        var currentDate = new Date();

        // Figure out time difference
        var hours = state[state.current.day].scenes[nextSceneId].startHours - currentDate.getHours();
        var minutes = state[state.current.day].scenes[nextSceneId].startMinutes - currentDate.getMinutes();
        var seconds = 0 - currentDate.getSeconds();

        // Handle negative seconds and minutes
        if (seconds < 0) {
          seconds += 60;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes += 60;
          hours -= 1;
        }

        // If countdown time has passed or it's not the right day
        if (hours < 0) {
          nextSceneId += 1;
        }
      }

      // Loop Scene ID
      if (nextSceneId > sceneCount) {
        nextSceneId = nextSceneId - sceneCount;
      }

      return state[state.current.day].scenes[nextSceneId];
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
      state[state.current.day].scenes[7].lists[1].events = events.events;
      state[state.current.day].scenes[11].lists[1].events = events.events;
      state[state.current.day].scenes[15].lists[1].events = events.events;

      // Set event trailers up, each slot has it's own trailer data
      // this logic assumes that we have only one list per event trailer
      state[state.current.day].scenes[4].lists[1] = events.eventTrailers[1];
      state[state.current.day].scenes[4].duration = events.eventTrailers[1].duration;
      state[state.current.day].scenes[8].lists[1] = events.eventTrailers[2];
      state[state.current.day].scenes[8].duration = events.eventTrailers[2].duration;
      state[state.current.day].scenes[12].lists[1] = events.eventTrailers[3];
      state[state.current.day].scenes[12].duration = events.eventTrailers[3].duration;
      state[state.current.day].scenes[16].lists[1] = events.eventTrailers[4];
      state[state.current.day].scenes[16].duration = events.eventTrailers[4].duration;
    }
  },
  actions: {
    fetchEvents({ commit }, { self })  {
      // var endpoint = "https://navypier.org/wp-json/concierge/v1/today?api_key=Q4CaKY3zUn24djY6jVbr52VP";
      var endpoint = "http://navypierdev.wpengine.com/wp-json/concierge/v1/today?api_key=Q4CaKY3zUn24djY6jVbr52VP";

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