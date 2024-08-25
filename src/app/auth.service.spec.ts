/*
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
*/
/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-backend-api-url'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Method to register a new user
  register(name: string, email: string, password: string, phoneNumber: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password, phoneNumber });
  }

  // Other methods...
}
*/