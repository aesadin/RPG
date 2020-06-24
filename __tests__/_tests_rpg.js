import { Dog } from '../src/rpg.js';

describe('Dog', () => {

  test('should create new dog player with 5 properties', () => {
    const dog = new Dog("Tookie", "69hp", "420", "Barbarian", "Terrier");
    expect(dog.name).toBe("Tookie");
    expect(dog.health).toBe("69hp");
    expect(dog.level).toBe("420");
    expect(dog.class).toBe("Barbarian");
    expect(dog.breed).toBe("Terrier");
  });
});