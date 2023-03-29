// const holdH1 = document.querySelectorAll('.some-class');

// const holdClasses = document.getElementsByClassname('some-class')



// target the elements to be changed & store them in a variable
const holdH1 = document.querySelector("h1");
// modify that element's propery via the variable


const header = {
    style: {
        color: 'green',
        fontSize: '15px'
    }
}

// Two ways of setting style
holdH1.style.backgroundColor = "red";
holdH1.setAttribute('style', 'background-color:red');


// OR do it without a variable
document.querySelector("h1").style.backgroundColor = "red";


document.body.style.backgroundColor = "yellow";


holdH1.innerText = "New Text"


const newH1 = document.createElement('h1')
newH1.innerText = "HERE IS A NEW H1"
document.body.appendChild(newH1)


console.log("hello")