import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray,FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { posNumberValidator } from './service/posNumberValidator';
import { Greedy } from './class/Greedy';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent  implements OnInit {
  greedy !: Greedy
  @Output() addGreedy: EventEmitter<Greedy> = new EventEmitter<Greedy>();
  my_form! : FormGroup
  constructor(private fb : FormBuilder, private alertController : AlertController) {
    this.my_form = this.fb.group({
      N:['',[posNumberValidator(), Validators.required]],
    })
   }

  ngOnInit() {   
  }
  onSubmit(){
    let msg : string = ''
    if(!this.my_form.valid){
      msg = 'Невірні або пусті поля'
      this.presentAlert(msg)
    }
    else{
      this.greedy = new Greedy(this.my_form.controls['N'].value)
      this.addGreedy.emit(this.greedy)
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
