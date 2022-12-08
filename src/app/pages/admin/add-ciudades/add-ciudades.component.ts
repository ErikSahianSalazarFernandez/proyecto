import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-add-ciudades',
  templateUrl: './add-ciudades.component.html',
  styleUrls: ['./add-ciudades.component.css']
})
export class AddCiudadesComponent implements OnInit {

  ciudad = {
    aeropuerto : '',
    estado : '',
    fecha : '',
    pasajeros : '',
    tipo_vuelo : ''
  }

  constructor(private ciudadService:CiudadService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.ciudad.estado.trim() == '' || this.ciudad.estado == null){
      this.snack.open("El estado es requerido !!",'',{
        duration:3000
      })
      return ;
    }

    this.ciudadService.agregarCiudad(this.ciudad).subscribe(
      (dato:any) => {
        this.ciudad.aeropuerto = '';
        this.ciudad.estado = '';
        this.ciudad.fecha = '';
        this.ciudad.pasajeros = '';
        this.ciudad.tipo_vuelo = '';
        Swal.fire('Ciudad agregada','La ciudad ha sido agregada con éxito','success');
        this.router.navigate(['/admin/ciudades']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar la ciudad','error')
      }
    )
  }

}
