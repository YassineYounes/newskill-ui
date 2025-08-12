import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {registerOne} from 'src/app/models/model';
import {DataService} from 'src/app/shared/service/data/data.service';
import {routes} from 'src/app/shared/service/routes/routes';
import {RegistrationService} from 'src/app/services/registration.service';
import {RegistrationData} from 'src/app/models/register.model';

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss']
})
export class RegisterStepOneComponent implements OnInit {
  public registerOne: registerOne[] = [];
  public routes = routes;
  public registrationForm!: FormGroup;
  public registrationData!: RegistrationData;
  public errors: string[] = [];
  public selectedRole: 'Student' | 'Instructor' = 'Student';
  
  public registerOneOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1170: {
        items: 4
      }
    },
  };

  constructor(
    private DataService: DataService, 
    public router: Router,
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.registerOne = this.DataService.registerOne;
  }

  ngOnInit(): void {
    this.initializeForm();
    this.loadExistingData();
  }

  initializeForm(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: [''],
      userName: [''],
      role: ['Student', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  loadExistingData(): void {
    this.registrationData = this.registrationService.getRegistrationData();
    this.selectedRole = this.registrationData.role || 'Student';
    
    this.registrationForm.patchValue({
      firstName: this.registrationData.firstName || '',
      lastName: this.registrationData.lastName || '',
      email: this.registrationData.email || '',
      password: this.registrationData.password || '',
      confirmPassword: this.registrationData.confirmPassword || '',
      phoneNumber: this.registrationData.phoneNumber || '',
      userName: this.registrationData.userName || '',
      role: this.registrationData.role || 'Student'
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      if (confirmPassword?.hasError('passwordMismatch')) {
        confirmPassword.setErrors(null);
      }
    }
    
    return null;
  }

  onRoleChange(role: 'Student' | 'Instructor'): void {
    this.selectedRole = role;
    this.registrationForm.patchValue({ role });
  }

  registerPath(): void {
    this.errors = [];
    
    if (this.registrationForm.valid) {
      // Update registration service with form data
      const formData = this.registrationForm.value;
      this.registrationService.updateRegistrationData(formData);
      
      // Navigate to next step
      this.registrationService.nextStep();
      this.router.navigate(['/auth/register-page/register-step-two']);
    } else {
      // Collect and display validation errors
      this.collectValidationErrors();
      this.markFormGroupTouched();
    }
  }

  private collectValidationErrors(): void {
    this.errors = [];
    
    if (this.registrationForm.get('firstName')?.hasError('required')) {
      this.errors.push('First name is required');
    }
    if (this.registrationForm.get('lastName')?.hasError('required')) {
      this.errors.push('Last name is required');
    }
    if (this.registrationForm.get('email')?.hasError('required')) {
      this.errors.push('Email is required');
    }
    if (this.registrationForm.get('email')?.hasError('email')) {
      this.errors.push('Please enter a valid email address');
    }
    if (this.registrationForm.get('password')?.hasError('required')) {
      this.errors.push('Password is required');
    }
    if (this.registrationForm.get('password')?.hasError('minlength')) {
      this.errors.push('Password must be at least 8 characters long');
    }
    if (this.registrationForm.get('confirmPassword')?.hasError('required')) {
      this.errors.push('Password confirmation is required');
    }
    if (this.registrationForm.get('confirmPassword')?.hasError('passwordMismatch')) {
      this.errors.push('Passwords do not match');
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.registrationForm.controls).forEach(key => {
      this.registrationForm.get(key)?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.registrationForm.get(fieldName);
    if (field?.touched && field?.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['passwordMismatch']) return 'Passwords do not match';
    }
    return '';
  }
}
