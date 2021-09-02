import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import theracer2 from './img/the-racer2.jpg';
import goodtimes2 from './img/good-times2.jpg';
import athlete2 from './img/athlete2.png';

export const MovieState = () => {
  return [
    {
      title: 'the Athlete',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards:[
        {
          title: 'Truly A masterpiece',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate!',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate!',
        },
        {
          title: 'It\'s ok lmao.',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate!',
        },
      ]
    },

    {
      title: 'Good Times',
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: '/work/good-times',
      awards:[
        {
          title: 'Truly A masterpiece',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate!',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate!',
        },
        {
          title: 'It\'s ok lmao.',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate!',
        },
      ]
    },

    {
      title: 'the racer',
      mainImg: theracer,
      secondaryImg: theracer2,
      url: '/work/the-racer',
      awards:[
        {
          title: 'Fresh look on a brutal sport.',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate!',
        },
        {
          title: 'It\'s ok lmao.',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate!',
        },
      ]
    },
  ]
}