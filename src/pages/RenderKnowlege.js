import '../static/sass/knowlege_page.scss'
export default function RenderKnowlege(app,name,data){
    const {
        mousePointer,
        currentColor
    } = data
    // console.log(mousePointer)
    const {x:mouseX,y:mouseY} = mousePointer

    name = name.replace('#','')
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
    
    sectionPage.appendChild(closeButton)
    app.appendChild(sectionPage)
}

function createContent(data){
    const content = document.createElement('div')
    return content
}