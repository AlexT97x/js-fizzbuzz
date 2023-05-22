
const contSqr = document.getElementById("containerSqr");

for (i=1; i<=100; i++) {

   
    let eleSqr = document.createElement("div");
    
    eleSqr.classList.add("sqr");

   
    let cntSqr = document.createElement("div");
    
    cntSqr.classList.add("contentSqr")

   
    contSqr.append(eleSqr);

    
    eleSqr.append(cntSqr);

    if (i % 3 === 0 && i % 5 === 0) {

        cntSqr.classList.add("fizzbuzz")
        cntSqr.append("Fizzbuzz");

    } else if (i % 3 === 0) {

        cntSqr.classList.add("fizz")
        cntSqr.append("Fizz");

    } else if (i % 5 === 0) {

        cntSqr.classList.add("buzz")
        cntSqr.append("Buzz");

    } else {

        cntSqr.append(i);

    }


}