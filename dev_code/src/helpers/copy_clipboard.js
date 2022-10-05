const contact_me = document.querySelector('.contact_me')
const ul = contact_me.querySelector('ul')
const bs = ul.querySelectorAll('b')
const copyclipboard = (e,b)=>{
    console.log(e)
    const {
        offsetX:screenX,
        offsetY:screenY,
    } = e
    console.log(e)
    navigator.clipboard.writeText(b.textContent)
    b.appendChild(temporalCopiedElement(screenX,screenY))
}
function temporalCopiedElement(positionx,positiony){
    const div = document.createElement('div')
    div.textContent = 'Copied'
    div.classList.add('clipboard_copied')
    // div.style.top = positiony+'px'
    // div.style.left = positionx+'px'
    div.onanimationend=function (){
        this.remove()
    }
    return div
}

bs.forEach(b=>{
    console.log(b)
    b.onclick = function (e){ copyclipboard(e,this) }
})
