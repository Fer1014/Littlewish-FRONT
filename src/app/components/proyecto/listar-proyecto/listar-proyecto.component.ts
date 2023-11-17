import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-listar-proyecto',
  templateUrl: './listar-proyecto.component.html',
  styleUrls: ['./listar-proyecto.component.css']
})
export class ListarProyectoComponent implements OnInit{
  dataSource: MatTableDataSource<Proyecto> = new MatTableDataSource();
  displayedColumns: string[] =
  ['codigo','Titulo', 'Fecha Inicio','Fecha Fin'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private pS:ProyectoService){}

  ngOnInit(): void {
    this.pS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
