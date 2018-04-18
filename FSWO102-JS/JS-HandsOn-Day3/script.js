//In this project, we will be building a Family Tree.
//You will be creating a class for grandparents that includes properties:
//Hair Color, Eye Color, and Vertical. Hair Color and Eye Color can be strings,
//but Vertical should be a method that display how high the person can jump in
//the console.
/*
You will need at least three generations: Grandparents, Parents, and Children
This should be built using classes for the Grandparents, each following
Generation should inherent from the generation before them all the up to
grandparents.
Your objects should be instantiate and added to an array.
Loop through said array and console log each individuals vertical in the
console. Ex: "Grandma can jump 22 inches."
*/
class Grandparents {
  set hairColor(hair){
    this._hairColor = hair;
  }
  get hairColor(){
    return this._hairColor;
  }
  set eyeColor(eyes){
    this._eyeColor = eyes;
  }
  get eyeColor(){
    return this._eyeColor;
  }
  set vertical(jump){
    this._vertical = jump;
  }
  get vertical(){
    return this._vertical;
  }
}

let verticalJump = new Grandparents();
    verticalJump.vertical = 22;

console.log(verticalJump.vertical);
