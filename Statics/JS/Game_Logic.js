 var MouseClicked=[0];
 var game_over= false;
 var Winner_message = $('#log');


function Check_Winner()
{
  // x=0
  // 0=1

   var get_values=[];

   for(i=0;i<9;i++)
   {
     if($('#block_'+ i.toString()).html() == "X")
     {
          get_values.push("0");
     }

     else if($('#block_'+ i.toString()).html() == "O")
     {
          get_values.push("1");
     }
     else
     {
      get_values.push("");
     }
   }

var Tic_Tac_Matrix=new Array(3);
for (var i = 0; i < Tic_Tac_Matrix.length; i++) {
    Tic_Tac_Matrix[i] = new Array(3);
}
var k=0;
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        Tic_Tac_Matrix[i][j] = get_values[k];
        k++;
    }

}



// for Rows
for(i=0;i<3;i++){
   if( Tic_Tac_Matrix[i][0]  == Tic_Tac_Matrix[i][1])
   { if(Tic_Tac_Matrix[i][1] == Tic_Tac_Matrix[i][2])
            {
              if ( Tic_Tac_Matrix[i][1] == "0"){
                 Winner_message.html(" X is Winner");
              game_over=true;

              }
              else if( Tic_Tac_Matrix[i][1]=="1"){
               Winner_message.html("O is Winner");
              game_over=true;
              }
            }
   }
}
//for Coloums
for(i=0;i<3;i++){
   if( Tic_Tac_Matrix[0][i]  == Tic_Tac_Matrix[1][i])
   { if(Tic_Tac_Matrix[1][i] == Tic_Tac_Matrix[2][i])
            {
              if ( Tic_Tac_Matrix[1][i] =="0"){
               Winner_message.html(" X is Winner");
              game_over=true;
              }
              else if( Tic_Tac_Matrix[1][i]=="1"){
               Winner_message.html("O is Winner");
              game_over=true;
              }
            }
   }
}

//For diagonals


   if( Tic_Tac_Matrix[0][0]  == Tic_Tac_Matrix[1][1])
   { if(Tic_Tac_Matrix[1][1] == Tic_Tac_Matrix[2][2])
            {
              if ( Tic_Tac_Matrix[1][1] == "0"){
               Winner_message.html(" X is Winner");
              game_over=true;

              }
              else if( Tic_Tac_Matrix[1][1]=="1"){
               Winner_message.html("O is Winner");
              game_over=true;
              }
            }
   }

   if( Tic_Tac_Matrix[0][2]  == Tic_Tac_Matrix[1][1])
   { if(Tic_Tac_Matrix[1][1] == Tic_Tac_Matrix[2][0])
            {
              if ( Tic_Tac_Matrix[1][1] == "0"){
               Winner_message.html(" X is Winner");
              game_over=true;

              }
              else if( Tic_Tac_Matrix[1][1]=="1"){
               Winner_message.html("O is Winner");
              game_over=true;
              }
            }
   }

}

 try{
    $('body').click( function(event) {
    if(!game_over)
    {
    if      ($(event.target).is('#block_0') &&  MouseClicked.length <= 9 && !/^[0-9a-zA-Z]+$/.test($('#block_0').html())) {


       if(MouseClicked[MouseClicked.length -1] % 2 == 0)
       {
           var log = $('#' + event.target.id );
           log.html('X');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)

       }
       else
       {
           var log = $('#' + event.target.id );
           log.html('O');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)
       }



    }
    else if ($(event.target).is('#block_1') &&  MouseClicked.length <= 9 && !/^[0-9a-zA-Z]+$/.test($('#block_1').html())) {

       if(MouseClicked[MouseClicked.length -1] % 2 == 0)
       {
           var log = $('#' + event.target.id );
           log.html('X');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)

       }
       else
       {
           var log = $('#' + event.target.id );
           log.html('O');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)
       }



    }
    else if ($(event.target).is('#block_2') &&  MouseClicked.length <= 9 && !/^[0-9a-zA-Z]+$/.test($('#block_2').html())) {


       if(MouseClicked[MouseClicked.length -1] % 2 == 0)
       {
           var log = $('#' + event.target.id );
           log.html('X');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)

       }
       else
       {
           var log = $('#' + event.target.id );
           log.html('O');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)
       }



    }
    else if ($(event.target).is('#block_3') &&  MouseClicked.length <= 9 && !/^[0-9a-zA-Z]+$/.test($('#block_3').html())) {


       if(MouseClicked[MouseClicked.length -1] % 2 == 0)
       {
           var log = $('#' + event.target.id );
           log.html('X');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)

       }
       else
       {
           var log = $('#' + event.target.id );
           log.html('O');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)
       }



    }
    else if ($(event.target).is('#block_4') &&  MouseClicked.length <= 9 && !/^[0-9a-zA-Z]+$/.test($('#block_4').html())) {

       if(MouseClicked[MouseClicked.length -1] % 2 == 0)
       {
           var log = $('#' + event.target.id );
           log.html('X');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)

       }
       else
       {
           var log = $('#' + event.target.id );
           log.html('O');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)
       }



    }
    else if ($(event.target).is('#block_5') &&  MouseClicked.length <= 9 && !/^[0-9a-zA-Z]+$/.test($('#block_5').html())) {

       if(MouseClicked[MouseClicked.length -1] % 2 == 0)
       {
           var log = $('#' + event.target.id );
           log.html('X');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)

       }
       else
       {
           var log = $('#' + event.target.id );
           log.html('O');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)
       }



    }
    else if ($(event.target).is('#block_6') &&  MouseClicked.length <= 9 && !/^[0-9a-zA-Z]+$/.test($('#block_6').html())) {


       if(MouseClicked[MouseClicked.length -1] % 2 == 0)
       {
           var log = $('#' + event.target.id );
           log.html('X');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)

       }
       else
       {
           var log = $('#' + event.target.id );
           log.html('O');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)
       }



    }
    else if ($(event.target).is('#block_7') &&  MouseClicked.length <= 9 && !/^[0-9a-zA-Z]+$/.test($('#block_7').html())) {


       if(MouseClicked[MouseClicked.length -1] % 2 == 0)
       {
           var log = $('#' + event.target.id );
           log.html('X');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)

       }
       else
       {
           var log = $('#' + event.target.id );
           log.html('O');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)
       }



    }
    else if ($(event.target).is('#block_8') &&  MouseClicked.length <= 9 && !/^[0-9a-zA-Z]+$/.test($('#block_8').html())) {


       if(MouseClicked[MouseClicked.length -1] % 2 == 0)
       {
           var log = $('#' + event.target.id );
           log.html('X');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)

       }
       else
       {
           var log = $('#' + event.target.id );
           log.html('O');
           MouseClicked.push(MouseClicked[MouseClicked.length -1]+1)
       }



    }
    else {}
    Check_Winner();
    }

   });
  }
 catch(ex)
    {
         console.log("Error is " + ex.message);
    }

function reset_board()
{
  for(i=0;i<9;i++)
  {
           var log = $('#block_'+ i.toString());
           log.html("");


  }

  MouseClicked=[0];
  game_over=false;
  Winner_message.html("");
}
