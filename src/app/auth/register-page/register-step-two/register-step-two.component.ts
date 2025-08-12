import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {registerTwo} from 'src/app/models/model';
import {DataService} from 'src/app/shared/service/data/data.service';
import {routes} from 'src/app/shared/service/routes/routes';
import {RegistrationService} from 'src/app/services/registration.service';
import {RegistrationData} from 'src/app/models/register.model';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.scss']
})
export class RegisterStepTwoComponent implements OnInit {
  public registerTwo: registerTwo[] = [];
  public routes = routes;
  public professionalForm!: FormGroup;
  public registrationData!: RegistrationData;
  public errors: string[] = [];
  public isInstructor = false;

  public registerTwoOwlOptions: OwlOptions = {
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
    this.registerTwo = this.DataService.registerTwo;
  }

  ngOnInit(): void {
    this.initializeForm();
    this.loadExistingData();
  }

  initializeForm(): void {
    this.professionalForm = this.formBuilder.group({
      title: [''],
      bio: [''],
      website: [''],
      facebook: [''],
      twitter: [''],
      instagram: [''],
      linkedin: [''],
      youtube: [''],
      tiktok: ['']
    });
  }

  loadExistingData(): void {
    this.registrationData = this.registrationService.getRegistrationData();
    this.isInstructor = this.registrationData.role === 'Instructor';
    
    // Add required validation for title if instructor
    if (this.isInstructor) {
      this.professionalForm.get('title')?.setValidators([Validators.required]);
      this.professionalForm.get('bio')?.setValidators([Validators.required]);
    }
    
    this.professionalForm.patchValue({
      title: this.registrationData.title || '',
      bio: this.registrationData.bio || '',
      website: this.registrationData.website || '',
      facebook: this.registrationData.facebook || '',
      twitter: this.registrationData.twitter || '',
      instagram: this.registrationData.instagram || '',
      linkedin: this.registrationData.linkedin || '',
      youtube: this.registrationData.youtube || '',
      tiktok: this.registrationData.tiktok || ''
    });
  }

  directPath(): void {
    this.errors = [];
    
    if (this.isInstructor && !this.professionalForm.valid) {
      this.collectValidationErrors();
      this.markFormGroupTouched();
      return;
    }
    
    // Update registration service with form data
    const formData = this.professionalForm.value;
    this.registrationService.updateRegistrationData(formData);
    
    // Navigate to final step (skipping steps 3 and 4 for now)
    this.registrationService.setCurrentStep(5);
    this.router.navigate(['/auth/register-page/register-step-five']);
  }

  goBack(): void {
    // Save current form data
    const formData = this.professionalForm.value;
    this.registrationService.updateRegistrationData(formData);
    
    // Go to previous step
    this.registrationService.previousStep();
    this.router.navigate(['/auth/register-page/register-step-one']);
  }

  private collectValidationErrors(): void {
    this.errors = [];
    
    if (this.isInstructor) {
      if (this.professionalForm.get('title')?.hasError('required')) {
        this.errors.push('Professional title is required for instructors');
      }
      if (this.professionalForm.get('bio')?.hasError('required')) {
        this.errors.push('Bio is required for instructors');
      }
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.professionalForm.controls).forEach(key => {
      this.professionalForm.get(key)?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.professionalForm.get(fieldName);
    if (field?.touched && field?.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
    }
    return '';
  }
}
