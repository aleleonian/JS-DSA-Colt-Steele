function collectStrings(obj) {

    let strings = [];

    function doCollect(anObject) {
        for (const property in anObject) {
            const currentProperty = anObject[property];
            if (typeof currentProperty === "object") {
                doCollect(currentProperty);
            }
            else {
                if (typeof currentProperty === "string") {
                    strings.push(currentProperty);
                }
            }
        }
    }

    doCollect(obj);

    return strings;
}
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])


/*

Write a function called collectStrings which accepts an object and 
returns an array of all the values in the object that have a typeof string

*/