const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter;

//How would you fix this?
console.log('?', giveMeTheCharacterNOW());

console.log(character.getCharacter())