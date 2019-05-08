
let box = [1,2,3,4,5,6,7,8,9];
let player1="X"
let player2="O"


let counter = 0;

let play = function(event){
    
    counter +=1 
    console.log(counter);
    // If the counter even add text O
    //Else add text X
    if (counter %2 === 0){
        $(event.target).text(player2);
    
    }else {
        $(event.target).text(player1);  
        
    }
    $(event.target).off("click"); 



    checWinner()
};

$('#btn').on("click", function(){
	counter = 0;
    $(".box").text("");
    $(".box").on("click",play );
});
// Add event to all box

$('.box').on("click", play);




function checWinner(){
    for (let i=0; i<=8; i++){
      box[i] = $('#box'+i).text();
      console.log('box' + i + " is " + box[i])
    } 
    console.log(box)
 // When the line is horizontal 
    if(box[0]==box[1] && box[1]==box[2] && box[0] !== ""){
        alert('player '+box[1]+ ' '+' Winsss')
    
    }    
    if(box[3]==box[4] && box[4]==box[5] && box[3] !== ""){
        alert('player '+box[4]+ ' '+' Winsss')
    }
    if(box[6]==box[7] && box[7]==box[8] && box[6] !== ""){
        alert('player '+box[6]+ ' '+' Winsss')
    }
 // When the line is vertical 
    if(box[0]==box[3] && box[3]==box[6] && box[0] !== ""){
        alert('player '+box[0]+ ' '+' Winsss')
    }
    if(box[1]==box[4] && box[4]==box[7] && box[1] !== ""){
        alert('player '+box[1]+ ' '+' Winsss')
    }
    if(box[2]==box[5] && box[5]==box[8] && box[2] !== ""){
        alert('player '+box[2]+ ' '+' Winsss')
    }
 // When the line is diagonal
    if(box[0]==box[4] && box[4]==box[8] && box[0] !== ""){
        alert('player '+box[0]+ ' '+' Winsss')
    }
    if(box[2]==box[4] && box[4]==box[6] && box[2] !== ""){
        alert('player '+box[2]+ ' '+' Winsss')
    }
}


