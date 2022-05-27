let msg = "This is our fancy new feature that we are adding via javascript!!"
console.log(msg)
let element = document.createElement('p')
element.innerText = 'Hey, my name is Eileen, and I am so awesome. I\'m learning git, and I am so stoked and excited'
let body = document.body
// body.append(element)
let h1 = document.getElementById('h1')
console.log(h1)
function alertMe(){
  alert('Hey, you clicked me!')
}
// h1.addEventListener("click",alertMe)

function changeColor(){
  console.log('the color property when calling this function is : ', h1.style.color)
  if (h1.style.color !== 'white'){
    h1.style.color = 'white'

  }
  else{
    h1.style.color = 'black'
  }
  console.log('the color property at the end of this function is : ', h1.style.color)

}
h1.addEventListener('mouseover',changeColor)
h1.addEventListener('click',()=>{body.append(element)})