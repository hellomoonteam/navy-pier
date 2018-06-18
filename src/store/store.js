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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
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
              headline: 'WATER COLOR JAZZ SERIES',
              duration: '48',
              logistics: 'Fridays and Select Dates July 6 – August 24, 2018',
              description: 'Join us all summer long for free live jazz, presented in partnership with the Jazz Institute of Chicago.',
              events: {
                1: {
                  title: 'Lowdown Brass Band',
                  logistics: 'Friday, July 6, 2018, 6:30 pm - 8:30 pm',
                  description: 'Lake Stage in Polk Bros Park',
                },
                2: {
                  title: 'NextGenJazz Emerging Artists Project',
                  logistics: '5:40 PM',
                  description: 'Leads the audience procession down to the South Dock',
                },
                3: {
                    title: 'Chicago Latin Jazz Festival',
                    logistics: 'Sunday, July 15, 2018, 3 pm - 6 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                4: {
                    title: 'Chicago Jazz Orchestra',
                    logistics: 'Friday, July 20, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                5: {
                    title: 'Lettin’ the Good Times Float',
                    logistics: 'Saturday, July 21, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                6: {
                    title: 'Victor Goines Quartet',
                    logistics: 'Friday, August 3, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                7: {
                    title: 'Let Freedom Sing',
                    logistics: 'Friday, August 10, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                8: {
                    title: 'Marquis Hill’s Blacktet',
                    logistics: 'Friday, August 17, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                9: {
                    title: 'Chicago Afrobeat Project',
                    logistics: 'Friday, August 24, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
              }
            }
          }
        },
        5: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '00',
          startMinutes: '00',
        },
        6: {
          name: 'welcome2',
          template: 'video',
          template4: null,
          background: 'welcome_2.mp4',
          duration: '61'
        },
        7: {
          name: 'branding2',
          template: 'video',
          template4: null,
          background: 'branding_2.mp4',
          duration: '33'
        },
        8: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
                }
              }
            }
          }
        },
        9: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '00',
          startMinutes: '00',
        },
        10: {
          name: 'welcome3',
          template: 'video',
          template4: null,
          background: 'welcome_3.mp4',
          duration: '61'
        },
        11: {
          name: 'branding3',
          template: 'video',
          template4: null,
          background: 'branding_3.mp4',
          duration: '33'
        },
        12: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
                }
              }
            }
          }
        },
        13: {
          name: 'trailer3',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_3.mp4',
          duration: '48',
          lists: {
            1: {
              headline: 'Wiggleworms',
              duration: '48',
              logistics: 'June 15-16, 2018',
              description: 'Old Town School of Folk Music’s celebrated early childhood music program welcomes kids and families to a musical world!',
              events: {
                1: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, June 20, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                2: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, June 22, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                3: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, June 27, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                4: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, June 29, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                5: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 6, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                6: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, July 11, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                7: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 13, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                8: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, July 18, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                9: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 20, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                10: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, July 25, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                11: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 27, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                }
              }
            }
          }
        },
        14: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '00',
          startMinutes: '00',
        },
        15: {
          name: 'welcome4',
          template: 'video',
          template4: null,
          background: 'welcome_4.mp4',
          duration: '61'
        },
        16: {
          name: 'branding4',
          template: 'video',
          template4: null,
          background: 'branding_4.mp4',
          duration: '33'
        },
        17: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
                }
              }
            }
          }
        },
        18: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '00',
          startMinutes: '00',
        },
        19: {
          name: 'welcome5',
          template: 'video',
          template4: null,
          background: 'welcome_5.mp4',
          duration: '61'
        }
      }
    },
    wednesday: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
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
              headline: 'WATER COLOR JAZZ SERIES',
              duration: '48',
              logistics: 'Fridays and Select Dates July 6 – August 24, 2018',
              description: 'Join us all summer long for free live jazz, presented in partnership with the Jazz Institute of Chicago.',
              events: {
                1: {
                  title: 'Lowdown Brass Band',
                  logistics: 'Friday, July 6, 2018, 6:30 pm - 8:30 pm',
                  description: 'Lake Stage in Polk Bros Park',
                },
                2: {
                  title: 'NextGenJazz Emerging Artists Project',
                  logistics: '5:40 PM',
                  description: 'Leads the audience procession down to the South Dock',
                },
                3: {
                    title: 'Chicago Latin Jazz Festival',
                    logistics: 'Sunday, July 15, 2018, 3 pm - 6 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                4: {
                    title: 'Chicago Jazz Orchestra',
                    logistics: 'Friday, July 20, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                5: {
                    title: 'Lettin’ the Good Times Float',
                    logistics: 'Saturday, July 21, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                6: {
                    title: 'Victor Goines Quartet',
                    logistics: 'Friday, August 3, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                7: {
                    title: 'Let Freedom Sing',
                    logistics: 'Friday, August 10, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                8: {
                    title: 'Marquis Hill’s Blacktet',
                    logistics: 'Friday, August 17, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                9: {
                    title: 'Chicago Afrobeat Project',
                    logistics: 'Friday, August 24, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
              }
            }
          }
        },
        5: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '21',
          startMinutes: '30',
        },
        6: {
          name: 'welcome2',
          template: 'video',
          template4: null,
          background: 'welcome_2.mp4',
          duration: '61'
        },
        7: {
          name: 'branding2',
          template: 'video',
          template4: null,
          background: 'branding_2.mp4',
          duration: '33'
        },
        8: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
                }
              }
            }
          }
        },
        9: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '21',
          startMinutes: '30',
        },
        10: {
          name: 'welcome3',
          template: 'video',
          template4: null,
          background: 'welcome_3.mp4',
          duration: '61'
        },
        11: {
          name: 'branding3',
          template: 'video',
          template4: null,
          background: 'branding_3.mp4',
          duration: '33'
        },
        12: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
                }
              }
            }
          }
        },
        13: {
          name: 'trailer3',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_3.mp4',
          duration: '48',
          lists: {
            1: {
              headline: 'Wiggleworms',
              duration: '48',
              logistics: 'June 15-16, 2018',
              description: 'Old Town School of Folk Music’s celebrated early childhood music program welcomes kids and families to a musical world!',
              events: {
                1: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, June 20, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                2: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, June 22, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                3: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, June 27, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                4: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, June 29, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                5: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 6, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                6: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, July 11, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                7: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 13, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                8: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, July 18, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                9: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 20, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                10: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, July 25, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                11: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 27, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                }
              }
            }
          }
        },
        14: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '21',
          startMinutes: '30',
        },
        15: {
          name: 'welcome4',
          template: 'video',
          template4: null,
          background: 'welcome_4.mp4',
          duration: '61'
        },
        16: {
          name: 'branding4',
          template: 'video',
          template4: null,
          background: 'branding_4.mp4',
          duration: '33'
        },
        17: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
                }
              }
            }
          }
        },
        18: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '21',
          startMinutes: '30',
        },
        19: {
          name: 'welcome5',
          template: 'video',
          template4: null,
          background: 'welcome_5.mp4',
          duration: '61'
        }
      }
    },
    saturday: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
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
              headline: 'WATER COLOR JAZZ SERIES',
              duration: '48',
              logistics: 'Fridays and Select Dates July 6 – August 24, 2018',
              description: 'Join us all summer long for free live jazz, presented in partnership with the Jazz Institute of Chicago.',
              events: {
                1: {
                  title: 'Lowdown Brass Band',
                  logistics: 'Friday, July 6, 2018, 6:30 pm - 8:30 pm',
                  description: 'Lake Stage in Polk Bros Park',
                },
                2: {
                  title: 'NextGenJazz Emerging Artists Project',
                  logistics: '5:40 PM',
                  description: 'Leads the audience procession down to the South Dock',
                },
                3: {
                    title: 'Chicago Latin Jazz Festival',
                    logistics: 'Sunday, July 15, 2018, 3 pm - 6 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                4: {
                    title: 'Chicago Jazz Orchestra',
                    logistics: 'Friday, July 20, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                5: {
                    title: 'Lettin’ the Good Times Float',
                    logistics: 'Saturday, July 21, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                6: {
                    title: 'Victor Goines Quartet',
                    logistics: 'Friday, August 3, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                7: {
                    title: 'Let Freedom Sing',
                    logistics: 'Friday, August 10, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                8: {
                    title: 'Marquis Hill’s Blacktet',
                    logistics: 'Friday, August 17, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
                9: {
                    title: 'Chicago Afrobeat Project',
                    logistics: 'Friday, August 24, 2018, 6:30 pm - 8:30 pm',
                    description: 'Lake Stage in Polk Bros Park'
                },
              }
            }
          }
        },
        5: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '22',
          startMinutes: '15',
        },
        6: {
          name: 'welcome2',
          template: 'video',
          template4: null,
          background: 'welcome_2.mp4',
          duration: '61'
        },
        7: {
          name: 'branding2',
          template: 'video',
          template4: null,
          background: 'branding_2.mp4',
          duration: '33'
        },
        8: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
                }
              }
            }
          }
        },
        9: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '22',
          startMinutes: '15',
        },
        10: {
          name: 'welcome3',
          template: 'video',
          template4: null,
          background: 'welcome_3.mp4',
          duration: '61'
        },
        11: {
          name: 'branding3',
          template: 'video',
          template4: null,
          background: 'branding_3.mp4',
          duration: '33'
        },
        12: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
                }
              }
            }
          }
        },
        13: {
          name: 'trailer3',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_3.mp4',
          duration: '48',
          lists: {
            1: {
              headline: 'Wiggleworms',
              duration: '48',
              logistics: 'June 15-16, 2018',
              description: 'Old Town School of Folk Music’s celebrated early childhood music program welcomes kids and families to a musical world!',
              events: {
                1: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, June 20, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                2: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, June 22, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                3: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, June 27, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                4: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, June 29, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                5: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 6, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                6: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, July 11, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                7: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 13, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                8: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, July 18, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                9: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 20, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                10: {
                  title: 'Wiggleworms',
                  logistics: 'Wednesday, July 25, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                },
                11: {
                  title: 'Wiggleworms',
                  logistics: 'Friday, July 27, 2018 | 10:00 am - 11:45 am',
                  description: 'City Stage In Polk Bros Park'
                }
              }
            }
          }
        },
        14: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '22',
          startMinutes: '15',
        },
        15: {
          name: 'welcome4',
          template: 'video',
          template4: null,
          background: 'welcome_4.mp4',
          duration: '61'
        },
        16: {
          name: 'branding4',
          template: 'video',
          template4: null,
          background: 'branding_4.mp4',
          duration: '33'
        },
        17: {
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
                  title: 'Chicago World Music Festival and World Dumpling Festival',
                  subtitle: 'Presented by Fifth Third Bank',
                  logistics: '5:30 - 7:45 PM | South Dock',
                  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenan massa.',
                  logo: 'fifth_third_logo.png'
                }
              }
            }
          }
        },
        18: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '22',
          startMinutes: '15',
        },
        19: {
          name: 'welcome5',
          template: 'video',
          template4: null,
          background: 'welcome_5.mp4',
          duration: '61'
        }
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
      state[state.current.day].scenes[3].lists[1].events = events.events;
      state[state.current.day].scenes[8].lists[1].events = events.events;
      state[state.current.day].scenes[13].lists[1].events = events.events;
      state[state.current.day].scenes[18].lists[1].events = events.events;
    }
  },
  actions: {
    fetchEvents({ commit }, { self })  {
      var endpoint = "https://navypier.org/wp-json/concierge/v1/today?api_key=Q4CaKY3zUn24djY6jVbr52VP";

      Vue.axios.get(endpoint)
      .then((response) => {
        console.log('events fetched');
        commit("FETCH_EVENTS", response.data);
      })
      .catch((error => {
          console.log(error);
      }))
    }
  }
});