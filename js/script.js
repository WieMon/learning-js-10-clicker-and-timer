//Traditional counter (without closure)

//let number = 0; 

// const add = () => {
//   //let number = 0; 
//   number++;
//   document.body.textContent = `Current counter status is ${number}`;
//  }
//  document.addEventListener('click', add)

//Counter with closure 1
//  const addWithClosure = (start = 0) => {
//   let number = start;
//   return () => {
//    number++;
//    document.body.textContent = `Current counter status is ${number}`
//   }
//  }
 
//  const counter = addWithClosure();
//  const counterFrom5 = addWithClosure(5);
//  document.addEventListener('click', counter)

 //Counter with closure 2
//  const user = (name = "", age) => {
//   let userName = name;
//   let userAge = age;
 
//   function showName() {
//    console.log(`Hi ${userName}, ${userAge >= 18 ? 'You are allowed to buy beer' : 'You are now allowed to buy beer'}`);
//   }
 
//   return showName
//  }
 
//  const mieszko = user("Mieszko", 20);
//  const jagienka = user("Jagienka", 17);
//  mieszko()
//  jagienka()
 
//  const noName = user();
//  noName()

 //Counter with closure 3

const clock = () => {
  let seconds = 0;
  document.body.textContent = 0 + 'seconds';

  const timer = () => {
    seconds++;
    document.body.textContent = seconds + 'seconds';
  }
  return timer
 }

const start = clock();
setInterval(start, 1000);