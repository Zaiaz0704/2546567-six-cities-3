import { CardType, RevierwType } from '../utils/type';

export const IS_AUTH = true;

export const CARDS: CardType[] = [
  {
    id: 1,
    img: 'img/apartment-01.jpg',
    pictures: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    description: {
      priceValue: 180,
      rating: 5,
      maxAdults: 2,
      placeCardType: 'Apartment',
      bedrooms: 3,
    },
    placeCardName: 'Nice, cozy, warm big bed apartment',
    isFavorite: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 5,
      },
    },
    premiumMark: true,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
    ],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 5,
    },
  },
  {
    id: 2,
    img: 'img/apartment-02.jpg',
    pictures: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    description: {
      priceValue: 180,
      rating: 5,
      maxAdults: 2,
      placeCardType: 'Apartment',
      bedrooms: 3,
    },
    placeCardName: 'Nice, cozy, warm big bed apartment',
    isFavorite: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 5,
      },
    },
    premiumMark: true,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
    ],
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 5,
    },
  },
  {
    id: 3,
    img: 'img/apartment-03.jpg',
    pictures: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    description: {
      priceValue: 180,
      rating: 5,
      maxAdults: 2,
      placeCardType: 'Apartment',
      bedrooms: 3,
    },
    placeCardName: 'Nice, cozy, warm big bed apartment',
    isFavorite: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 5,
      },
    },
    premiumMark: false,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
    ],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 5,
    },
  },
  {
    id: 4,
    img: 'img/apartment-01.jpg',
    pictures: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    description: {
      priceValue: 180,
      rating: 5,
      maxAdults: 2,
      placeCardType: 'Apartment',
      bedrooms: 3,
    },
    placeCardName: 'Nice, cozy, warm big bed apartment',
    isFavorite: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 5,
      },
    },
    premiumMark: true,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
    ],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 5,
    },
  },
  {
    id: 5,
    img: 'img/apartment-01.jpg',
    pictures: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    description: {
      priceValue: 120,
      rating: 4,
      placeCardType: 'Apartment',
      maxAdults: 4,
      bedrooms: 2,
    },
    placeCardName: 'Beautiful &amp; luxurious apartment at great location',
    isFavorite: false,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 5,
      },
    },
    premiumMark: true,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
    ],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 5,
    },
  },

  {
    id: 6,
    img: 'img/apartment-01.jpg',
    pictures: ['img/room.jpg', 'img/studio-01.jpg'],
    description: {
      priceValue: 80,
      rating: 4,
      maxAdults: 1,
      placeCardType: 'Room',
      bedrooms: 1,
    },
    placeCardName: 'Wood and stone place',
    isFavorite: true,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 5,
      },
    },
    premiumMark: false,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating'],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 5,
    },
  },
  {
    id: 7,
    img: 'img/apartment-02.jpg',
    pictures: ['img/room.jpg', 'img/apartment-01.jpg'],
    description: {
      priceValue: 132,
      rating: 4,
      maxAdults: 3,
      placeCardType: 'Apartment',
      bedrooms: 2,
    },
    placeCardName: 'Canal View Prinsengracht',
    isFavorite: false,
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 5,
      },
    },
    premiumMark: false,
    goods: ['Wi-Fi', 'Towels', 'Heating', 'Coffee machine', 'Baby seat'],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },

  {
    id: 8,
    img: 'img/room.jpg',
    pictures: ['img/room.jpg', 'img/studio-01.jpg'],
    description: {
      priceValue: 90,
      rating: 4,
      maxAdults: 1,
      placeCardType: 'Room',
      bedrooms: 1,
    },
    placeCardName: 'Wood and stone place',
    isFavorite: true,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 5,
      },
    },
    premiumMark: false,
    goods: [
      'Wi-Fi',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },

  {
    id: 9,
    img: 'img/room.jpg',
    pictures: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    description: {
      priceValue: 100,
      rating: 4,
      maxAdults: 2,
      placeCardType: 'Room',
      bedrooms: 2,
    },
    placeCardName: 'Wood and stone place',
    isFavorite: true,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 5,
      },
    },
    premiumMark: false,
    goods: [
      'Wi-Fi',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
    ],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
];

export const getRaiting = (starsCount: number) => {
  const percents = starsCount * 20;
  return `${percents}%`;
};

export const GOODS: string[] = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge',
];

export const REVIRWS_MOCK: RevierwType[] = [
  {
    id: 0,
    name: 'Max',
    raiting: 4,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    id: 1,
    name: 'Jack',
    raiting: 5,
    text: 'everything is beautiful. I recommend',
  },
];
