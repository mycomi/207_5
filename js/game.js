let enter =document.querySelector('.enter');
let reset = document.querySelector('.reset');
let again = document.querySelector('.again');
let q = Math.floor(Math.random()*100+1);
let count ;
let hint = [];
console.log(q);

let easy =document.querySelector('#ez');
let med =document.querySelector('#nor');
let hard =document.querySelector('#hard');

document.getElementById("num").disabled = true;
document.getElementById("enter").style.visibility = 'hidden';
document.getElementById("reset").style.visibility = 'hidden';
document.getElementById("again").style.visibility = 'hidden';
for(let i=0;i<10;i++){
    document.getElementById("pic"+(i+1)+"").style.visibility = 'hidden';
}


function start(){
    document.getElementById("num").disabled = false;
    document.getElementById("enter").style.visibility = 'visible';
    document.getElementById("reset").style.visibility = 'visible';
    
    document.getElementById("hint").disabled = false;
    document.getElementById("hint2").disabled = false;
    document.getElementById("mode").disabled = true;

    for(let i=0;i<count;i++){
        document.getElementById("pic"+(i+1)+"").style.visibility = 'visible';
    }
}


easy.addEventListener('click',function(){
    document.querySelector('#mode').textContent ='';
    count = 10;
    document.querySelector('#hp').textContent = "" +count+"";
    console.log(count);
    start();
});

med.addEventListener('click',function(){
    document.querySelector('#mode').textContent ='';
    count = 8;
    document.querySelector('#hp').textContent = " "+count+"";
    console.log(count);
    start();
});

hard.addEventListener('click',function(){
    document.querySelector('#mode').textContent ='';
    count = 5;
    document.querySelector('#hp').textContent = " "+count+"";
    console.log(count);
    start();
});

gam.addEventListener('click',function(){
    document.querySelector('#mode').textContent ='';
    count = 1;
    document.querySelector('#hp').textContent = " "+count+"";
    console.log(count);
    start();
});




enter.addEventListener('click',function(){

    let n = document.getElementById("num").value = document.getElementById("num").value;
    document.getElementById("num").value ="";
    document.getElementById("num").focus();
    if(n<101 && n>0){
        if(n == q){
        
        document.querySelector('#result').textContent = "You Win";
        document.querySelector('#hint2').textContent = '';
        document.getElementById("num").disabled = true;
        document.getElementById("enter").disabled = true;
        document.getElementById("again").style.visibility = 'visible';
        document.getElementById("reset").disabled = true;
        
        
        
        }else{
            count = count-1;
            document.getElementById("pic"+(count+1)+"").style.visibility = 'hidden';
            hint.push(n);
            document.querySelector('#hint').textContent = hint;
            if(count < 1 ){
                document.querySelector('#result').textContent = "Game Over!!!";
                document.querySelector('#hp').textContent = " "+count +"";
                document.getElementById("num").disabled = true;
                document.getElementById("enter").disabled = true;
            }else{
                document.querySelector('#result').textContent = "Wrong";
                document.querySelector('#hp').textContent = " "+count +"";
                
                
                

                    if(n > q){
                        document.querySelector('#hint2').textContent = "too high";
                    }
                    if(n < q){
                    document.querySelector('#hint2').textContent = "too low";
                    }
            }

        }
    }else{
        document.querySelector('#result').textContent = "Please Enter Number 1-100!!!";
    }
    

        

    
    
    

});

reset.addEventListener('click',function(){

    location.reload(true)
    start();
});

again.addEventListener('click',function(){

    location.reload(true)
    start();
});