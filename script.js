// console.log('Add validation!');

// let gotIT = document.createElement('class')
// let 
let parkingForm = document.querySelector('#parking-form')
let submitButton = document.querySelector('#submit-button')
let inputFields = document.querySelectorAll('input')
// let name = document.querySelector('.field')

//    let box = document.querySelector('#name-field')
//     box.classList.add('input-invalid')
    
//     for (let filed of inputFilds){

//     }
// alert('is required')


parkingForm.addEventListener('submit', function(e){
   e.preventDefault();
    for (let field of inputFields){
        if (field.value.length > 0) {
            field.parentElement.classList.add('input-valid')
        } else {
            field.parentElement.classList.add('input-invalid')
            // inputFields.addEventListener('submit', function(){
                let newEl=document.createElement('div')
                let textForDiv = document.createTextNode(`${input.id}is required`)
                newEl=parentNode(textForDiv)
                field.appendChild(newEl)
            }    
        }
    
        
    

})

// let name=document.querySelector('#name')
// for (let inputFields of parkingForm){
//     console.log(inputFields)
//     inputFields.addEventListener('type', function(){
//         let newEl=document.createElement('div')
//         let textForDiv = document.createTextNode(`${newEl.id} is required`)
//         newEl=appendChild(textForDiv)
//         parkingForm.appendChild(newEl)
//     })
// }

