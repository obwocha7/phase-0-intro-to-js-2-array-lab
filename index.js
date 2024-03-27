// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});
``;

function destructivelyAppendCat(cat) {
  cats.push(cat);
}

function destructivelyPrependCat(cat) {
  cats.unshift(cat);
}

function destructivelyRemoveLastCat(cat) {
  cats.pop(cat);
}

function destructivelyRemoveFirstCat(cat) {
  cats.shift(cat);
}
function appendCat(name) {
  var catsNew = [...cats, name];
  return catsNew;
}

function prependCat(name) {
  var catsNew = [name, ...cats];
  return catsNew;
}
function removeFirstCat() {
  return cats.slice(1);
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
