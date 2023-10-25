function stringifyNumbers(anObject) {

    for (const property in anObject) {
        if (typeof anObject[property] === "object") {
            stringifyNumbers(anObject[property]);
        }
        else {
            if (typeof anObject[property] === "number") {
                anObject[property] = String(anObject[property]);
            }
        }
    }
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
            ale: {
                num:{
                    que:{
                        subidon:{
                            que:{
                                momento:{
                                    ideal:99
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(obj);
stringifyNumbers(obj);
console.log(obj);

/*

Write a function called stringifyNumbers which takes in an object and 
finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!


/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/