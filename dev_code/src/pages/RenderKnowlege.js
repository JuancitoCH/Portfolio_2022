import '../static/sass/knowlege_page.scss'
import jsonDataKwonledge from '../static/assets/data/knowlege.json'
console.dir(jsonDataKwonledge)

const formatJsonFile= async (json)=> await (await fetch(json)).json()

export default async function RenderKnowlege(app,name,data){
    const {
        mousePointer,
        currentColor
    } = data
    // console.log(mousePointer)
    const {x:mouseX,y:mouseY} = mousePointer
    name = name.replace('#','')
    // we save the original name string
    const originalName = name
    name = name.replace('%20',' ')
    app.innerHTML=''

    const sectionPage = document.createElement('section')
    sectionPage.classList.add('knowlege_page')
    sectionPage.classList.add('name')
    sectionPage.textContent = name
    sectionPage.style.top=mouseY+'px'
    sectionPage.style.left=mouseX+'px'
    sectionPage.style.backgroundColor = currentColor


    const closeButton = document.createElement('button')
    closeButton.textContent='X'
    closeButton.onclick=function(e){
        parent = this.parentElement

        parent.classList.add('close')
        parent.addEventListener('animationend',function(e){
            this.remove()
            window.location.hash='home'
        })
    
    }
    const contentDataFormated = await formatJsonFile(jsonDataKwonledge)
    sectionPage.appendChild(closeButton)
    // Content
    sectionPage.appendChild( createContent(contentDataFormated,originalName))
    app.appendChild(sectionPage)
}

function createContent(data,name){
    const currentContentData = data[name]
    console.log(name)
    console.log(currentContentData)
    
    const content = document.createElement('div')
    return content
}