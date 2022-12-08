import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-vuelos',
  templateUrl: './actualizar-vuelos.component.html',
  styleUrls: ['./actualizar-vuelos.component.css']
})
export class ActualizarVuelosComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private ciudadService:CiudadService,
    private router:Router
  ) { }

  ciudadId = 0;
  ciudad:any;

  ngOnInit(): void {
    this.ciudadId = this.route.snapshot.params['ciudadId'];
    this.ciudadService.obtenerVuelo(this.ciudadId).subscribe(
      (data) => {
        this.ciudad = data;
        console.log(this.ciudad);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public actualizarDatos(){
    this.ciudadService.actualizarVuelo(this.ciudad).subscribe(
      (data) => {
        Swal.fire('Vuelo actualizado','El vuelo ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/ciudades']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el vuelo','error');
        console.log(error);
      }
    )
  }

}
