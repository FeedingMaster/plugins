// Load
window.addEventListener('load', ()=>{
    let accordion = {
        trigger: ".trigger",
        body: ".body",
        actionClass:"is-open",
        autoClose: true
    }
    initAccordion(accordion)

    let accordion2 = {
        trigger: ".trigger2",
        body: ".body2",
        actionClass:"is-open",
        autoClose: true
    }
    initAccordion(accordion2)
})

function initAccordion(obj){
    let triggers = selectElement(obj.trigger)
    let contentBody = selectElement(obj.body)
    let actionClass = obj.actionClass
    triggers.forEach(trigger => { 

        trigger.addEventListener("click",(e)=>{
            e.preventDefault()
            trigger = e.target

            if(hasClass(trigger, obj.trigger) == false) return

            if (obj.autoClose) {
                contentBody.forEach(element =>{
                    element.classList.remove(obj.actionClass)
                })
            }

            let body =  trigger.nextElementSibling
            console.log(body)
            if(hasClass(body,actionClass)){ 
                body.classList.remove(actionClass)
                trigger.classList.remove(actionClass)
                return
            }
            if (hasClass(trigger, actionClass)) {
                trigger.classList.remove(actionClass)
                return
            }

            body.classList.add(actionClass)
            trigger.classList.add(actionClass)
            return
        })
    });

}


// Global Helper Functions

function selectElement(selector){
    let element = document.querySelectorAll(selector)
    return element
}

function sanitizeSelector(selector){
    if (selector == null || selector == undefined) return selector
    let element = selector.replace(/[\.\#]/, "")
    return element
}

function hasClass(element, className){
    let boolean = element.classList.contains(sanitizeSelector(className))
    return boolean
}