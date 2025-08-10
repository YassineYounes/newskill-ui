# NewSkill UI (Frontend Application)

A modern, responsive e-learning platform frontend built with Angular, providing an intuitive interface for students, instructors, and administrators to interact with online courses.

## 🚀 Tech Stack

- **Framework**: Angular 15+ with TypeScript
- **Styling**: SCSS with responsive design
- **State Management**: Angular Services + RxJS
- **UI Components**: Custom component library
- **HTTP Client**: Angular HttpClient with interceptors
- **Routing**: Angular Router with guards
- **Build Tool**: Angular CLI with Webpack

## 📁 Project Structure

```
src/
├── app/
│   ├── auth/                    # Authentication module
│   │   ├── components/
│   │   ├── services/
│   │   └── guards/
│   ├── components/              # Shared UI components
│   │   ├── header/
│   │   ├── footer/
│   │   ├── course-card/
│   │   └── navigation/
│   ├── layouts/                 # Page layouts
│   │   ├── main-layout/
│   │   ├── auth-layout/
│   │   └── dashboard-layout/
│   ├── models/                  # TypeScript interfaces
│   │   ├── course.ts
│   │   ├── user.ts
│   │   ├── instructor.ts
│   │   └── category.ts
│   ├── services/               # API services
│   │   ├── course.service.ts
│   │   ├── category.service.ts
│   │   ├── instructor.service.ts
│   │   └── user.service.ts
│   ├── shared/                 # Shared utilities
│   │   ├── components/
│   │   ├── directives/
│   │   └── utils/
│   └── pipes/                  # Data transformation pipes
├── assets/                     # Static assets
│   ├── images/
│   ├── icons/
│   └── styles/
└── environments/               # Environment configurations
```

## 🎨 UI/UX Features

### Design System
- **Responsive Design**: Mobile-first approach with Bootstrap/Flexbox
- **Modern UI**: Clean, professional interface with consistent styling
- **Component Library**: Reusable UI components
- **Accessibility**: WCAG 2.1 compliant components
- **Dark/Light Mode**: Theme switching support *(Planned)*

### User Experience
- **Progressive Loading**: Skeleton screens and lazy loading
- **Real-time Updates**: Live data synchronization
- **Smooth Navigation**: Angular Router with transition animations
- **Error Handling**: User-friendly error messages and recovery
- **Offline Support**: Basic offline functionality *(Planned)*

## 🔗 API Integration

### Services Architecture

#### Course Service
```typescript
@Injectable()
export class CourseService {
  getCourse(id: string): Observable<Course>
  getCourseList(): Observable<Course[]>
  getTrendingCourses(): Observable<Course[]>
  createCourse(course: Course): Observable<Course>     // In Development
  updateCourse(id: string, course: Course): Observable<Course>  // Planned
}
```

#### User Service
```typescript
@Injectable()
export class UserService {
  login(credentials: LoginCredentials): Observable<AuthResponse>     // In Development
  register(userData: RegisterData): Observable<User>                // In Development
  getCurrentUser(): Observable<User>                                // In Development
  updateProfile(userData: User): Observable<User>                   // Planned
}
```

### HTTP Interceptors
- **Authentication**: JWT token injection
- **Error Handling**: Global error response handling
- **Loading**: Request/response loading states
- **Retry Logic**: Automatic retry for failed requests

## 📱 Feature Modules

### 🏠 Home Module
- Landing page with featured courses
- Course search and filtering
- Category browsing
- Trending courses showcase

### 📚 Course Module
- Course listing with pagination
- Course details with curriculum
- Course preview and enrollment
- Student dashboard with progress tracking *(In Development)*

### 👨‍🏫 Instructor Module
- Instructor profiles and portfolios
- Course creation and management *(In Development)*
- Student analytics and feedback *(Planned)*
- Revenue tracking *(Planned)*

### 🔐 Authentication Module *(In Development)*
- User registration and login
- Password reset and recovery
- Email verification
- Social login integration *(Planned)*

### 💳 Payment Module *(Planned)*
- Course purchasing workflow
- Payment method management
- Transaction history
- Subscription management

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Angular CLI (`npm install -g @angular/cli`)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YassineYounes/newskill-ui.git
   cd newskill-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment configuration**
   ```bash
   # Copy environment template
   cp src/environments/environment.ts.example src/environments/environment.ts
   # Update API endpoints and configuration
   ```

