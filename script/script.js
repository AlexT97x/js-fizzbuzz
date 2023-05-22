"use strict";


const output = document.getElementById('output');

for(let i = 1; i <= 100; i++){


    if (i % 15 == 0) {

        output.innerHTML = '<div>Fizz Buzz</div>';
        console.log('Fizz Buzz');

    }else if (i % 5 == 0) {

        output.innerHTML = '<div>Buzz</div>';
        console.log('buzz');

    }else if (i % 3 == 0) {

        output.innerHTML = '<div>Fizz</div>';
        console.log('Fizz');

    }else {

        console.log(i);
        output.innerHTML = '<div>${i}</div>'
    }

}