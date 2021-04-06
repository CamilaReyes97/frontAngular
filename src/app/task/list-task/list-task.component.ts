import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { IUser } from '../../models/user';
/* Llamamos el servicio en nuestro component */

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  /* Creamos una variable donde llamaremos el modelo */

  users= [] /* CREAMOS: Vamos a recibir un array de 
  usuarios */
  constructor(private userService: UserService) {

   }

  ngOnInit(): void { /* Aqui lanza la peticion de 
    traer lo usuarios sin esperar un evento */
    /* Nos suscribimos */
  this.userService.getUsers().subscribe( 
    res=>{ this.users = res}, /* Le decimos que guarde 
    en nuestro arreglo lo que nos devuelve la api osea 
    la respuesta */
    err=> console.log(err)
  )

 console.log(this.users)
}

delete(userDelete){ /* Nos pase la infoo del usuario por params */
  this.userService.deleteUser(userDelete).subscribe(
    res=>{
      const index = this.users.indexOf(userDelete) 
      /* Obtiene el id del usuario clickeado */
      if (index>-1) { /* Si lo encuentra, index nos devuel 0 es que si */
        this.users.splice(index, 1) /* Le decimos que a ese 
        usuario encontrado lo elimine, solo 1 vez*/
      } 
    }, 
    err=> console.log(err)
  )
}




}