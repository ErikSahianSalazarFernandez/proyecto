import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  productos:any = [

  ]
  constructor(private productoSerce:ProductoService) { }

  ngOnInit(): void {
    this.productoSerce.listarProductos().subscribe(
      (dato:any) => {
        this.productos = dato;
        console.log(this.productos);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los productos','error');
      }
    )
  }

  eliminarProducto(productoId:any){
    Swal.fire({
      title:'Eliminar producto',
      text:'¿Estás seguro de eliminar el producto?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si',
      cancelButtonText:'No'
    }).then((result) => {
      if(result.isConfirmed){
        this.productoSerce.eliminarProducto(productoId).subscribe(
          (data) => {
            this.productos = this.productos.filter((producto:any) => producto.productoId != productoId);
            Swal.fire('Producto elimiado','El producto ha sido eliminado','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar el producto','error');
          }
        )
      }
    })
  }

}
