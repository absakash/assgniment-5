console.log("i am okay")

let items=document.getElementsByClassName('items');



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
    let mn=document.getElementsByClassName('items');
    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Naymar Junior';
    li.classList.add('items');
    order.appendChild(li);


    document.getElementById('naymar').style.backgroundColor = 'gray';
    document.getElementById('naymar').disabled = true;

    if(items.length>5){
        alert("you can select only five players");
       
        const e = document.querySelector("li:last-child");
        // remove the last list item
        e.parentElement.removeChild(e);
        document.getElementById('naymar').style.backgroundColor = 'red';
    }

})

document.getElementById('lio').addEventListener('click', function () {
    console.log("lio");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Lio Messi';
    li.classList.add('items');
    order.appendChild(li);
    
   
    document.getElementById('lio').style.backgroundColor = 'gray';
    document.getElementById('lio').disabled = true;

    if(items.length>5){
        alert("you can select only five players");
        const e = document.querySelector("li:last-child");
        // remove the last list item
        e.parentElement.removeChild(e);
        document.getElementById('lio').style.backgroundColor = 'red';
    }
})

document.getElementById('cris').addEventListener('click', function () {
    console.log("cris");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Cristiano Ronaldo';
    li.classList.add('items');
    order.appendChild(li);

    document.getElementById('cris').style.backgroundColor = 'gray';
    document.getElementById('cris').disabled = true;

    if(items.length>5){
        alert("you can select only five players");

        const e = document.querySelector("li:last-child");
        // remove the last list item
        e.parentElement.removeChild(e);
        document.getElementById('cris').style.backgroundColor = 'red';
    }
})

document.getElementById('kaka').addEventListener('click', function () {
    console.log("kaka");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Kaka';
    li.classList.add('items');
    order.appendChild(li);

    document.getElementById('kaka').style.backgroundColor = 'gray';
    document.getElementById('kaka').disabled = true;

    if(items.length>5){
        alert("you can select only five players");

        const e = document.querySelector("li:last-child");
        // remove the last list item
        e.parentElement.removeChild(e);
        document.getElementById('kaka').style.backgroundColor = 'red';
    }
})

document.getElementById('martinez').addEventListener('click', function () {
    console.log("martinez");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Martinez';
    li.classList.add('items');
    order.appendChild(li);

    document.getElementById('martinez').style.backgroundColor = 'gray';
    document.getElementById('martinez').disabled = true;

    if(items.length>5){
        alert("you can select only five players");

        const e = document.querySelector("li:last-child");
        // remove the last list item
        e.parentElement.removeChild(e);
        document.getElementById('martinez').style.backgroundColor = 'red';
    }
})

document.getElementById('demaria').addEventListener('click', function () {
    console.log("demaria");

    let order = select('order');
    let li = document.createElement('li');
    li.innerText = 'Lio demaria';
    li.classList.add('items');
    order.appendChild(li);

    document.getElementById('demaria').style.backgroundColor = 'gray';
    document.getElementById('demaria').disabled = true;

    if(items.length>5){
        alert("you can select only five players");

        const e = document.querySelector("li:last-child");
        // remove the last list item
        e.parentElement.removeChild(e);
        document.getElementById('demaria').style.backgroundColor = 'red';
    }
})




