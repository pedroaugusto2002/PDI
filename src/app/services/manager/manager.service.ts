import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IManager } from '../../interfaces/manager/interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private httpClient: HttpClient) { }

  createManager(manager: IManager): Observable<IManager> {
    manager._id = uuidv4();
    this.getManager().subscribe((manager) => {
      console.log(manager)
    })
    return this.httpClient.post<IManager>('http://localhost:3000/manager', manager)
  }
  getManager(): Observable<IManager[]> {
    return this.httpClient.get<IManager[]>('http://localhost:3000/manager')
  }
}
