const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      for(var i = 0; i < starWarsNames.length; i++){
        expect(starWarsNames[i]).toMatch(/.+/);
      }
    });

    test('should contain Luke Skywalker', () => {
      expect(starWars.all).toContain('Luke Skywalker');
    });

    test('should not contain Ben Quadinaros', () => {
      expect(starWars.all).not.toContain('Ben Quadinaros');
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      let random = Math.floor(Math.random() * Math.floor(starWars.all.length));
      expect(starWars.all[random]);
    });

    test('should return an array of random items if passed a number', (entry) => {
      let list = [];
      if(parseInt(entry, 10)){
        for(let i = 0; i < starWars.all.length; i++) {
          let random = Math.floor(Math.random() * Math.floor(starWars.all.length));
          list.push(starWars.all[random]);
          expect(list[i]).toMatch(starWars.all[random]);
        }
      }
    });
  });
});
