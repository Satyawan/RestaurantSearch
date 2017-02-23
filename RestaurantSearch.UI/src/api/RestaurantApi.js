import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const restaurants = [
  {
    Name: 'A',
    Zip: '1111',
    Address: 'A1'
  },
  {
     Name: 'B',
    Zip: '1111',
    Address: 'B1'
  },
  {
    Name: 'C',
    Zip: '1111',
    Address: 'C1'
  },
  {
     Name: 'D',
    Zip: '1111',
    Address: 'D1'
  }
];

class RestaurantApi {
  static getAllRestaurants() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], restaurants));
      }, delay);
    });
  }

  static getRestaurantsByZip(zip) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], restaurants));
      }, delay);
    });
  }

  
}

export default RestaurantApi;