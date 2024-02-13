const todos = [
    {
      id:1, 
      grocery: ["milk", "egg","bread"]
    },
    {
      id:2, 
      gift:["lego","books"]
    }
  ]

//Push,adds a new element to the end of the array
const newItem = todos.push(
    {
        id:3, 
        gardening: ["repotting", "fertilze"]
    }
    );
 console.log(todos);

//Pop, removes the last element
const updatedArray = todos.pop();
console.log("The deleted element from the array")
console.log(updatedArray);
console.log("After deletion")
console.log(todos);

//unshift adds new element to the beginning of the array
const unshiftItem = todos.unshift(
    {
        id:0, 
        reading: ["The Perfect Son", "Scrum guide"]
    }
);
console.log("After unshift")
console.log(todos);

//shift removes the first element of the array
const shiftItem = todos.shift();
console.log("After shift")
console.log(todos);

//slice the array starting from the specified position
const plants = ["calathea", "rubber plant", "monstera", "olive", "pothos"]
console.log("Before slicing", plants);
const sliceItem = plants.slice(2);
console.log("After slicing", sliceItem);

//splice, removes  the array element from starting to the ending range 
const newPlants = ["calathea", "rubber plant", "monstera", "olive", "pothos"]
console.log("Before splicing", newPlants);
const spliceItem = newPlants.splice(0,2);
console.log("After splicing", spliceItem);

//sort
const housePlants = ["calathea", "rubber plant", "monstera", "olive", "pothos"]
console.log("Before sorting", housePlants);
const sortedArray = housePlants.sort();
console.log("After sorting", sortedArray);

//reverse
console.log("Before reversing", housePlants);
const reversedArray = housePlants.reverse();
console.log("After reversing", reversedArray);

//concat
const newPlant =["snake plant"]
console.log("Before concatenation", housePlants);
const concatArray = housePlants.concat(newPlant);
console.log("After concatenation", concatArray);

//join
const joinedArray = housePlants.join(" * ");
console.log("After join",joinedArray);

//indexOf(returns the index)
const arrayPlants = ["calathea", "rubber plant", "monstera", "olive", "pothos"];
const index = arrayPlants.indexOf("rubber plant", 0);
console.log("returns index of rubberplant",index);

//lastindexOf(returns the last index value)
const arrPlants = ["calathea", "rubber plant", "monstera", "olive", "pothos","rubber plant"];
const lastIndex = arrPlants.lastIndexOf("rubber plant");
console.log("returns index of rubberplant",lastIndex);

//includes
const includeArray = arrPlants.includes("calathea");
console.log("Whether calathea is included in the plant array or not", includeArray);

//copywithin(replaces the array element 1 with the content from element 3)
const copyArray = arrPlants.copyWithin(1,3);
console.log("After copying",copyArray);

//fill (replace all the elements with the same value)
const fillArray = arrPlants.fill("orchids");
console.log("After fill", fillArray);

//find(returns the first element found)
const newPlantArray = ["calathea", "rubber plant", "monstera", "olive", "pothos"];
const findResult = newPlantArray.filter(plant => plant.length > 8);
console.log("find() returns the first element found",findResult);

//filter
const filterResult = newPlantArray.filter(plant => plant.length > 7);
console.log("filter() returns all the element found",filterResult);

//keys
const arrayKeys = newPlantArray.keys();
console.log("The keys are");
for (let key of arrayKeys){
    console.log( key)
}

//from()
let newName = "ALAN";
const findArray = Array.from(newName);
console.log("New array created from a text", findArray);