import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'
/* Modulo de rutas de angular y sus rutas*/


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from "@angular/forms";
/* Importamos el modulo de forms para poder traer los datos del form */
import { UserService } from './service/user.service';
/* Importamos el servicio para poderlo usar en los componentes */



const appRoutes: Routes = [
  /* Le indicamos que ruta utilizaremos y el 
  componente que se llamara */
  {path: 'lista', component: ListTaskComponent}, 
  {path: 'crear', component: CreateTaskComponent},
  {path: '', redirectTo: '/lista', pathMatch: 'full'} 
  /* En caso que sea vacia la url lo redirija nuevamente 
  a lista si se encuenta en este */
  
] /* Es un array de rutas, aqui las definimos */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule /* Lo importamos */
  
  ],
  providers: [UserService],  
  /* llamamos nuestro servicio */
  bootstrap: [AppComponent]
})
export class AppModule { }
