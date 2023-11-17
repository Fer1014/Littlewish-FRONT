import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CurriculumVitae } from 'src/app/models/curriculum';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-listar-curriculum',
  templateUrl: './listar-curriculum.component.html',
  styleUrls: ['./listar-curriculum.component.css']
})
export class ListarCurriculumComponent implements OnInit {
dataSource: MatTableDataSource<CurriculumVitae> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'codigo',
    'FA',
    'accion01',
    'accion02',
  ];
  constructor(private cvS: CurriculumService) {}
  ngOnInit(): void {
    this.cvS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.cvS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.cvS.delete(id).subscribe((data) => {
      this.cvS.list().subscribe((data) => {
        this.cvS.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
