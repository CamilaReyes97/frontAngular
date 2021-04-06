import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IUser} from '../models/user'




/* Importamos los metodos HTTP */

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* Creamos la variable de la ruta de nuestra API */
  private userUrl= "http://localhost:3000/"

  public userSelect: IUser;
  users: IUser[];
  constructor(private http: HttpClient) 
  /* Inyectamos nuestro modulo http */
  { }

  createUser(user){/* Creamos la funcion que va a recibir unos parametros */
    return this.http.post<any>(this.userUrl+ "user/create", user)
    /* retorna un servicio el cual va a ser 
    un post, en esta url con esta ruta y va a requerir 
    unos parametros que son user */
  }

  editUser(user, modelo){
    return this.http.put<any>(this.userUrl + "user/update/"+ user._id, modelo).pipe((res)=>res)
  }

  deleteUser(user){ /* El id que vamos a borrar */
    const _id= user._id /* Guardamos ese id en una constante */
    return this.http.delete<any>(this.userUrl+ "user/delete/" + _id)
  }

  getUsers(){
    return this.http.get<any>(this.userUrl+ "user/get")
    
  }

  
}
