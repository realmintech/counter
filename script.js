let textarea = document.getElementById('message');
let counter = document.getElementById('counter')
let remainder = document.getElementById('remain');

form.addEventListener('keyup', ()=>{
    change();
   
})
function change(){
    counter.innerHTML = textarea.value.length;
   remainder.innerHTML = textarea.getAttribute('maxlength') - textarea.value.length;
}
