import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current: {
      scene: 1,
    },
    scenes: {
      1: {
        template: 'video',
        background: 'bg1.mp4',
        duration: '10'
      },
      2: {
        template: 'video',
        background: 'bg2.mp4',
        duration: '10'
      },
      3: {
        name: 'events',
        template: 'TemplateList',
        background: 'bg3.mp4',
        myimage: 'event_list_reference.png',
        duration: '10',
        lists: {
          1: {
            headline: 'TODAY AT <br> NAVY PIER',
            duration: '10',
            events: {
              1: {
                title: 'Chicago World Music Festival and World Dumpling Festival',
                subtitle: 'Presented by Fifth Third Bank',
                logistics: '5:30 - 7:45 PM | South Dock',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> Aenean commodo ligula eget dolor. Aenan massa.',
                logo: 'fifth_third_logo.png'
              },
              2: {
                title: 'One of the Medium Titles Example',
                subtitle: 'Presented by Fifth Third Bank',
                logistics: '5:30 - 7:45 PM | South Dock',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> Aenean commodo ligula eget dolor. Aenan massa.'
              },
              3: {
                title: 'Short Title',
                subtitle: 'Presented by Fifth Third Bank',
                logistics: '5:30 - 7:45 PM | South Dock',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> Aenean commodo ligula eget dolor. Aenan massa.'
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
    }
  }
});