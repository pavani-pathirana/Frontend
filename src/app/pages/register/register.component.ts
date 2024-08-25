import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
     // name: ['', [Validators.required, Validators.name]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone_number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value;
      this.userService.registerUser(user).subscribe(response => {
        console.log('User registered:', response);
        
      }, error => {
        console.error('Registration failed:', error);
       
      });
    }
  }
}
