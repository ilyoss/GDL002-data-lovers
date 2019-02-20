require('../src/data.js');
const steam = require('../src/data/steam/steam.json');

//Test to make sure STEAM is an object
describe('STEAM', () => {
  it('Should be an object', () => {
    expect(typeof steam).toBe('object');
  });
});

//Tests to make sure my functions are correct functions
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
