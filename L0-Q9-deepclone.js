function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
let original = { name: "Alice", hobbies: ["reading", "traveling"] };

let clone = deepClone(original);

clone.hobbies.push("coding");

console.log("Original:", original)
console.log("Clone:", clone)
