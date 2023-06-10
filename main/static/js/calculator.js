function insert(value){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + value;
}

function clr(){
    document.getElementById('result').innerHTML = '';
}

function operation(){
    var expression = document.getElementById('result').innerHTML;
    if(expression){
        document.getElementById('result').innerHTML = eval(expression);
    }
}

function del(){
    var expression = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = expression.substring(0, expression.length-1);
}

