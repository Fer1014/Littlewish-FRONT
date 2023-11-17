import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pago } from 'src/app/models/pago';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  dataSource: MatTableDataSource<Pago> = new MatTableDataSource();
  displayedColumns: string[] =
  ['codigo','monto', 'fecha','tarjeta','proyecto'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private pS:PagoService){}

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
