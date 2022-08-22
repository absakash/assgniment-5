console.log("i am okay")

function select(ele) {
    const select = document.getElementById(ele);
    return select;

}

function id(e) {
    let id = document.getElementById(e);
    return id;
}

document.getElementById('naymar').addEventListener('click', function () {
    console.log("naymar oksy");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Naymar Junior';
    order.appendChild(li);


    document.getElementById('naymar').style.backgroundColor = 'gray';
    document.getElementById('naymar').disabled = true;

})

document.getElementById('lio').addEventListener('click', function () {
    console.log("lio");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Lio Messi';
    order.appendChild(li);

    document.getElementById('lio').style.backgroundColor = 'gray';
    document.getElementById('lio').disabled = true;
})

document.getElementById('cris').addEventListener('click', function () {
    console.log("cris");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Cristiano Ronaldo';
    order.appendChild(li);

    document.getElementById('cris').style.backgroundColor = 'gray';
    document.getElementById('cris').disabled = true;
})

document.getElementById('kaka').addEventListener('click', function () {
    console.log("kaka");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Kaka';
    order.appendChild(li);

    document.getElementById('kaka').style.backgroundColor = 'gray';
    document.getElementById('kaka').disabled = true;
})

document.getElementById('martinez').addEventListener('click', function () {
    console.log("martinez");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Martinez';
    order.appendChild(li);

    document.getElementById('martinez').style.backgroundColor = 'gray';
    document.getElementById('martinez').disabled = true;
})

document.getElementById('demaria').addEventListener('click', function () {
    console.log("demaria");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Lio demaria';
    order.appendChild(li);

    document.getElementById('demaria').style.backgroundColor = 'gray';
    document.getElementById('demaria').disabled = true;
})




