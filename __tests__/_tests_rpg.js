import { Dog } from '../src/rpg.js';

describe('Dog', () => {

  test('should create new dog player with 5 properties', () => {
    const dog = new Dog("Tookie", "100hp", "1", "Barbarian", ["Terrier"]);
    expect(dog.name).toBe("Tookie");
    expect(dog.health).toBe("100hp");
    expect(dog.level).toBe("1");
    expect(dog.charClass).toBe("Barbarian");
    expect(dog.breed[0]).toBe("Terrier");
  });
});