4. **Start development server**
   ```bash
   ng serve
   # Application will be available at http://localhost:4200
   ```

5. **Build for production**
   ```bash
   ng build --prod
   ```

### Docker Setup *(Planned)*

```bash
# Build Docker image
docker build -t newskill-ui .

# Run container
docker run -p 80:80 newskill-ui
```

## 🧪 Testing

### Unit Testing
```bash
# Run unit tests
ng test

# Run tests with coverage
ng test --code-coverage
```

### End-to-End Testing
```bash
# Run e2e tests
ng e2e
```

### Testing Strategy
- **Unit Tests**: Component and service testing with Jasmine/Karma
- **Integration Tests**: Feature module testing
- **E2E Tests**: User workflow testing with Cypress *(Planned)*
- **Visual Regression**: UI consistency testing *(Planned)*

## 📊 Current Development Status

### ✅ Implemented Features
- Angular project structure and configuration
- Course listing and details pages
- Instructor profile pages
- Home page with course showcase
- Basic routing and navigation
- API service integration
- Responsive layout components

### 🚧 In Progress
- Authentication system (login/register forms)
- Course creation interface for instructors
- Student dashboard and progress tracking
- Payment integration UI

### 📋 Planned Features
- Advanced search and filtering
- Real-time notifications
- Course video player
- Interactive quiz interface
- Social features (comments, ratings)
- Mobile app using Ionic *(Future)*

## 🎯 User Roles & Permissions

### Student Dashboard
- **Course Catalog**: Browse and search courses
- **My Courses**: Enrolled courses and progress
- **Learning Interface**: Video player, quizzes, materials
- **Profile Management**: Account settings and preferences
- **Certificates**: Download completed course certificates

### Instructor Dashboard
- **Course Management**: Create, edit, and publish courses
- **Content Upload**: Videos, materials, and assessments
- **Student Analytics**: Enrollment and progress tracking
- **Revenue Dashboard**: Earnings and payout management
- **Profile Management**: Instructor bio and credentials

### Admin Dashboard *(Planned)*
- **Platform Management**: User and course administration
- **Analytics**: Platform-wide statistics and insights
- **Content Moderation**: Course and user content review
- **Financial Management**: Revenue, refunds, and payouts

## 🔧 Configuration

### Environment Variables
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api',
  jwtTokenKey: 'newskill_token',
  enableAnalytics: false,
  paymentGateway: 'stripe', // stripe | paypal
  features: {
    socialLogin: false,
    darkMode: true,
    notifications: true
  }
};
```

### Build Configuration
- **Development**: Source maps, hot reload, mock APIs
- **Production**: Minification, tree shaking, service worker
- **Testing**: Test environment with mock services

## 🚀 Performance Optimization

### Current Optimizations
- **Lazy Loading**: Feature modules loaded on demand
- **OnPush Strategy**: Optimized change detection
- **TrackBy Functions**: Efficient list rendering
- **Image Optimization**: WebP format and lazy loading
- **Bundle Splitting**: Vendor and feature code separation

### Planned Optimizations
- **Service Worker**: Offline functionality and caching
- **Virtual Scrolling**: Large list performance
- **Image CDN**: Optimized image delivery
- **Code Splitting**: Route-based code splitting
- **PWA Features**: Install prompt and offline support

## 🔐 Security Features

### Implemented
- **XSS Protection**: Sanitized user inputs
- **CSRF Protection**: Angular built-in protection
- **Secure Headers**: Content Security Policy
- **JWT Handling**: Secure token storage

### Planned
- **2FA Support**: Two-factor authentication
- **Session Management**: Secure session handling
- **Audit Logging**: User action tracking
- **Rate Limiting**: API request throttling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Follow the coding standards (ESLint, Prettier)
4. Write tests for new features
5. Commit your changes: `git commit -am 'Add new feature'`
6. Push to the branch: `git push origin feature/new-feature`
7. Submit a pull request

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Angular recommended rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Standardized commit messages

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Related Projects

- **Backend**: [newskill-ws](https://github.com/YassineYounes/newskill-ws) - Symfony API backend
- **Documentation**: See CONTEXT.md for detailed current state

## 📞 Support

For support, email support@newskill.com or create an issue in this repository.

---

**Note**: This frontend application is designed to work seamlessly with the NewSkill WebService backend. Ensure both applications are running for full functionality.