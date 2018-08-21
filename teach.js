let box1 = document.querySelector("#one");
let box2 = document.querySelector("#two");
let box3 = document.querySelector("#three");

let r1 = 0, r2 = 0, r3 = 0;
let g1 = 0, g2 = 0, g3 = 0;
let b1 = 0, b2 = 0, b3 = 0;

setInterval(()=>{
  const choice1 = Math.floor(Math.random()*3);
  const increase = Math.floor(Math.random()*100)
  const a1 = Math.random()
  choice1=== 0 ? r1+=increase : (choice1===1 ? g1+=increase : b1+=increase);

  box1.style.backgroundColor = `rgb(${r1%255},${g1%255},${b1%255},${a1})`;
}, 100)

setInterval(()=>{
  const choice2 = Math.floor(Math.random()*3);
  const increase = Math.floor(Math.random()*100)
  const a2 = Math.random()
  choice2 === 0 ? r2+=increase : (choice2===1 ? g2+=increase : b2+=increase);

  box2.style.backgroundColor = `rgb(${r2%255},${g2%255},${b2%255},${a2})`;
}, 100)

setInterval(()=>{
  const choice3 = Math.floor(Math.random()*3);
  const increase = Math.floor(Math.random()*100)
  const a3 = Math.random()
  choice3 === 0 ? r3+=increase : (choice3===1 ? g3+=increase : b3+=increase);

  box3.style.backgroundColor = `rgb(${r3%255},${g3%255},${b3%255},${a3})`;
}, 100)
