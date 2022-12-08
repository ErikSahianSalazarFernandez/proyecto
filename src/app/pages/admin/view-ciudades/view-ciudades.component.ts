import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-view-ciudades',
  templateUrl: './view-ciudades.component.html',
  styleUrls: ['./view-ciudades.component.css']
})
export class ViewCiudadesComponent implements OnInit {

  ciudades:any = [

  ]
  constructor(private ciudadService:CiudadService) { }

  ngOnInit(): void {
    this.ciudadService.listarCiudades().subscribe(
      (dato:any) => {
        this.ciudades = dato;
        console.log(this.ciudades);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar las ciudades','error');
      }
    )
  }

  cancelarVuelo(ciudadId:any){
    Swal.fire({
      title:'Cancelar vuelo',
      text:'¿Estás seguro de cancelar el vuelo?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si',
      cancelButtonText:'No'
    }).then((result) => {
      if(result.isConfirmed){
        this.ciudadService.cancelarVuelo(ciudadId).subscribe(
          (data) => {
            this.ciudades = this.ciudades.filter((ciudad:any) => ciudad.ciudadId != ciudadId);
            Swal.fire('Vuelo cancelado','El vuelo ha sido cancelado','success');
          },
          (error) => {
            Swal.fire('Error','Error al cancelar el vuelo','error');
          }
        )
      }
    })
  }

}
