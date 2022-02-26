"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
// number (int, float, hex, binary)
let total;
total = 0xff0;
// array (type[])
let items;
items = ["foo", "bar"];
let values;
values = [1, 2, 3];
// tuple
let title;
title = [2, "bar"];
// enum - enumerator
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (anything) BAD PRACTICE!
let thing;
thing = [1];
// void (empty)
function logger() {
    const data = "foo";
    console.log(data);
}
// never
function error() {
    throw new Error("error");
}
// object
let car;
car = {
    name: "Ferrari",
};
// type inference
let notification = "My notification here!";
notification = "New text";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
