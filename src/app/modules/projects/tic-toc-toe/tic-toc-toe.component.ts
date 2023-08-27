import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tic-toc-toe',
  templateUrl: './tic-toc-toe.component.html',
  styleUrls: ['./tic-toc-toe.component.scss']
})
export class TicTocToeComponent {
  enable!:boolean
  congratsCheck!:boolean
  formGroup!:FormGroup
  
  constructor(private fb:FormBuilder){
    this.formGroup = fb.group({
      playerO:['',Validators.required],
      playerX:['',Validators.required]
    })
  }
  symbol:any;
  message:any;
  winner:any;
  counter:number=0; // odd number is 'O' ever number is 'X'
  array:any[] = [
    "-","-","-",
    "-","-","-",
    "-","-","-"
  ]

  onClick(index:any){
    this.counter++;
    this.symbol = (this.counter%2==0)?  'X' : 'O'
    this.array[index]=this.symbol
      this.gameOverCheck()
  }
  
  gameOverCheck() {
    if (
      (this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[0] !== "-") ||
      (this.array[3] === this.array[4] && this.array[4] === this.array[5] && this.array[3] !== "-") ||
      (this.array[6] === this.array[7] && this.array[7] === this.array[8] && this.array[6] !== "-") ||
      (this.array[0] === this.array[3] && this.array[3] === this.array[6] && this.array[0] !== "-") ||
      (this.array[1] === this.array[4] && this.array[4] === this.array[7] && this.array[1] !== "-") ||
      (this.array[2] === this.array[5] && this.array[5] === this.array[8] && this.array[2] !== "-") ||
      (this.array[0] === this.array[4] && this.array[4] === this.array[8] && this.array[0] !== "-") ||
      (this.array[2] === this.array[4] && this.array[4] === this.array[6] && this.array[2] !== "-")
    ) {
      this.message = 'Game Over';
      this.congratsCheck =true;
    }

    if(this.message){
      if(this.counter%2==0){
        this.winner = this.formGroup.value.playerX
      }
      else{
        this.winner = this.formGroup.value.playerO
      }
    }
  }

  toEnable(){
    if (this.formGroup.valid) {
      this.enable = true;
      
    }
  }

  refreshPage() {
    window.location.reload();
  }
  

}
