let Olha= {
    "age": 18,
    "nativeCity": 'Odessa',
    "nativeCountry":'Ukraine',
    "favoriteNumber":7,
    "ukrainian":true
};

function f8() {
    let key = document.querySelector('.inpt').value;
    if (Olha[key] !== undefined) { document.querySelector('.outpt').innerHTML = Olha[key] }
    else { document.querySelector('.outpt').innerHTML = 'There is no information about data you entered' }

}

document.querySelector('.btn').onclick = f8;
