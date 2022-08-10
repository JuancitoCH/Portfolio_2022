import './static/sass/index.scss'
import './static/sass/menu.scss'
import './static/sass/card_sections.scss'
import Router from './pages/router'
import RenderKnowlege from './pages/RenderKnowlege'

const app = document.querySelector('#app')
const knowlege_node_list = document.querySelectorAll('.knowlege_card')
// console.log(knowlege_node_list)
let mousePointer
let currentColor

for(const known of knowlege_node_list){
    known.addEventListener('click',function(e){
        const hash_url=this.childNodes[3].textContent
        window.location.hash=hash_url
        currentColor = window.getComputedStyle( this ,null).getPropertyValue('background-color')
        
        mousePointer=e
    })
}
window.onhashchange=(e)=>{
    e.preventDefault()
    const name = window.location.hash
    const data = {
        mousePointer,
        currentColor
    }
    name!='#' && name!='#home' && RenderKnowlege(app,name,data)
}
window.onload=(e)=>{
    window.location.hash='home'
}