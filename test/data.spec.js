require('../src/data.js');
const steam = require('../src/data/steam/steam.json');
//const filteredByAuthor = require('../test/mocks/filteredByAuthor.json');
const organizedByDate = require('../test/mocks/organizedByDate.json');
const organizedByTitle = require('../test/mocks/organizedByTitle.json');


describe('dataLovers', () => {
  it('Should be an object', () => {
    expect(typeof window.dataLovers).toBe('object');
  });
});

//Tests to make sure my functions are correct functions

describe('newsTemplate', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.newsTemplate).toBe('function');
  });
});

describe('dynamicSort', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.dynamicSort).toBe('function');
  });
});

describe('displayNewsByTitle', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.displayNewsByTitle).toBe('function');
  });

  it('Should organize the news by title, A to Z', () => {
    expect(window.dataLovers.displayNewsByTitle(steam.appnews.newsitems)).toEqual(organizedByTitle);
  });

});

describe('filterNewsByAuthor', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.filterNewsByAuthor).toBe('function');
  });

  // it('Should filter signed blogposts', () => {
  //   expect(window.dataLovers.filterNewsByAuthor(steam.appnews.newsitems)).toEqual(filteredByAuthor);
  // });

});

describe('displayNewsByDate', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.displayNewsByDate).toBe('function');
  });

  it('Should organize the news by oldest date', () => {
    expect(window.dataLovers.displayNewsByDate(steam.appnews.newsitems)).toEqual(organizedByDate);
  });

});

describe('calculateDate', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.calculateDate).toBe('function');
  });

  it("Should return a human readable date", () => {
      expect(window.dataLovers.calculateDate(1551290656)).toBe('27-2-2019');
  });
});
