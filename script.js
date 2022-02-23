
// algoritmo per contare da 1 a 100

for (let i = 1; i < 101; i++) {
    let mainContent = document.querySelector('.main');
    let elementBox = document.createElement('div');
    elementBox.classList.add('box');
    elementBox.innerHTML = i;


    // funzione per selezionare i multipli di 3, 5 , 15

    if (i % 3 == 0 && i % 5 != 0) {
        elementBox.classList.add('green');
        elementBox.innerHTML = 'Fizz'

    }else if (i % 5 == 0 && i % 3 != 0 ) {
        elementBox.classList.add('yellow');
        elementBox.innerHTML = 'Buzz'
            
    }else if (i % 15 == 0 ) {
        elementBox.classList.add('blue');
        elementBox.innerHTML = 'FizzBuzz'

    }


    mainContent.append(elementBox);       
}