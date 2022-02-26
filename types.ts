// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string];
title = [2, "bar"];

// enum - enumerator
enum Colors {
  white = "#fff",
  black = "#000",
}

// any (anything) BAD PRACTICE!
let thing: any;
thing = [1];

// void (empty)
function logger(): void {
  const data = "foo";
  console.log(data);
}

// null | undefined - preferable using 'undefined' rather than 'null' since it'll
// have some value in the future
type some = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object
let car: object;
car = {
  name: "Ferrari",
};

// type inference
let notification = "My notification here!";
notification = "New text";

window.addEventListener("click", (e) => {
  console.log(e.target);
});
