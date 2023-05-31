import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../header/header.module';
import { InputsModule } from '../inputs/inputs.module';
import { Greedy } from '../inputs/class/Greedy';
import { IShow } from './interface/IShow';
import { Show_website } from './class/Show_web';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderModule, InputsModule, CommonModule],
})
export class HomePage {
  show_update : boolean = false
  greedy : Greedy = new Greedy(0);
  shower: IShow = new Show_website()
  counts: {[key: string]: number} = {"64": 0,"32": 0,"16": 0,"8": 0,"4": 0,"2": 0,"1": 0}
  constructor() { }
  ngOnInit() {}
  add_Greedy(event : any){
    if (event as Greedy){
      this.greedy = event as Greedy
      this.greedy.calculate()
      this.shower.show_nominals("64,32,16,8,4,2,1")
      this.shower.show_sum(this.greedy.sum.toFixed(0))
      this.count_nominals()
    }
    else{
      throw new Error("Event is not a Greedy type")
    }
  }
  count_nominals(){
    let s = ""
    for (let index = 0; index < this.greedy.nominals.length; index++) {
      if(this.greedy.nominals_count[index] > 0){
        this.counts[this.greedy.nominals[index].toFixed(0)] = this.greedy.nominals_count[index]
        s += this.greedy.nominals[index].toFixed(0) + ": "+ this.counts[this.greedy.nominals[index].toFixed(0)] + " одиниць, "
      }
      this.shower.show_count(s)
    }
  
  }
  check_noms( i:number){
    if  (i <= 0){
      console.log("True")
      return true}
    else return false
  }
  update(){
    this.show_update = true
  }
  
}
