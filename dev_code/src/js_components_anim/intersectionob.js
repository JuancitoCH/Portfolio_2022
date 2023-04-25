
// const cards_knowledge = document.querySelector('.knowlege').childNodes
const knowledge = document.querySelector('.knowlege')
const cards_projects = document.querySelector('.projects_v2').childNodes
const about_section = document.querySelector('#about')
const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry => {
        
        if(entry.isIntersecting) {
            // entry.target.classList.remove('io_not_observ')
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
const observerRight = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry => {
        
        if(entry.isIntersecting) {
            // entry.target.classList.remove('io_not_observ')
            entry.target.classList.add('iobserver_right')
        }
    })

},{
    // rootMargin: '0px',
    threshold: .3
})

export default function io_cards_anim(){

    // cards_knowledge.forEach(card=>{
    //     if( card.className?.includes('knowlege_card'))
    //         observer.observe(card)
    // })
    observerRight.observe(knowledge)
    cards_projects.forEach(card=>{
        if( card.className?.includes('one_project_v2'))
            observer.observe(card)
    })
    observer.observe(about_section)
}

