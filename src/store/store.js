import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current: {
      scene: 1,
      day: 'wednesday'
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
          startMinutes: '01',
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
          name: 'trailer2',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_2.mp4',
          duration: '48',
          lists: {
            1: {
              headline: 'LatiNxt presented by Sol',
              duration: '48',
              logistics: 'June 15-16, 2018',
              description: 'Celebrating the local, national and international artists who are connecting traditional Latin music with modern sounds.',
              sponsor: 'Presented by Sol',
              events: {
                1: {
                  title: 'Performances by Uproot Andy, Centavrvs, Zuzuka Poderosa, and Dolor Folktronico',
                  logistics: 'Friday, June 15, 2018 | 5:30 pm - 11:30 pm',
                },
                2: {
                  title: 'Miller Lite Beer Garden ',
                  logistics: 'Saturday, June 16, 2018 | 2:00 pm - 10:15 pm',
                  description: 'Performances by Dj Jigüe, Dat Garcia, DJ Kinky P, Future Rootz, Pachanga DJ’s, and Sandra Treviño',
                },
                3: {
                    title: 'Wave Wall Performance Platform',
                    logistics: 'Saturday, June 16, 2018 | 2:00 pm - 11:30 pm',
                    description: 'Performances by Bembona, La Misa Negra, King Coya and Queen Cholas, Boogat, ¡ESSO! Afrojam Funkbeat, Cedeño, and Ayana Contreras',
                },
                4: {
                    title: 'Miller Lite Beer Garden',
                    logistics: 'Saturday, June 16, 2018 | 3:15 pm - 7:15 pm',
                    description: 'Performances by Sonido Gallo Negro, Lido Pimienta and ÌFÉ, Lake Stage In Polk Bros Park'
                }
              }
            }
          }
        },
        10: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '00',
          startMinutes: '01',
        },
        11: {
          name: 'welcome3',
          template: 'video',
          template4: null,
          background: 'welcome_3.mp4',
          duration: '61'
        },
        12: {
          name: 'branding3',
          template: 'video',
          template4: null,
          background: 'branding_3.mp4',
          duration: '33'
        },
        13: {
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
        14: {
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
        15: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '00',
          startMinutes: '01',
        },
        16: {
          name: 'welcome4',
          template: 'video',
          template4: null,
          background: 'welcome_4.mp4',
          duration: '61'
        },
        17: {
          name: 'branding4',
          template: 'video',
          template4: null,
          background: 'branding_4.mp4',
          duration: '33'
        },
        18: {
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
        19: {
          name: 'trailer4',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_4.mp4',
          duration: '48',
          lists: {
            1: {
              headline: 'LatiNxt presented by Sol',
              duration: '48',
              logistics: 'June 15-16, 2018',
              description: 'Celebrating the local, national and international artists who are connecting traditional Latin music with modern sounds.',
              sponsor: 'Presented by Sol',
              events: {
                1: {
                  title: 'Performances by Uproot Andy, Centavrvs, Zuzuka Poderosa, and Dolor Folktronico',
                  logistics: 'Friday, June 15, 2018 | 5:30 pm - 11:30 pm',
                },
                2: {
                  title: 'Miller Lite Beer Garden',
                  logistics: 'Saturday, June 16, 2018 | 2:00 pm - 10:15 pm',
                  description: 'Performances by Dj Jigüe, Dat Garcia, DJ Kinky P, Future Rootz, Pachanga DJ’s, and Sandra Treviño',
                },
                3: {
                    title: 'Wave Wall Performance Platform',
                    logistics: 'Saturday, June 16, 2018 | 2:00 pm -11:30 pm',
                    description: 'Performances by Bembona, La Misa Negra, King Coya and Queen Cholas, Boogat, ¡ESSO! Afrojam Funkbeat, Cedeño, and Ayana Contreras',
                },
                4: {
                    title: 'Miller Lite Beer Garden',
                    logistics: 'Saturday, June 16, 2018 | 3:15 pm - 7:15 pm',
                    description: 'Performances by Sonido Gallo Negro, Lido Pimienta and ÌFÉ, Lake Stage In Polk Bros Park'
                }
              }
            }
          }
        },
        20: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '00',
          startMinutes: '01',
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
          // duration: '61'
          duration: '11'
        },
        2: {
          name: 'branding1',
          template: 'video',
          template4: null,
          background: 'branding_1.mp4',
          // duration: '33'
          duration: '13'
        },
        3: {
          name: 'program1',
          template: 'TemplateList',
          template4: null,
          background: 'program_1.mp4',
          // duration: '91',
          duration: '11',
          lists: {
            1: {
              headline: 'TODAY AT <br> NAVY PIER',
              // duration: '91',
              duration: '11',
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
          // duration: '48',
          duration: '8',
          lists: {
            1: {
              headline: 'WATER COLOR JAZZ SERIES',
              // duration: '48',
              duration: '8',
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
          name: 'trailer2',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_2.mp4',
          duration: '48',
          lists: {
            1: {
              headline: 'LatiNxt presented by Sol',
              duration: '48',
              logistics: 'June 15-16, 2018',
              description: 'Celebrating the local, national and international artists who are connecting traditional Latin music with modern sounds.',
              sponsor: 'Presented by Sol',
              events: {
                1: {
                  title: 'Performances by Uproot Andy, Centavrvs, Zuzuka Poderosa, and Dolor Folktronico',
                  logistics: 'Friday, June 15, 2018 | 5:30 pm - 11:30 pm',
                },
                2: {
                  title: 'Miller Lite Beer Garden ',
                  logistics: 'Saturday, June 16, 2018 | 2:00 pm - 10:15 pm',
                  description: 'Performances by Dj Jigüe, Dat Garcia, DJ Kinky P, Future Rootz, Pachanga DJ’s, and Sandra Treviño',
                },
                3: {
                    title: 'Wave Wall Performance Platform',
                    logistics: 'Saturday, June 16, 2018 | 2:00 pm - 11:30 pm',
                    description: 'Performances by Bembona, La Misa Negra, King Coya and Queen Cholas, Boogat, ¡ESSO! Afrojam Funkbeat, Cedeño, and Ayana Contreras',
                },
                4: {
                    title: 'Miller Lite Beer Garden',
                    logistics: 'Saturday, June 16, 2018 | 3:15 pm - 7:15 pm',
                    description: 'Performances by Sonido Gallo Negro, Lido Pimienta and ÌFÉ, Lake Stage In Polk Bros Park'
                }
              }
            }
          }
        },
        10: {
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
        11: {
          name: 'welcome3',
          template: 'video',
          template4: null,
          background: 'welcome_3.mp4',
          duration: '61'
        },
        12: {
          name: 'branding3',
          template: 'video',
          template4: null,
          background: 'branding_3.mp4',
          duration: '33'
        },
        13: {
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
        14: {
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
        15: {
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
        16: {
          name: 'welcome4',
          template: 'video',
          template4: null,
          background: 'welcome_4.mp4',
          duration: '61'
        },
        17: {
          name: 'branding4',
          template: 'video',
          template4: null,
          background: 'branding_4.mp4',
          duration: '33'
        },
        18: {
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
        19: {
          name: 'trailer4',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_4.mp4',
          duration: '48',
          lists: {
            1: {
              headline: 'LatiNxt presented by Sol',
              duration: '48',
              logistics: 'June 15-16, 2018',
              description: 'Celebrating the local, national and international artists who are connecting traditional Latin music with modern sounds.',
              sponsor: 'Presented by Sol',
              events: {
                1: {
                  title: 'Performances by Uproot Andy, Centavrvs, Zuzuka Poderosa, and Dolor Folktronico',
                  logistics: 'Friday, June 15, 2018 | 5:30 pm - 11:30 pm',
                },
                2: {
                  title: 'Miller Lite Beer Garden',
                  logistics: 'Saturday, June 16, 2018 | 2:00 pm - 10:15 pm',
                  description: 'Performances by Dj Jigüe, Dat Garcia, DJ Kinky P, Future Rootz, Pachanga DJ’s, and Sandra Treviño',
                },
                3: {
                    title: 'Wave Wall Performance Platform',
                    logistics: 'Saturday, June 16, 2018 | 2:00 pm -11:30 pm',
                    description: 'Performances by Bembona, La Misa Negra, King Coya and Queen Cholas, Boogat, ¡ESSO! Afrojam Funkbeat, Cedeño, and Ayana Contreras',
                },
                4: {
                    title: 'Miller Lite Beer Garden',
                    logistics: 'Saturday, June 16, 2018 | 3:15 pm - 7:15 pm',
                    description: 'Performances by Sonido Gallo Negro, Lido Pimienta and ÌFÉ, Lake Stage In Polk Bros Park'
                }
              }
            }
          }
        },
        20: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '21',
          startMinutes: '30',
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
          name: 'trailer2',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_2.mp4',
          duration: '48',
          lists: {
            1: {
              headline: 'LatiNxt presented by Sol',
              duration: '48',
              logistics: 'June 15-16, 2018',
              description: 'Celebrating the local, national and international artists who are connecting traditional Latin music with modern sounds.',
              sponsor: 'Presented by Sol',
              events: {
                1: {
                  title: 'Performances by Uproot Andy, Centavrvs, Zuzuka Poderosa, and Dolor Folktronico',
                  logistics: 'Friday, June 15, 2018 | 5:30 pm - 11:30 pm',
                },
                2: {
                  title: 'Miller Lite Beer Garden ',
                  logistics: 'Saturday, June 16, 2018 | 2:00 pm - 10:15 pm',
                  description: 'Performances by Dj Jigüe, Dat Garcia, DJ Kinky P, Future Rootz, Pachanga DJ’s, and Sandra Treviño',
                },
                3: {
                    title: 'Wave Wall Performance Platform',
                    logistics: 'Saturday, June 16, 2018 | 2:00 pm - 11:30 pm',
                    description: 'Performances by Bembona, La Misa Negra, King Coya and Queen Cholas, Boogat, ¡ESSO! Afrojam Funkbeat, Cedeño, and Ayana Contreras',
                },
                4: {
                    title: 'Miller Lite Beer Garden',
                    logistics: 'Saturday, June 16, 2018 | 3:15 pm - 7:15 pm',
                    description: 'Performances by Sonido Gallo Negro, Lido Pimienta and ÌFÉ, Lake Stage In Polk Bros Park'
                }
              }
            }
          }
        },
        10: {
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
        11: {
          name: 'welcome3',
          template: 'video',
          template4: null,
          background: 'welcome_3.mp4',
          duration: '61'
        },
        12: {
          name: 'branding3',
          template: 'video',
          template4: null,
          background: 'branding_3.mp4',
          duration: '33'
        },
        13: {
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
        14: {
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
        15: {
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
        16: {
          name: 'welcome4',
          template: 'video',
          template4: null,
          background: 'welcome_4.mp4',
          duration: '61'
        },
        17: {
          name: 'branding4',
          template: 'video',
          template4: null,
          background: 'branding_4.mp4',
          duration: '33'
        },
        18: {
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
        19: {
          name: 'trailer4',
          template: 'TrailerList',
          template4: null,
          background: 'trailer_4.mp4',
          duration: '48',
          lists: {
            1: {
              headline: 'LatiNxt presented by Sol',
              duration: '48',
              logistics: 'June 15-16, 2018',
              description: 'Celebrating the local, national and international artists who are connecting traditional Latin music with modern sounds.',
              sponsor: 'Presented by Sol',
              events: {
                1: {
                  title: 'Performances by Uproot Andy, Centavrvs, Zuzuka Poderosa, and Dolor Folktronico',
                  logistics: 'Friday, June 15, 2018 | 5:30 pm - 11:30 pm',
                },
                2: {
                  title: 'Miller Lite Beer Garden',
                  logistics: 'Saturday, June 16, 2018 | 2:00 pm - 10:15 pm',
                  description: 'Performances by Dj Jigüe, Dat Garcia, DJ Kinky P, Future Rootz, Pachanga DJ’s, and Sandra Treviño',
                },
                3: {
                    title: 'Wave Wall Performance Platform',
                    logistics: 'Saturday, June 16, 2018 | 2:00 pm -11:30 pm',
                    description: 'Performances by Bembona, La Misa Negra, King Coya and Queen Cholas, Boogat, ¡ESSO! Afrojam Funkbeat, Cedeño, and Ayana Contreras',
                },
                4: {
                    title: 'Miller Lite Beer Garden',
                    logistics: 'Saturday, June 16, 2018 | 3:15 pm - 7:15 pm',
                    description: 'Performances by Sonido Gallo Negro, Lido Pimienta and ÌFÉ, Lake Stage In Polk Bros Park'
                }
              }
            }
          }
        },
        20: {
          name: 'countdown',
          template: 'TemplateBlank',
          template2: 'TemplateFireworksTitleLeft',
          template3: 'TemplateFireworksTitleRight',
          template4: 'TemplateCountdown',
          background: 'countdown.mp4',
          duration: '30',
          startHours: '22',
          startMinutes: '15',
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
      console.log('setDay');
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
          console.log('event fetch failed');
          console.log(error);
      }))
    }
  }
});