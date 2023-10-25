function capitalizeFirst(array, index = 0) {
    // add whatever parameters you deem necessary - good luck!
    if (index == array.length) return [];
    else {
        return [array[index][0].toUpperCase() + array[index].slice(1)].concat(capitalizeFirst(array, index + 1));
    }
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
