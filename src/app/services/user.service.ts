import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7138/api'; //  API URL

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/User/registration`, user);
  }
}