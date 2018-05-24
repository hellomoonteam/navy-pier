import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current: {
      scene: 4,
    },
    scenes: {
      1: {
        template: 'video',
        template4: 'TemplateCountdown',
        background: 'bg2.mp4',
        duration: '10'
      },
      2: {
        template: 'video',
        template4: null,
        background: 'bg3.mp4',
        duration: '7'
      },
      3: {
        name: 'events',
        template: 'TemplateList',
        template4: null,
        background: 'bg1.mp4',
        duration: '20',
        lists: {
          1: {
            headline: 'TODAY AT <br> NAVY PIER',
            duration: '20',
            events: {
              1: {
                title: 'Chicago World Music Festival and World Dumpling Festival',
                subtitle: 'Presented by Fifth Third Bank',
                logistics: '5:30 - 7:45 PM | South Dock',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                logo: 'fifth_third_logo.png'
              },
              2: {
                title: 'One of the Medium Titles Example',
                subtitle: 'Presented by Fifth Third Bank',
                logistics: '5:30 - 7:45 PM | South Dock',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.'
              },
              3: {
                title: 'Short Title',
                subtitle: 'Presented by Fifth Third Bank',
                logistics: '5:30 - 7:45 PM | South Dock',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.'
              },
              4: {
                title: 'Chicago Lake Front Festival',
                subtitle: 'Presented by Fifth Third Bank',
                logistics: '5:30 - 7:45 PM | South Dock',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                logo: 'fifth_third_logo.png'
              },
              5: {
                title: 'Another Title Title',
                subtitle: 'Presented by Fifth Third Bank',
                logistics: '5:30 - 7:45 PM | South Dock',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.'
              },
            }
          }
        }
      },
      4: {
        name: 'trailer',
        template: 'TemplateList',
        template4: null,
        background: 'bg4.mp4',
        duration: '20',
        lists: {
          1: {
            headline: 'WATER COLOR JAZZ SERIES',
            duration: '20',
            logistics: 'Fridays and Select Dates July 6 – August 24, 2018',
            description: 'Join us all summer long for free live jazz, presented in partnership with the Jazz Institute of Chicago.',
            events: {
              1: {
                title: 'FOWARD MOMENTUM CHICAGO',
                logistics: '5:30 PM',
                description: 'Fountain at Polk Bros Park',
              },
              2: {
                title: 'CHICAGO SAMBA',
                logistics: '5:40 PM',
                description: 'Leads the audience procession down to the South Dock',
              },
              3: {
                title: 'MUNTU DANCE',
                logistics: '5:55 PM',
                description: 'Theater of Chicago on the East performance platform',
              },
              4: {
                title: 'ANOTHER DANCE EVENT',
                logistics: '6:00 PM',
                description: 'Fountain at Polk Bros Park',
              },
              5: {
                title: 'SHORT TITLE',
                logistics: '6:40 PM',
                description: 'Leads the audience procession down to the South Dock',
              },
              6: {
                title: 'FINAL EVENT',
                logistics: '6:55 PM',
                description: 'Theater of Chicago on the East performance platform',
              }
            }
          }
        }
      }
    }
  },
  getters: {
    currentScene: state => {
      return state.current.scene;
    },
    sceneCount: state => {
      return Object.keys(state.scenes).length;
    },
    activeScene: state => {
      return state.scenes[state.current.scene];
    },
    nextScene: state => {
      var sceneCount = Object.keys(state.scenes).length;
      var nextScene = state.current.scene + 1;
      if (nextScene > sceneCount) {
        nextScene = 1;
      }
      return state.scenes[nextScene];
    }
  },
  mutations: {
    setScene: (state, payload) => {
      state.current.scene = payload;
    },
    FETCH_EVENTS(state, events) {
      state.scenes[3].lists[1].events = events.events;
      console.log('fetch data');
      console.log(events.events);
    }
  },
  actions: {
    fetchEvents({ commit }, { self })  {
      var endpoint = "https://navypier.org/wp-json/concierge/v1/today?api_key=Q4CaKY3zUn24djY6jVbr52VP";

      Vue.axios.get(endpoint)
      .then((response) => {
        commit("FETCH_EVENTS", response.data);
      })
      .catch((error => {
          console.log(error.statusText)
      }))
    }
  }
});