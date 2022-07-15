import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { optionsMap } from './utils/devices-chart-options';

@Injectable({
  providedIn: 'root'
})
export class ChartOptionsResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const device = route.paramMap.get('device'); 
    if (device) {
      return of(optionsMap[device as keyof typeof optionsMap]);
    }
    return of(null);
  }
}
