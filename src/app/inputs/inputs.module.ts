import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InputsComponent } from './inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule,],
    declarations: [InputsComponent],
    exports: [InputsComponent]
})

export class InputsModule { }