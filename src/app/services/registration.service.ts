import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegistrationData } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationData: RegistrationData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Student'
  };

  private currentStepSubject = new BehaviorSubject<number>(1);
  public currentStep$ = this.currentStepSubject.asObservable();

  private registrationDataSubject = new BehaviorSubject<RegistrationData>(this.registrationData);
  public registrationData$ = this.registrationDataSubject.asObservable();

  constructor() {}

  // Get current registration data
  getRegistrationData(): RegistrationData {
    return { ...this.registrationData };
  }

  // Update registration data
  updateRegistrationData(data: Partial<RegistrationData>): void {
    this.registrationData = { ...this.registrationData, ...data };
    this.registrationDataSubject.next(this.registrationData);
  }

  // Get current step
  getCurrentStep(): number {
    return this.currentStepSubject.value;
  }

  // Set current step
  setCurrentStep(step: number): void {
    this.currentStepSubject.next(step);
  }

  // Move to next step
  nextStep(): void {
    const currentStep = this.getCurrentStep();
    if (currentStep < 5) {
      this.setCurrentStep(currentStep + 1);
    }
  }

  // Move to previous step
  previousStep(): void {
    const currentStep = this.getCurrentStep();
    if (currentStep > 1) {
      this.setCurrentStep(currentStep - 1);
    }
  }

  // Reset registration data
  resetRegistration(): void {
    this.registrationData = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'Student'
    };
    this.registrationDataSubject.next(this.registrationData);
    this.setCurrentStep(1);
  }

  // Validate step data
  validateStep(step: number): boolean {
    switch (step) {
      case 1:
        return !!(
          this.registrationData.firstName &&
          this.registrationData.lastName &&
          this.registrationData.email &&
          this.registrationData.password &&
          this.registrationData.confirmPassword &&
          this.registrationData.role &&
          this.registrationData.password === this.registrationData.confirmPassword
        );
      case 2:
        // Professional info is optional for students, required title for instructors
        if (this.registrationData.role === 'Instructor') {
          return !!this.registrationData.title;
        }
        return true;
      case 3:
        // Social profiles are optional
        return true;
      case 4:
        // Privacy settings are optional
        return true;
      case 5:
        // Final review
        return this.validateStep(1);
      default:
        return false;
    }
  }

  // Get validation errors for a step
  getStepErrors(step: number): string[] {
    const errors: string[] = [];

    switch (step) {
      case 1:
        if (!this.registrationData.firstName) errors.push('First name is required');
        if (!this.registrationData.lastName) errors.push('Last name is required');
        if (!this.registrationData.email) errors.push('Email is required');
        if (!this.registrationData.password) errors.push('Password is required');
        if (!this.registrationData.confirmPassword) errors.push('Password confirmation is required');
        if (!this.registrationData.role) errors.push('Role selection is required');
        if (this.registrationData.password && this.registrationData.confirmPassword && 
            this.registrationData.password !== this.registrationData.confirmPassword) {
          errors.push('Passwords do not match');
        }
        if (this.registrationData.password && this.registrationData.password.length < 8) {
          errors.push('Password must be at least 8 characters long');
        }
        if (this.registrationData.email && !this.isValidEmail(this.registrationData.email)) {
          errors.push('Please enter a valid email address');
        }
        break;
      case 2:
        if (this.registrationData.role === 'Instructor' && !this.registrationData.title) {
          errors.push('Professional title is required for instructors');
        }
        break;
    }

    return errors;
  }

  // Email validation helper
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Get progress percentage
  getProgressPercentage(): number {
    const currentStep = this.getCurrentStep();
    return (currentStep / 5) * 100;
  }
}