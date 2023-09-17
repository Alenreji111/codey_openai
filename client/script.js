import bot from './assets/bot.svg'
import user from '/assets/user.svg'

const form = document.querySelector(form)
const chatConstainer = document.querySelector('#chat_container')

let loaderInterval

function loader(element){
  element.textContent =""

  loaderInterval=setInterval(()=>{
    element.textContent+='.'

    if(element.textContent==="..."){
      element.textContent=""
    }
  },300)
}

function typeText(element,text ){
  let index =0

  let interval = setInterval(()=>{
    
    if(index<text.lenght){
        element.innerText+=text.chartAt(index)
        index++
      
    }else{
     clearInterval(interval)
    }
  },20)
  
  


}