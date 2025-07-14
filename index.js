const {reverseArray} = require('./src/array');
const { SpeciesManager } = require('./src/array1');
const { LinkedList } = require('./src/linkedList');

console.log('=== DSA Playground ===');

//Array Reversal
console.log('Array Reversal:');
let arr = [1,2,3,4,5];
console.log(reverseArray(arr));

//Linked List
console.log('\nLinked List:');
const list = new LinkedList();
list.addFirst(7);
list.addFirst(8);
list.addFirst(9);
console.log(list.print());

//Species manager
console.log('\nTree species List:');
const species = new SpeciesManager();
species.addSpecies('Boabab','Indegenous');
species.addSpecies('Eucalyptus','Exotic');
species.addSpecies('Mango','Fruit');
species.addSpecies('Neem', 'Medicinal');

console.log('All species:');
console.log(species.listSpecies());

console.log('Filtered (Fruit):');
console.log(species.filterByCategory('Fruit').join(','));



