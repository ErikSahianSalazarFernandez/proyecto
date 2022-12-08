import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {

  producto = {
    nombre : '',
    precio : '',
    cantidad : '',
    stock : ''
  }

  constructor(private productoService:ProductoService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.producto.nombre.trim() == '' || this.producto.nombre == null){
      this.snack.open("El nombre es requerido !!",'',{
        duration:3000
      })
      return ;
    }

    this.productoService.agregarProducto(this.producto).subscribe(
      (dato:any) => {
        this.producto.nombre = '';
        this.producto.precio = '';
        this.producto.cantidad = '';
        this.producto.stock = '';
        Swal.fire('Producto agregado','El producto ha sido agregado con éxito','success');
        this.router.navigate(['/admin/ciudades']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar el producto','error')
      }
    )
  }

}
