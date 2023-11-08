import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tarjeta } from 'src/app/models/tarjeta';
import { TarjetasService } from 'src/app/services/tarjetas.service';

@Component({
  selector: 'app-tarjeta-listar',
  templateUrl: './tarjeta-listar.component.html',
  styleUrls: ['./tarjeta-listar.component.css']
})
export class TarjetaListarComponent {
  
  dataSource: MatTableDataSource<Tarjeta> = new MatTableDataSource();
  displayedColumns: string[] =
  ['codigo','numerotarjeta', 'fechaexp','nombre','apellido','cvv','estado','actualizar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private uS: TarjetasService) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.uS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    }); 
  }

  eliminar(id: number){
    this.uS.eliminar(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      });
    });
  }

}
