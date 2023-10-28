class HashTable {
    constructor(size) {
        this.keyMap = new Array(size);
    }

    keys() {
        let keys = [];
        this.keyMap.forEach(pairArray => pairArray.forEach(pair => keys.push(pair[0])));
        return keys;
    }

    values() {
        let values = [];
        this.keyMap.forEach(pairArray => pairArray.forEach(pair => values.push(pair[1])));
        return values;

    }
    set(key, value) {
        const keyIndex = this._hash(key);
        if (!this.keyMap[keyIndex]) this.keyMap[keyIndex] = [];
        // set should check for the existance of key and in that case update
        // the value and not just add another value for that same key
        if (this.get(key)) {
            this.update(key, value);
        }
        else this.keyMap[keyIndex].push([key, value]);
    }
    update(key, value) {
        const keyIndex = this._hash(key);
        this.keyMap[keyIndex].forEach(pair => {
            if (pair[0] == key) {
                pair[1] = value;
            }
        })
    }
    get(key) {
        const keyIndex = this._hash(key);
        if (!this.keyMap[keyIndex] || this.keyMap[keyIndex].length == 0) return undefined;
        else {
            return this.keyMap[keyIndex].filter(pair => {
                return pair[0] === key;
            })[0][1];
        }
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
}

const myHashTable = new HashTable(53);

myHashTable.set("city guard green", "#DFFF00");
myHashTable.set("orange", "#FFBF00");
myHashTable.set("orange", "#FFBF01");
myHashTable.set("fucsia", "#DE3163");
myHashTable.set("blueish green", "#40E0D0");

console.log(myHashTable.get("orange"));

console.log(myHashTable.keys());

console.log(myHashTable.values());