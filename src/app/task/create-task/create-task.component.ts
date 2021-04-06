import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../../service/user.service';

/* Importamos nuestro servicio y modelo para usarlo */

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  public modeloUsuario: IUser;
  /* Creamos una variable donde llamaremos el modelo */

  /* Lo inyectamos por constructor */
  constructor( private userService: UserService) { 
    this.modeloUsuario= new IUser(0, '', ''); 
    /* Creamos una instancia del modelo y lo inicializamos */
  }

  ngOnInit(): void {
  }
  /* Cremos la funcion que nos suscribira al servicio */
  crear(){
    this.userService.createUser(this.modeloUsuario).subscribe(
      res=>{ /* Nos devolvera si es correcto o no */
        console.log("Usuario registrado!!", res)
      },
      err=> console.log(err) 
      
    )
  }
}
