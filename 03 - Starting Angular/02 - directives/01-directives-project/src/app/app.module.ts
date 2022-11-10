import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
  declarations: [AppComponent, CardComponent, NgIfComponent, NgForComponent, NgSwitchComponent, NgClassComponent, NgStyleComponent, NgModelComponent, NgTemplateComponent, NgContentComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
