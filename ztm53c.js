const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't