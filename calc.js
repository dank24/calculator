//variables for item selection
const btns = document.querySelectorAll('.btns')
const topScreen = document.querySelector('.topScreen')
const midScreen = document.querySelector('.midScreen')
const bottomScreen = document.querySelector('.bottomScreen')

//variables for input
let v = [];
let v1 = '';
let oper = '';
let op1 = '';
let ope = '';
let op2 = '';


function operation(op1, ope, op2) {
    switch (ope) {
    case '+' : return op1 + op2 ;
    break;
    case '-' : return op1 - op2 ;
    break ;
    case 'x' : return op1 * op2 ;
    break ;
    case '/' : return op1 / op2
    }
}

function display() {
    btns.forEach(e =>{
        e.addEventListener('click', () =>{
            if(e.id !== '+' && e.id !== '-' && e.id !== 'x' && e.id !== '/'){
                v.push(e.id)
                v1 = v.join('')
            } else {
                oper = e.id
            }
            bottomScreen.textContent = v1
            console.log(v)
            console.log(v1)
            console.log(oper)
        })
    })
}
display()

//storeValues for operation
function storeValue() {

}