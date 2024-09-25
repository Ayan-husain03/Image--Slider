let object = [
  {
    img: "https://plus.unsplash.com/premium_photo-1675802755792-a7cfd346b5be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "First Image",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum vel consequuntur suscipit! Culpa cum doloribus libero? Id illum reiciendis quidem maiores quo reprehenderit, nulla dolore magnam. Quidem, aliquam sit.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671382026883-881a54951327?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Second Image",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum vel consequuntur suscipit! Culpa cum doloribus libero? Id illum reiciendis quidem maiores quo reprehenderit, nulla dolore magnam. Quidem, aliquam sit.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1719955782984-b29ff5d9add3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Third Image",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum vel consequuntur suscipit! Culpa cum doloribus libero? Id illum reiciendis quidem maiores quo reprehenderit, nulla dolore magnam. Quidem, aliquam sit.",
  },
  {
    img: "https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Fourth Image",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum vel consequuntur suscipit! Culpa cum doloribus libero? Id illum reiciendis quidem maiores quo reprehenderit, nulla dolore magnam. Quidem, aliquam sit.",
  },
  {
    img: "https://images.unsplash.com/photo-1642866737821-532bc817c068?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Fifth Image",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum vel consequuntur suscipit! Culpa cum doloribus libero? Id illum reiciendis quidem maiores quo reprehenderit, nulla dolore magnam. Quidem, aliquam sit.",
  },
  {
    img: "https://images.unsplash.com/photo-1676557060416-1418aefb165d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Last Image",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum vel consequuntur suscipit! Culpa cum doloribus libero? Id illum reiciendis quidem maiores quo reprehenderit, nulla dolore magnam. Quidem, aliquam sit.",
  },
];
let image = document.querySelector(".img");
let heading = document.querySelector(".heading");
let text = document.querySelector(".text");
let buttons = document.querySelector(".buttons");

let index = 0;

function changeimages() {
  image.src = object[index].img;
  heading.textContent = object[index].heading;
  text.textContent = object[index].text;
  index = (index + 1) % object.length
}

// buttons.addEventListener("click", (e) => {
//   let myTarget = e.target.classList;
//   if (myTarget.contains("prev")) prev();
//   if (myTarget.contains("next")) next();
// });

// function next() {
//   index = (index + 1) % object.length;
//   changeimages();
// }
// function prev() {
//   index = !index ? object.length - 1 : index - 1;
//   console.log(index);
//   changeimages();
// }

setInterval(changeimages, 2000)
changeimages();
