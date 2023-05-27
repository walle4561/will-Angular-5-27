import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs' 

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  route = inject(ActivatedRoute);
  type:any;
  time = new Date();
  timer = interval(1000);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type') || null;
    })
  }
}
