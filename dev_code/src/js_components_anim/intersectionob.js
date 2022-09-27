
const cards_knowledge = document.querySelector('.knowlege').childNodes
const cards_projects = document.querySelector('.projects').childNodes
const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry => {
        
        if(entry.isIntersecting) {
            entry.target.classList.remove('io_not_observ')
            entry.target.classList.add('iobserver')
        }
        // else {
        //     entry.target.classList.remove('iobserver')
        //     entry.target.classList.add('io_not_observ')
        // }
        
    })

},{
    // rootMargin: '0px',
    threshold: .3
})

export default function io_cards_anim(){

    cards_knowledge.forEach(card=>{
        if( card.className?.includes('knowlege_card'))
            observer.observe(card)
    })
    cards_projects.forEach(card=>{
        if( card.className?.includes('one_project'))
            observer.observe(card)
    })
}

