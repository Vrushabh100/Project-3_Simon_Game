

// console.log(document);
let gmseq=[];
let userseq=[];



let suru = false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
   
    if(suru == false){
        console.log("gamestarted");
        suru = true;
       levelup(); 
    }
    
});

//to flash the button

    function btnflash(btn){
        btn.classList.add("flash");
        setTimeout(function() {
            btn.classList.remove("flash");
            
        }, 250);
    
    
    }

    function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(function() {
            btn.classList.remove("userflash");
            
        }, 350);
    
    
    }



function levelup(){
    userseq=[];
    let btns=["yellow","blue","red","green"];
    level++;
    h2.innerText = `level ${level}`;
//before calling selecting A random button
let randIdx=Math.floor(Math.random() * btns.length);
//ek random no selet hoga jo upar ke Array mein se koi bhi index no hoga
let randcolor= btns[randIdx];
let randbtn= document.querySelector(`.${randcolor}`);


// console.log(randIdx);
// console.log(randbtn);
// console.log(randcolor);


//push randon color in game sequence to matching the buttons
gmseq.push(randcolor);
console.log(gmseq);

    btnflash(randbtn);

}


//assesing the buttons on click by mouses

function btnpress(){
    
    console.log("game press btn was pressed");
    let btn= this;
    userflash(btn);
    //console.log(btn);
    //need to extract id from btn property
    let usercolor= btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkkar(userseq.length-1);
}

//check userseq and gameseq
function checkkar(kami){
   
    // console.log('curnt level=',level);
    //level are running according to user input so need to level up according to game
  

    if (userseq[kami] === gmseq[kami]){
        console.log("user press");
         //need to update the level after right answer by user if we compareing last index kami
        if(userseq.length === gmseq.length){
            //levelup to call hoga pr 1 second baad
            setTimeout(levelup,1000 );
            
        }
    }
    else{
        // h2.innerText = `game over! press any key to start`;
        //innertext ke andar hm value ys tags ko nahi de sakte so hmne innerhtml liya
        h2.innerHTML = `game over! your score is<b>:   ${level} </b> <br>...press any key to start`;
        document.querySelector("body").style.backgroundImage ="none";
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="red";
        },250);

        reset();
    }
    


    //home work problem track the users higheest score and display it


}


let allbtns = document.querySelectorAll('.btn');
console.log(allbtns);
 for (let btn of allbtns) {
    console.log(btn);
    btn.addEventListener("click",btnpress);

 }


 //matching sequence of user and game 



 //resetting the game when it over
 function reset(){
    suru=false;
    gmseq=[];
    userseq=[];
    level=0;
 }