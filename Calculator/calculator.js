
cal = function(){
  document.write("7");
}

var op,ops,op1='',op2=0,x=0,y=0,c=0;
var aud = document.getElementById('audio');
function playAudio(){
  aud.play();
}

setOperator = function(){
  if(op2 == 0){
    playAudio();
    op = document.getElementById('b+').value;
    ops = document.getElementById('b+').value;
    document.getElementById('input').value = op;
    y=1;
  }else{
    playAudio();
    calculates();
    op = document.getElementById('b+').value;
    ops = document.getElementById('b+').value;
    document.getElementById('input').value = op;
  }

}
document.getElementById('b*').onclick = function(){
  if(op2 == 0){
    playAudio();
    op = document.getElementById('b*').value;
    ops = document.getElementById('b*').value;
    document.getElementById('input').value = op;
    y=1;
  }else{
    playAudio();
    calculates();
    op = document.getElementById('b*').value;
    ops = document.getElementById('b*').value;
    document.getElementById('input').value = op;
  }
}
document.getElementById('b-').onclick = function(){
  if(op2 == 0){
    playAudio();
    op = document.getElementById('b-').value;
    ops = document.getElementById('b-').value;
    document.getElementById('input').value = op;
    y=1;
  }else{
    playAudio();
    calculates();
    op = document.getElementById('b-').value;
    ops = document.getElementById('b-').value;
    document.getElementById('input').value = op;
  }
 }
document.getElementById('b/').onclick = function(){
  if(op2 == 0){
    playAudio();
    op = document.getElementById('b/').value;
    ops = document.getElementById('b/').value;
    document.getElementById('input').value = op;
    y=1;
  }else{
    playAudio();
    calculates();
    op = document.getElementById('b/').value;
    ops = document.getElementById('b/').value;
    document.getElementById('input').value = op;
  }
}

document.getElementById('b.').onclick = function(){
  if(y == 0){
    playAudio();
    op1 += document.getElementById('b.').value;
    document.getElementById('input').value = op1;
  }else{
    playAudio();
    op2 += document.getElementById('b.').value;
    document.getElementById('input').value = op2;
  }
}
/*-----------------------------------------------------------*/

document.getElementById('b0').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b0').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b0').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}
document.getElementById('b1').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b1').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1 ;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b1').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}
document.getElementById('b2').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b2').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b2').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}
document.getElementById('b3').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b3').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b3').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}
document.getElementById('b4').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b4').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b4').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}
document.getElementById('b5').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b5').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1 ;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b5').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}
document.getElementById('b6').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b6').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b6').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}
document.getElementById('b7').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b7').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b7').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}
document.getElementById('b8').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b8').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b8').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}

document.getElementById('b9').onclick = function(){
    if(y == 0){
      playAudio();
      op1 += document.getElementById('b9').value;
      op1 = Number(op1);
      document.getElementById('input').value = op1;
    }if(y == 1){
      playAudio();
      op2 += document.getElementById('b9').value;
      op2 = Number(op2);
      document.getElementById('input').value = op2;
    }
}

document.getElementById('c').onclick = function(){
  //location.reload();
  playAudio();
  document.getElementById('input').value = "";
  op1 = 0;
  op2 = 0;
  y = 0;
}

  /*document.getElementById('b7').value += 5;*/
calculate =  function(){
  playAudio();
  var r = 0;
  switch(op){
    case "-" :  r = op1;
                r = r - op2;
                op1 = r;
                op2 = 0;
                document.getElementById('input').value = r.toFixed(3);
                break;
    case "+" :  r = op1;
                r = r + op2;
                op1 = r;
                op2 = 0;
                document.getElementById('input').value = r.toFixed(3);
                break;
    case "x" :  r = op1;
                r = r * op2;
                op1 = r;
                op2 = 0;
                document.getElementById('input').value = r.toFixed(3);
                break;
    case "/" :  r = op1;
                r = r / op2;
                op1 = r;
                op2 = 0;
                document.getElementById('input').value = r.toFixed(3);
                break;
  }
}

calculates =  function(){
  var r = 0;
  switch(ops){
    case "-" :  r = op1;
                r = r - op2;
                op1 = r;
                op2 = 0;
                //document.getElementById('input').value = r;
                break;
    case "+" :  r = op1;
                r = r + op2;
                op1 = r;
                op2 = 0;
                //document.getElementById('input').value = r;
                break;
    case "x" :  r = op1;
                r = r * op2;
                op1 = r;
                op2 = 0;
                //document.getElementById('input').value = r;
                break;
    case "/" :  r = op1;
                r = r / op2;
                op1 = r;
                op2 = 0;
                //document.getElementById('input').value = r;
                break;
  }
}
