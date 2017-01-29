var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var print = 0;
while (print <= 7){
console.log(ingredients[print]);
}
// Write a for loop that prints out the contents of ingredients:
for(var i = 0; i < ingredients.length; i++){
console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(var a = ingredients.length; a >= 0; a--){
console.log(ingredients[a]);
}