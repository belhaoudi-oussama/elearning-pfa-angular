import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-router.module';
import { MaterialModule } from 'src/app/shared/materials.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [RegisterRoutingModule.components],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class RegisterModule { }
