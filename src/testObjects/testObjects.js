const clipItem = {
  id: 'Vy98OTYjN48',
  snippet: {
    publishedAt: '2019-02-17T11:11:32.000Z',
    title: 'The Red Fire Truck with The Police Car 2 | Emergency Cars Cartoon for kids',
    description: "Watch more full episodes of car cartoons at - https://seeziskids.com/en/car-stories-non-stop/ \r\n\r\nShare this video: https://www.youtube.com/watch?v=Vy98OTYjN48 https://www.youtube.com/watch?v=2mhdhgtx-94\r\n\r\nEnjoy watching, don't forget to subscribe: https://goo.gl/sie1cM\r\n\r\nOur channels you may also like:\r\nFunny Cars TV: https://goo.gl/njWTm4\r\nMonster Truck TV: https://goo.gl/uuwsnG\r\nEmergency Cars TV: https://goo.gl/XwG76x\r\nCartoons for Children: https://goo.gl/xr0XA5\r\nCars & Trains Cartoons: https://goo.gl/z6UoDS\r\nWorld of Cars - Cartoons for kids: https://goo.gl/gjqKEH\r\nFast & Funny Cars: https://goo.gl/GuAR2F\r\nCar Planet: https://goo.gl/QzUxKF\r\nBip Bip Cars TV: https://goo.gl/Gtai77\r\nLittle Cars TV: https://goo.gl/QYbCjt\r\nChi Chi Puh - Cars Cartoons: https://goo.gl/K8otBh\r\n6s Cars & Trucks Town: https://goo.gl/hGNzWL\r\nCars & Trucks Stories: https://goo.gl/lBXatl\r\nCars Team Cartoons: https://goo.gl/PKaCkQ",
    thumbnails: {
      medium: {
        url: 'https://i.ytimg.com/vi/Vy98OTYjN48/mqdefault.jpg',
        width: 320,
        height: 180,
      },
    },
    channelTitle: 'Tiki Taki Cars',
  },
  statistics: {
    viewCount: '5303776',
    dislikeCount: '98563',
    likeCount: '768951',
  },
};

const clipInfo = {
  items: [
    clipItem,
    clipItem,
    clipItem,
    clipItem,
    clipItem,
    clipItem,
  ],
};

const transformItem = {
  title: 'The Red Fire Truck with The Police Car 2 | Emergency Cars Cartoon for kids',
  description: 'Watch more full episodes of car cartoons at - https://seeziskids.com/en/car-stories-non-stop/ \r\n\r\nSh...',
  viewCount: '5303776',
  dislikeCount: '98563',
  likeCount: '768951',
  channelTitle: 'Tiki Taki Cars',
  publishedAt: '2019-02-17',
  imgUrl: 'https://i.ytimg.com/vi/Vy98OTYjN48/mqdefault.jpg',
  id: 'Vy98OTYjN48',
};

const transformInfo = [
  transformItem,
  transformItem,
  transformItem,
  transformItem,
  transformItem,
  transformItem,
];

const context = {
  view: {
    buttonContainer: document.createElement('div'),
    slider: document.createElement('div'),
    screenCount: 0,
  },
  sliderStatus: true,
};

const event = {
  changedTouches: [1, 2, 3],
  pageX: 100,
  preventDefault() {
    return true;
  },
};

const emptyEvent = {
  pageX: 100,
};

export default {
  clipItem,
  clipInfo,
  transformInfo,
  transformItem,
  context,
  event,
  emptyEvent,
};
