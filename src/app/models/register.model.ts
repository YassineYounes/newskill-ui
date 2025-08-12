export interface RegistrationData {
  // Step 1: Personal Details
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
  userName?: string;
  role: 'Student' | 'Instructor';
  
  // Step 2: Professional Info (mainly for instructors)
  title?: string;
  bio?: string;
  website?: string;
  
  // Step 3: Social Profiles
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
}

export interface RegistrationResponse {
  message: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    roles: string[];
    createdAt: string;
  };
}

export interface RegistrationError {
  error?: string;
  errors?: string[];
}

export class register {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  img?: string;
  content1?: string;
  content2?: string;
  paragraph?: string;
}

export class passwordResponce {
  passwordResponceText?: string;
  passwordResponceImage?: string;
  passwordResponceKey?: string;
}
