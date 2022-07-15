import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartPageComponent implements OnInit {
  
  options: any;

  constructor(private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.options = this.activatedRoute.snapshot.data['preFetchData']
  }

 

}
