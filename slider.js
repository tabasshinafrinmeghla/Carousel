// const images = [
//   '2.png',
//   '3.png',
//   '4.png',
//   '8.png'
// ]

const loadMeals = (searchTest) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
  console.log(url)
  fetch(url)
  .then (res => res.json())
  .then(data =>displayMeals(data.meals));
}


// let imgIndex = 0;
// setInterval( () =>{
//   const imgUrl = loadMeals[imgIndex];
  
//   console.log(imgIndex, imgUrl);
//   imgIndex++;
// },1000

// )