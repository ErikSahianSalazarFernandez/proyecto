import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http:HttpClient) { }

  public listarCiudades(){
    return this.http.get(`${baserUrl}/ciudad/`);
  }

  public agregarCiudad(ciudad:any){
    return this.http.post(`${baserUrl}/ciudad/`,ciudad);
  }

  public cancelarVuelo(cuidadId:any){
    return this.http.delete(`${baserUrl}/ciudad/${cuidadId}`);
  }

  public obtenerVuelo(cuidadId:any){
    return this.http.get(`${baserUrl}/ciudad/${cuidadId}`);
  }

  public actualizarVuelo(ciudad:any){
    return this.http.put(`${baserUrl}/ciudad/`,ciudad);
  }
}
