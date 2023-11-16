import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormacionAcademica } from 'src/app/models/formacionacademica';
import { FormacionacademicaService } from 'src/app/services/formacionacademica.service';

@Component({
  selector: 'app-listar-formacionacademica',
  templateUrl: './listar-formacionacademica.component.html',
  styleUrls: ['./listar-formacionacademica.component.css'],
})
export class ListarFormacionacademicaComponent implements OnInit {
  dataSource: MatTableDataSource<FormacionAcademica> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'codigo',
    'secundaria',
    'universidad',
    'carrera',
  ];
  constructor(private faS: FormacionacademicaService) {}
  ngOnInit(): void {
    this.faS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.faS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
