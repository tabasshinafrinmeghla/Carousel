const products=[
  {
    name:'laptop',price:200000,color:'grey'
  },
  {
    name:'laptop',price:100000,color:'black'
  },
  {
    name:'laptop',price:20000,color:'blue'
  },
  {
    name:'laptop',price:150000,color:'pink'
  }
];
const brands =products.map(products=>products.price);
// console.log(brands);
// products.forEach(products=>console.log(products));
// products.forEach(products=>console.log(products.color));
// const cheap = products .filter(products=> products.price <=100000);
// console.log(cheap);
// const spcial =products.find(products=>products.color.includes('e'));
// console.log(spcial);
// const[x,y]= [200,300];
// console.log(x,y);



// JSON
const student ={
  name : 'meghla',
  age : 23,
  prfession: 'student'

}
const studentJson= JSON.stringify(student);
// console.log(studentJson);
const studentObj= JSON.parse(studentJson);
// console.log(studentObj);


// keys.values
const keys =Object.keys(student);
const values =Object.values(student);
// console.log(keys);
// console.log(values);


//copy products array and add new object. 

const newProducts=[...products,student ];
// console.log(newProducts);



// ternary
const money = 80;
let food = money>100 ? 'cake' : 'fuska';
console.log(food);
