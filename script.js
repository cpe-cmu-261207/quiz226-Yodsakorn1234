const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
let num = ""
let state = false;
// define more constants and variables here
btn_toggle.onclick = () => {
  // your code here
  if (state == false) {
    num = author.innerText
    const a = author.innerText.split(' ')
    let c = parseInt(a[0]) + parseInt(length.value)
    author.innerText = c
    state = true
  }
  else {
    author.innerText = num
    state = false
  }
}
// more codes for Search and Reset buttons here
const search = document.getElementById('search')
const reset = document.getElementById('reset')
const text = document.getElementById('text')
let group = text.innerText
let f = false
search.onclick = () => {
  let arr  = text.innerText.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= length.value) {
      arr[i] = "<span style=\"color:" + color.value + ";\">" + arr[i] + "</span>"
    }
  } 
  const t = arr.join(' ')
  text.innerHTML = t
  f = true
}
color.oninput = () => {
  if (s == true) {
    let arr  = text.innerText.split(' ')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= length.value) {
        arr[i] = "<span style=\"color:" + color.value + ";\">" + arr[i] + "</span>"
      }
    } 
    const t = arr.join(' ')
    text.innerHTML = t
  }
}
reset.onclick = () => {
  text.innerHTML = org
}