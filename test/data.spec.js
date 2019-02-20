require('../src/data.js');
const steam = require('../src/data/steam/steam.json');

describe('STEAM', () => {
  it('Should be an object', () => {
    expect(typeof steam).toBe('object');
  });
});

describe('getTitles', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.getTitles).toBe('function');
  });
});

describe('getAuthors', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.getAuthors).toBe('function');
  });
});

describe('getDate', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.getDate).toBe('function');
  });
});

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });
//
//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
