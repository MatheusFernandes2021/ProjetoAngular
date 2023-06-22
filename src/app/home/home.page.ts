import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HomePage {

      // Funções calculadora
      calc = {
        num:"0",
        prevNum:"",
        result:"",
    }

    addNum(n:string){
      let vrf = (this.calc.num == "0" && n != ".") 
      this.calc.num  = (vrf ? n : this.calc.num + n);
    }
    
    operation(op:string){
        this.calc.prevNum += `${this.calc.num}${op}`;
    }

    invNum(){
        this.calc.num = (this.calc.num[0] == "-" ? this.calc.num.slice(1):"-"+this.calc.num)
    }
    rmvNum(){
        this.calc.num.slice(0,-1);
    }
    eql(){
        this.calc.prevNum += this.calc.num;
        this.calc.result = eval(this.calc.prevNum)
    }

    clear(){
        this.calc.num="0";
        this.calc.prevNum="";
        this.calc.result="";
    }

    // att:(){

    // }
}
