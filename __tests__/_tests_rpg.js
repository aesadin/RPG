import { CharacterType } from '../src/rpg.js';
import {Intruder } from '../src/rpg.js';

describe('CharacterType class', () => {

  test('should create new character object with all properties', () => {
    const dog = new CharacterType("Dog", 0, 50, 5);
    expect(dog.playerType).toBe("Dog");
    expect(dog.level).toBe(0);
    expect(dog.health).toBe(50);
    expect(dog.strength).toBe(5)

  });

  test('should increase health by 10 if character drinks potion', () => {
    const dog = new CharacterType("Dog", 0, 60, 5);
    dog.healthy();
    expect(dog.health).toEqual(60);
  })
  
  test("should lower health by five for every hit", () => {
    const dog = new CharacterType("Dog", 0, 45, 5);
    dog.damage();
    expect(dog.health).toEqual(45);
  });

  test("determine loser", () => {
    const dog = new CharacterType("Dog", 0, 0, 5);
    dog.loser();
    expect(dog.health).toEqual(0);
  });
});

describe('Intruder class', () => {

  test('should create new Intruder with all properties', () => {
    const intruder = new Intruder(0, 50);
    expect(intruder.level).toBe(0);
    expect(intruder.health).toBe(50);
  });
});

