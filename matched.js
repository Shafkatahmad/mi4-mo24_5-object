const numbers = [45, 65, 23, 98, 19];

// for(let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

for(number of numbers) {
  // console.log(number);
}


const products = [
  {id: 1, name: 'xiami phone one night', print: 19000},
  {id: 2, name: 'walton phone', print: 19000},
  {id: 3, name: 'iPhone', print: 19000},
  {id: 4, name: 'macbook air', print: 119000},
  {id: 5, name: 'lenovo yoga laptop', print: 19000},
  {id: 6, name: 'dell inspiron laptop', print: 19000},
  {id: 7, name: 'samsung note 7', print: 19000},
  {id: 8, name: 'Nokia 5', print: 19000},
];

// for(const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  let matched = [];
  for(const product of products) {
    console.log(product.name.toLowerCase().includes(search.toLowerCase()));
    matched.push(product);
  }
  return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);