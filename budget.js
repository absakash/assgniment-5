
function value(v){
    let value=document.getElementById(v).value;
    let valueInt=parseInt(value);
    return valueInt;
}

function inner(i){
    let inner=document.getElementById(i).innerText;
    let innerInt=parseInt(inner);
    return innerInt;
}




document.getElementById('calculate').addEventListener('click',function(){
    console.log("hum");
    let par_player=value('per-player');
    // console.log(par_player);
   let player_expences=inner('player_expences');
   player_expences=5*par_player;

   document.getElementById('player_expences').innerText=player_expences;
   console.log(player_expences);
})

document.getElementById('total-calculate').addEventListener('click',function(){

    let manager=value('manager');
    let coach=value('coach');
    let before_player=inner('player_expences');
    let all=manager+coach+before_player;

    document.getElementById('total').innerText=all;
})