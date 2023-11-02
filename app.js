setTimeout(()=>{
    let dino=document.querySelector('.game-dino');
    let current=true;
    let score=0;
    let song= new Audio('./icon/gameBackground.mp3');
    let outSong=new Audio('./icon/gameover.mp3');
    
    
    document.onkeydown= (e)=>{
        outSong.pause();
        song.play();
        if(e.keyCode==38)
        {
            console.log(e.keyCode);
            dino.classList.add('dino-up');
            
          
            setTimeout(()=>{
                dino.classList.remove('dino-up');
            },600)
          
        }
        else if(e.keyCode==39)
        {
           
            let dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dinoX+180+'px';
        }
        else if(e.keyCode==37)
        {
            let dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dinoX-180+'px';
        }
    }
    // song.autoplay();
    
    setInterval(()=>{
        let dino1=document.querySelector('.game-dino');
        let dragon=document.querySelector('.game-dragon');
        let gameOver=document.querySelector('.game-title h2');
        let dx=parseInt(window.getComputedStyle(dino1,null).getPropertyValue('left'));
        let dy=parseInt(window.getComputedStyle(dino1,null).getPropertyValue('top'));
     
        let drx=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
        let dry=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));
         let offsetX=Math.abs(drx-dx);
         let offsetY=Math.abs(dry-dy);
         if(offsetX<=120 && offsetY<=75){
            gameOver.style.visibility='visible';
            let dragon1=document.querySelector('.game-dragon');
            dragon1.classList.remove('run-dragon');
             dragon1.style.left=offsetX+100+'px';
             dinoleft0();
             
              song.pause();
              outSong.play();
              
              setTimeout(()=>{
                outSong.pause();
              },6000);
         }
         else if(current&&offsetX<=100)
         {
            Score();
            current=false;
            setTimeout(()=>{
                current=true;
    
            },500)
            setTimeout(()=>{
                let anidur=parseFloat(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
                if(anidur>=3.7){
                    console.log(anidur);
                    newdur=anidur-0.1;
                    dragon.style.animationDuration=newdur+'s';
                }
                else{
                    newdur=anidur+2;
                    dragon.style.animationDuration=newdur+'s';
                }
              
            },400)
           
         }
         
    },30)  
    function Score(){
        score++;
        let gameScore=document.querySelector('.game-score');
        gameScore.innerText='Game Svore: '+score; 
    }
    function dinoleft0(){
        dino.style.bottom='-80px';
    }
},1000);
