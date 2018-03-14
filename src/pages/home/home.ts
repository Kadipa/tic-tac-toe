import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public checkCon="";//for player input event
  public count=0;
  public num="123456789";
  public f= 0; //first or second
  public autonum="";//for automatic ev
  public flag=0; //to stop when the game is over

  constructor(public navCtrl: NavController) {
  }



 play(id){
      var a= id;//to choose first or not /default
      var o ="O";
      var x="X";
      document.getElementById(id).style.textAlign = "center";
      var res= x.fontsize (7);
      var las= o.fontsize(7);
      this.count +=1;
      if(this.count==1){
          if (a !=12 && this.f==0 ) //for first player
                {

                  if(a !=11 && this.f==0){
                    var tile = <HTMLInputElement> document.getElementById(a);//prevent double click
                    tile.disabled = true;
                  //document.getElementById(id).style ="center";
                  document.getElementById(id).innerHTML= res;
                  this.checkCon= this.checkCon.concat(a);
                  this.num=this.num.replace(a,"");
                  //alert(this.checkCon+","+this.num);
                  //  if(a ==5) //center  case
                  //  {

                    var arr=this.num.split("");
                    var rand = arr[Math.floor(Math.random() * arr.length)];
                    document.getElementById(rand).innerHTML= las;
                    var t = <HTMLInputElement> document.getElementById(rand);//prevent clicking O
                    t.disabled = true;
                    this.autonum=this.autonum.concat(rand);
                    this.num=this.num.replace(rand,"");
                      //}

                 }else{ ///for choose first player
                   this.count= this.count-1;// to make the last move for first player
                var t = <HTMLInputElement> document.getElementById(12);//prevent clicking O
                t.disabled = true;
                   }
                 }
            else if(a==12){//for second player
              this.count=this.count-1;
              this.f=1;
              var t = <HTMLInputElement> document.getElementById(11);//prevent clicking O
              t.disabled = true;
              var arr=this.num.split("");
              var rand = arr[Math.floor(Math.random() * arr.length)];
              document.getElementById(rand).innerHTML= res;
              var t = <HTMLInputElement> document.getElementById(rand);//prevent clicking O
              t.disabled = true;
              this.autonum=this.autonum.concat(rand);
              this.num=this.num.replace(rand,"");
            }
    }
    else if (this.count==2)
            {  if (this.f==1) //for second player
                {
                  var tile = <HTMLInputElement> document.getElementById(a);//prevent double click
                    tile.disabled = true;
                    //document.getElementById(id).style ="center";
                    document.getElementById(id).innerHTML= las;
                    this.checkCon= this.checkCon.concat(a);
                    this.num=this.num.replace(a,"");
                    this.checkWIn(this.checkCon,this.autonum, this.num,this.count);
                    if(this.flag ==2){confirm("You Lost The Game.\n Do You Want to Play Again");}
                      if(this.flag !==1 && this.count<6)  {
                          var arr=this.num.split("");
                            var rand = arr[Math.floor(Math.random() * arr.length)];
                            document.getElementById(rand).innerHTML= res;
                            var t = <HTMLInputElement> document.getElementById(rand);//prevent clicking O
                            t.disabled = true;
                            this.autonum=this.autonum.concat(rand);
                            this.num=this.num.replace(rand,"");
                          }
                  }
               if (this.f==0){ //for first player
                          var tile = <HTMLInputElement> document.getElementById(a);//prevent double click
                          tile.disabled = true;
                            //document.getElementById(id).style ="center";
                            document.getElementById(id).innerHTML= res;
                            this.checkCon= this.checkCon.concat(a);
                            this.num=this.num.replace(a,"");
                            //alert(this.checkCon+","+this.num);
                            //  if(a ==5) //center  case
                            //  {

                             var arr=this.num.split("");
                              var rand = arr[Math.floor(Math.random() * arr.length)];
                              document.getElementById(rand).innerHTML= las;
                              var t = <HTMLInputElement> document.getElementById(rand);//prevent clicking O
                              t.disabled = true;
                               this.autonum=this.autonum.concat(rand);
                              this.num=this.num.replace(rand,"");
                }
              }
else if (this.count>2)
{
          if (this.f==0 && this.count ==5){ //for first player
                     var tile = <HTMLInputElement> document.getElementById(a);//prevent double click
                     tile.disabled = true;
                       //document.getElementById(id).style ="center";
                       document.getElementById(id).innerHTML= res;
                       this.checkCon= this.checkCon.concat(a);
                       this.num=this.num.replace(a,"");
                       this.checkWIn(this.checkCon,this.autonum, this.num,this.count);
                     if (this.flag == 0){ confirm(" Draw \n Do You Want to play again?");}
                     if(this.flag ==1){confirm("You Win The Game.\n Do You Want to Play Again?");}


                    }
         if (this.f==1) //for second player
               {
                         var tile = <HTMLInputElement> document.getElementById(a);//prevent double click
                           tile.disabled = true;
                           //document.getElementById(id).style ="center";
                           document.getElementById(id).innerHTML= las;
                           this.checkCon= this.checkCon.concat(a);
                           this.num=this.num.replace(a,"");
                          this.checkWIn(this.checkCon,this.autonum, this.num,this.count);
                          if(this.flag ==1){confirm("You Win The Game.\n Do You Want to Play Again?");}
                          else if(this.flag !==1 && this.flag !==2 && this.count<6)  {
                         var arr=this.num.split("");
                           var rand = arr[Math.floor(Math.random() * arr.length)];
                           document.getElementById(rand).innerHTML= res;
                           var t = <HTMLInputElement> document.getElementById(rand);//prevent clicking O
                           t.disabled = true;
                           this.autonum=this.autonum.concat(rand);
                           this.num=this.num.replace(rand,"");
                         }
                         this.checkWIn(this.checkCon,this.autonum, this.num,this.count);
                         if(this.flag ==2){confirm("You Lost The Game.\n Do You Want to Play Again?");}
                         if (this.count==5 && this.flag == 0){confirm("Draw.\n Do You Want to Play Again?");}
                 }
                 if (this.f==0 && this.count <5){ //for first player
                            var tile = <HTMLInputElement> document.getElementById(a);//prevent double click
                            tile.disabled = true;
                              //document.getElementById(id).style ="center";
                              document.getElementById(id).innerHTML= res;
                              this.checkCon= this.checkCon.concat(a);
                              this.num=this.num.replace(a,"");
                              this.checkWIn(this.checkCon,this.autonum, this.num,this.count);
                              if(this.flag ==1){confirm("You Win The Game.\n Do You Want to Play Again?");}
                              if(this.flag !==1 && this.count<6)  {
                               var arr=this.num.split("");
                                var rand = arr[Math.floor(Math.random() * arr.length)];
                                document.getElementById(rand).innerHTML= las;
                                var t = <HTMLInputElement> document.getElementById(rand);//prevent clicking O
                                t.disabled = true;
                                 this.autonum=this.autonum.concat(rand);
                                this.num=this.num.replace(rand,"");
                              }

                            this.checkWIn(this.checkCon,this.autonum, this.num,this.count);
                          //  alert(this.count+","+this.flag +","+this.autonum);
                            if(this.flag ==2){confirm("You Lost The Game.\n Do You Want to Play Again?");}
                  }




}


//{ alert("Draw");}
//alert(this.count+","+this.checkCon+","+this.autonum+ ","+this.num)
//document.getElementById('x').style.visibility="visible";
//var x=    document.getElementById("x");
//document.body.appendChild(x);
//x.className = 'show';
  //  document.getElementById("col5").innerHTML = x.replace('30x30', '25x25');

}
checkWIn(a,b,c,d){
  if (a.includes('1') && a.includes('2') && a.includes('3') ){

    this.flag=1;
    this.count=6;//to terminate automatic play
  }
  else if (a.includes('4') && a.includes('5') && a.includes('6') ){

    this.flag=1;
      this.count=6;

  }
else   if (a.includes('7') && a.includes('8') && a.includes('9') ){

    this.flag=1;
      this.count=6;

  }
else  if (a.includes('1') && a.includes('4') && a.includes('7') ){

    this.flag=1;
      this.count=6;
  }
  else if (a.includes('5') && a.includes('2') && a.includes('8') ){

    this.flag=1;
      this.count=6;
  }
  else if (a.includes('9') && a.includes('6') && a.includes('3') ){

    this.flag=1;
      this.count=6;
  }
  else if (a.includes('1') && a.includes('5') && a.includes('9') ){

    this.flag=1;
      this.count=6;
  }
  else if (a.includes('3') && a.includes('5') && a.includes('7') ){

    this.flag=1;
      this.count=6;
  }
  else if (b.includes('1') && b.includes('2') && b.includes('3') ){
    this.flag=2;
      this.count=6;
  }
else  if (b.includes('4') && b.includes('5') && b.includes('6') ){

    this.flag=2;
      this.count=6;
  }
else  if (b.includes('7') && b.includes('8') && b.includes('9') ){

    this.flag=2;
      this.count=6;
  }
else  if (b.includes('1') && b.includes('4') && b.includes('7') ){

    this.flag=2;
      this.count=6;
  }
  else if (b.includes('5') && b.includes('2') && b.includes('8') ){

    this.flag=2;
      this.count=6;
  }
  else if (b.includes('9') && b.includes('3') && b.includes('3') ){

    this.flag=2;
      this.count=6;
  }
else  if (b.includes('1') && b.includes('5') && b.includes('9') ){

    this.flag=2;
      this.count=6;
  }
else  if (b.includes('3') && b.includes('5') && b.includes('7') ){

    this.flag=2;
      this.count=6;
  }
  else {this.flag =0;}

 //alert(a+","+b+","+c +","+d +","+this.flag );
}

}
