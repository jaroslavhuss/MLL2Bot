const {Darknet} = require("darknet");

// Init
let darknet = new Darknet({
  weights: "./data.weights",
  config: "./test.cfg",
  names: ["monster"],
});

console.log(darknet.detect("1.jpg"));
console.log(darknet.detect("2.jpg"));
