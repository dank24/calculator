//variables for item selection
const btns = document.querySelectorAll('.btns')
const topScreen = document.querySelector('.topScreen')
const midScreen = document.querySelector('.midScreen')
const bottomScreen = document.querySelector('.bottomScreen')
let operBtns = document.querySelectorAll('.oper')

//variables for input
let v = [];
let v1 = '';
let oper = '';

let op1 = '';
let ope = '';
let op2 = '';


function operation(op1, ope, op2) {
    op1 = parseFloat(op1)
    op2 = parseFloat(op2)

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
                ope = oper
                v = []
            }
            bottomScreen.textContent = v1
            topScreen.textContent = `${op1} ${ope} ${op2}`
        })
    })
}

//storeValues for operation
function storeValues() {
    btns.forEach(e =>{
        e.addEventListener('click', () =>{
        
            if(ope === ''){
                op1 = v1
            } else if(ope !== ''){
                op2 = v1 
            } 
            console.log(op1)
            console.log(ope)
            console.log(op2)
        })
    })
}

//calculation
function calculate() {

    storeValues()
    display()
    operBtns.forEach(e =>{
        e.addEventListener('click', () =>{
            e.style.backgroundColor = 'red'
            if(op2 && ope && op2) {
                let results = operation(op1,ope,op2)
                midScreen.textContent = results
                topScreen.textContent = `${op1} : ${ope} : ${op2}`
            }
        })
    })
}


calculate()
