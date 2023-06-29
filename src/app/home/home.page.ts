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
        num: "0",
        prevNum: "",
        result: "",
        historico: ""
    }

    addNum(n:string){
        let vrf = (this.calc.num == "0" && n != ".") 
        this.calc.num = (vrf ? n : this.calc.num + n);
    }
    
    operation(op:string){
        if(this.calc.result != ""){
            this.calc.prevNum = (op != "%" ? `${this.calc.result} ${op} ` : `(${this.calc.result}/100) * `);
            this.calc.historico = (op != "%" ? `${this.calc.result} ${op} ` : `${this.calc.result} % `);
            this.calc.num = "0";
        }
        else{
            this.calc.prevNum += (op != "%" ? `${this.calc.num} ${op} ` : `(${this.calc.num}/100) * `);
            this.calc.historico = (op != "%" ? `${this.calc.num} ${op} ` : `${this.calc.num} % `);
            this.calc.num = "0";
        }            
    }

    invNum(){
        this.calc.num = (this.calc.num[0] == "-" ? this.calc.num.slice(1):"-"+this.calc.num);
    }

    rmvNum(){
        this.calc.num = this.calc.num.substring(0, this.calc.num.length -1);
        (this.calc.num.length == 0 ? this.calc.num = "0" : null);
    }

    eql(){
        this.calc.prevNum += this.calc.num;
        this.calc.result = eval(this.calc.prevNum);
        this.calc.historico += this.calc.num;
        this.calc.historico += ` = ${this.calc.result} | `;
        this.showEql();
    }

    showEql(){
        this.calc.num = this.calc.result;
    }

    clear(){
        this.calc.num = "0";
        this.calc.prevNum = "";
        this.calc.result = "";
        this.calc.historico = "";
    }


}
