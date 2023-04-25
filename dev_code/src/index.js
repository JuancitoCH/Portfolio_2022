import './static/sass/index.scss'
import './static/sass/menu.scss'
import './static/sass/sun.scss'
import './static/sass/card_sections.scss'
import './static/sass/intersection_observer.scss'
import './static/sass/footer.scss'
import './static/sass/about.scss'
import './static/sass/projects_display.scss'

// animation
import intersectionob from './js_components_anim/intersectionob'
// import RenderKnowlege from './pages/RenderKnowlege'
import './js_components_anim/splide_mount'
// helper functions
import './helpers/copy_clipboard.js'


// alert("This Project is in development")


const app = document.querySelector('#app')

// Animation
intersectionob()

// Routing
// const knowlege_node_list = document.querySelectorAll('.knowlege_card')
// let mousePointer
// let currentColor
// for (const known of knowlege_node_list) {
//     known.addEventListener('click', function (e) {
//         let hash_url
//         for (let node of this.childNodes) {
//             if (node.id = 'name_card') {
//                 // hash_url = this.childNodes[1].textContent
//                 hash_url = this.querySelector('h3').textContent
//             } else {
//                 hash_url = ''
//             }
//         }
//         window.location.hash = hash_url
//         currentColor = window.getComputedStyle(this, null).getPropertyValue('background-color')

//         mousePointer = e
//     })
// }
window.onhashchange = (e) => {
    e.preventDefault()
    const name = window.location.hash
    // const data = {
    //     mousePointer,
    //     currentColor
    // }
    name != '#' && name!='#_' && 
    name != '#home' && name!='#about'
    && name!='#projects' && name!='#knowledge'
        // && RenderKnowlege(app, name, data)
}
// window.onload = (e) => {
//     // window.location.hash = ''
// }