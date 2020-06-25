import { CharacterType } from '../src/rpg.js';

describe('CharacterType', () => {

  test('should create new character object with all properties', () => {
    const dog = new CharacterType("Dog", 0, 50, 5);
    expect(dog.playerType).toBe("Dog");
    expect(dog.level).toBe(0);
    expect(dog.health).toBe(50);
    expect(dog.strength).toBe(5)

  });

});
