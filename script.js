// console.log('Add validation!');

// let gotIT = document.createElement('class')
// let 
let parkingForm = document.querySelector('#parking-form')
let submitButton = document.querySelector('#submit-button')
let inputFields = document.querySelectorAll('.field')
//    let box = document.querySelector('#name-field')
//     box.classList.add('input-invalid')
    
//     for (let filed of inputFilds){

//     }


parkingForm.addEventListener('submit', function(e){
   e.preventDefault();
    for (let field of inputFields){
        if (field.value.length > 0) {
            field.parentElement.classList.add('input-valid')
        }
        else {
            field.parentElement.classList.add('input-invalid')
        }
    }
})


