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
    // field.parentElement.classList.replace('input-valid')
//     }
// alert('is required')


parkingForm.addEventListener('submit', function(e){
   e.preventDefault();
    for (let field of inputFields){
        if (field.value.length > 0) {
            if (field.parentElement.classList.contains('input-valid')) {
               console.log('already there') 
            } else {
                field.parentElement.classList.add('input-valid')
            } console.log(field.parentElement.classList)
        } else {
           if  (field.parentElement.classList.contains('input-invalid')){
               console.log('already invalid')
           } else {
               field.parentElement.classList.add('input-invalid')
           } console.log(field.parentElement.classList)
            // inputFields.addEventListener('submit', function(){
           let text =  field.parentElement.lastChild.textContent
           if (text.includes('required')){
               console.log('text already there')
           } else {
            
            let newEl=document.createElement('div')
                let textForDiv = document.createTextNode(`${field.id} is required`)
                newEl.appendChild(textForDiv)
                let parentDiv =field.parentNode;
                parentDiv.appendChild(newEl)
            }  
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

