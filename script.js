
let mainContent = document.querySelector('.main');


// algoritmo per contare da 1 a 100

for (let i = 1; i < 101; i++) {

    let elementBox = document.createElement('div');
    elementBox.classList.add('box');
    elementBox.innerHTML = i;
    

    mainContent.append(elementBox);
    console.log(i);    
    

}