import './static/sass/index.scss'
import './static/sass/menu.scss'
import './static/sass/card_sections.scss'
import './static/sass/intersection_observer.scss'

import iob from './js_components_anim/intersectionob'
import RenderKnowlege from './pages/RenderKnowlege'

const app = document.querySelector('#app')

// intersecction Observer
iob()

// Routing
const knowlege_node_list = document.querySelectorAll('.knowlege_card')
let mousePointer
let currentColor
for (const known of knowlege_node_list) {
    known.addEventListener('click', function (e) {
        let hash_url
        for (let node of this.childNodes) {
            if (node.id = 'name_card') {
                hash_url = this.childNodes[3].textContent
            } else {
                hash_url = ''
            }
        }
        window.location.hash = hash_url
        currentColor = window.getComputedStyle(this, null).getPropertyValue('background-color')

        mousePointer = e
    })
}
window.onhashchange = (e) => {
    e.preventDefault()
    const name = window.location.hash
    const data = {
        mousePointer,
        currentColor
    }
    name != '#' && name != '#home' && RenderKnowlege(app, name, data)
}
window.onload = (e) => {
    window.location.hash = 'home'
}