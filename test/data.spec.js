require('../src/data.js');
require('../src/data/steam/steam.js');

// describe('STEAM', () => {
//   it('Should be an object', () => {
//     expect(typeof window.STEAM).toBe('object');
//   });
// });

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
});

describe('filterNewsByAuthor', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.filterNewsByAuthor).toBe('function');
  });

  // it("Should return a smaller array of data", () => {
  //     expect(window.dataLovers.filterNewsByAuthor).toBe(4);
  // });

});

describe('displayNewsByDate', () => {
  it('Should be a function', () => {
    expect(typeof window.dataLovers.displayNewsByDate).toBe('function');
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
