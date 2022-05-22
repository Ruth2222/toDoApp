import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JetztComponent } from './jetzt/jetzt.component';
import { SpaeterComponent } from './spaeter/spaeter.component';
import { ErledigtComponent } from './erledigt/erledigt.component';
import { FortschrittComponent } from './fortschritt/fortschritt.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TodoWrapperComponent } from './todo-wrapper/todo-wrapper.component';
import { ToDoComponent } from './todo-wrapper/to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    JetztComponent,
    SpaeterComponent,
    ErledigtComponent,
    FortschrittComponent,
    NavigationComponent,
    TodoWrapperComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'jetzt', component: JetztComponent},
      {path: 'spaeter', component: SpaeterComponent},
      {path: 'erledigt', component: ErledigtComponent},
      {path: 'fortschritt', component: FortschrittComponent},
      {path: '', redirectTo: '/jetzt', pathMatch: 'full'}
  ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
