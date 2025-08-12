import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from 'src/app/shared/service/data/data.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {routes} from 'src/app/shared/service/routes/routes';
import {registerFive} from 'src/app/models/model';
import {RegistrationService} from 'src/app/services/registration.service';
import {UserService} from 'src/app/services/user.service';
import {RegistrationData, RegistrationResponse, RegistrationError} from 'src/app/models/register.model';

@Component({
  selector: 'app-register-step-five',
  templateUrl: './register-step-five.component.html',
  styleUrls: ['./register-step-five.component.scss']
})
export class RegisterStepFiveComponent implements OnInit {
  public registerFive: registerFive[] = [];
  public routes = routes;
  public registrationData!: RegistrationData;
  public isSubmitting = false;
  public registrationComplete = false;
  public errors: string[] = [];
  public successMessage = '';
  
  public registerFiveOwlOptions: OwlOptions = {
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
    private registrationService: RegistrationService,
    private userService: UserService,
    private router: Router
  ) {
    this.registerFive = this.DataService.registerFive;
  }

  ngOnInit(): void {
    this.loadRegistrationData();
  }

  loadRegistrationData(): void {
    this.registrationData = this.registrationService.getRegistrationData();
    
    // Validate that we have all required data
    if (!this.registrationData.firstName || !this.registrationData.email || !this.registrationData.password) {
      // Redirect back to step 1 if missing required data
      this.router.navigate(['/auth/register-page/register-step-one']);
    }
  }

  submitRegistration(): void {
    this.errors = [];
    this.isSubmitting = true;

    this.userService.register(this.registrationData).subscribe({
      next: (response: RegistrationResponse) => {
        this.isSubmitting = false;
        this.registrationComplete = true;
        this.successMessage = response.message;
        
        // Clear registration data
        this.registrationService.resetRegistration();
        
        // Redirect to login page after 3 seconds
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 3000);
      },
      error: (error: any) => {
        this.isSubmitting = false;
        
        if (error.error) {
          if (error.error.error) {
            this.errors = [error.error.error];
          } else if (error.error.errors) {
            this.errors = error.error.errors;
          } else {
            this.errors = ['Registration failed. Please try again.'];
          }
        } else {
          this.errors = ['Network error. Please check your connection and try again.'];
        }
      }
    });
  }

  goBack(): void {
    this.registrationService.setCurrentStep(2);
    this.router.navigate(['/auth/register-page/register-step-two']);
  }

  editStep(step: number): void {
    this.registrationService.setCurrentStep(step);
    
    switch (step) {
      case 1:
        this.router.navigate(['/auth/register-page/register-step-one']);
        break;
      case 2:
        this.router.navigate(['/auth/register-page/register-step-two']);
        break;
      case 3:
        this.router.navigate(['/auth/register-page/register-step-three']);
        break;
      case 4:
        this.router.navigate(['/auth/register-page/register-step-four']);
        break;
    }
  }

  loginNow(): void {
    this.router.navigate(['/auth/login']);
  }
}
