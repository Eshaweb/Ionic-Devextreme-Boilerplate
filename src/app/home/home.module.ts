import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular/ui/button'; 

//Imports the entire DevExtreme
import { DevExtremeModule } from 'devextreme-angular'; 
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,DevExtremeModule,DxButtonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
