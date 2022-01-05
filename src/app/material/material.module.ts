import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatBadgeModule} from '@angular/material/badge'
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from "@angular/material/grid-list"
import { MatExpansionModule } from '@angular/material/expansion';


const MaterialComponent = [
  MatButtonModule,
  MatIconModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule
]

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
