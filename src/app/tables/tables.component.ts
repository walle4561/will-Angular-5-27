import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { TablesService } from './tables.service';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  route = inject(ActivatedRoute);
  httpClient = inject(HttpClient);
  tableService = inject(TablesService);
  data$ = this.route.queryParamMap
  .pipe(
    map((params) => +(params.get('num') || '10')),
    switchMap((num) => this.tableService.getData(num))
  );
  ngOnInit(): void {
  }
}
