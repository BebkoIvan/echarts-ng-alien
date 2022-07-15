import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  devices = [
    {
      title: 'SPo2',
      description: 'Blood Saturation Level History',
      url: ''
    },
    {
      title: 'Blood Pressure',
      description: 'Blood Pressure History',
      url: ''
    },
    {
      title: 'ECG',
      description: 'ECG History',
      url: ''
    },
    {
      title: 'Temperature',
      description: 'Temperature History',
      url: ''
    },
    {
      title: 'BMI',
      description: 'BMI History',
      url: ''
    },
    {
      title: 'Glucose Level',
      description: 'Glucose Level History',
      url: ''
    },
  ]
}
