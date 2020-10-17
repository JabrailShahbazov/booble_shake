let sum = 0;
// function call(nulp){
//     for (let i = 0; i <nulp; i++) {
//         let w_h_const = random_number(40, 260);
//         let div = document.createElement("div");
//         div.className = "boll"
//         div.style.backgroundColor = random_color();
//         div.style.top = random_number(0, (window.innerHeight-w_h_const)) + 'px'
//         div.style.left = random_number(0, (window.innerWidth - w_h_const)) + "px"
//         div.style.width = w_h_const + "px"
//         div.style.height = w_h_const + "px"
//         document.body.appendChild(div)
//     }
// }
// call(3089)

let interval = setInterval(() => {
  let w_h_const = random_number(40, 260);
  let div = document.createElement("div");
  div.className = "boll";
  div.style.backgroundColor = random_color();
  div.style.top = random_number(0, window.innerHeight - w_h_const) + "px";
  div.style.left = random_number(0, window.innerWidth - w_h_const) + "px";
  div.style.width = w_h_const + "px";
  div.style.height = w_h_const + "px";
  document.body.appendChild(div);

  // if (sum==10) {
  //     clearInterval(interval)
  // }
  // sum++

  div.addEventListener("click", function () {
    let remove_boll = document.querySelector("label");
    console.log(remove_boll);
    this.remove();
    sum++;
    remove_boll.innerText = `Boom :${sum}`;
  });
}, 600);

function random_number(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function random_color() {
  // let color = []
  // for (let i = 0; i < 3; i++) {
  //     color.push(Math.round(Math.random() * 255))
  // }
  // return 'rgb(' + color.join(',') + ')';
  let bg_color = "#";
  let color = "0123456789abcdf".split("");
  for (let i = 0; i < 8; i++) {
    bg_color += color[random_number(0, 15)];
  }
  return bg_color;
}
