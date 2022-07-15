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
      url: 'spo'
    },
    {
      title: 'Blood Pressure',
      description: 'Blood Pressure History',
      url: 'bp'
    },
    {
      title: 'ECG',
      description: 'ECG History',
      url: 'ecg'
    },
    {
      title: 'Temperature',
      description: 'Temperature History',
      url: 'temperature'
    },
    {
      title: 'BMI',
      description: 'BMI History',
      url: 'bmi'
    },
    {
      title: 'Glucose Level',
      description: 'Glucose Level History',
      url: 'gl'
    },
  ]
}
