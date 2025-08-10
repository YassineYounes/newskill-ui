# AI Prompting Templates for NewSkill Platform Development

This document provides structured prompts and context templates for effective AI collaboration on the NewSkill e-learning platform development.

---

## 📋 Quick Project Context Template

Use this template when starting a new AI session:

```
I'm working on the NewSkill e-learning platform with two repositories:
- Backend: newskill-ws (Symfony PHP API)
- Frontend: newskill-ui (Angular TypeScript SPA)

Current Status:
- ✅ Core entities and relationships implemented
- ✅ Course listing/details APIs working
- 🚧 Authentication system in progress
- ❌ Payment system not started

Please review the CONTEXT.md files in both repositories for detailed current state.

Task: [Describe your specific task here]
```

---

## 🔧 Backend Development Prompts

### API Development
```
Context: NewSkill backend (Symfony)
Current State: See newskill-ws/CONTEXT.md for detailed status

Task: [Choose one or customize]
- Implement user authentication with JWT
- Complete the course creation API endpoint
- Add enrollment management system
- Build quiz/assessment APIs
- Integrate payment processing

Requirements:
- Follow existing Symfony patterns in the codebase
- Maintain consistency with existing entity relationships
- Include proper validation and error handling
- Add appropriate tests
- Update API documentation

Files to focus on: [Specify if known]
```

### Database & Entity Work
```
Context: NewSkill backend database schema
Current State: 15 entities fully mapped with relationships

Task: [Choose one or customize]
- Add new entity relationships
- Create migration for schema changes
- Optimize database queries
- Add missing entity properties
- Create data fixtures

Current Entities: User, Course, Instructor, Category, Section, Lesson, Quiz, Question, Answer, Enrollment, Progress, Review, Payment, Topic, Level, Resource, Comment, Role

Requirements:
- Follow Doctrine ORM best practices
- Maintain existing relationship integrity
- Include proper database constraints
- Add appropriate indexes for performance
```

### Service Layer Development
```
Context: NewSkill backend business logic
Current State: Basic service structure exists

Task: Create/enhance service for [specify domain]

Service Requirements:
- Implement business logic separate from controllers
- Handle exceptions appropriately
- Include proper validation
- Follow dependency injection patterns
- Add logging where appropriate

Integration Points:
- Controllers: How will this service be used?
- Entities: Which entities will this service manage?
- External APIs: Any third-party integrations needed?
```

---

## 🎨 Frontend Development Prompts

### Component Development
```
Context: NewSkill frontend (Angular)
Current State: See newskill-ui/CONTEXT.md for detailed status

Task: [Choose one or customize]
- Complete authentication components (login/register)
- Build student dashboard interface
- Create course creation wizard
- Implement payment checkout flow
- Add quiz/assessment interface

Requirements:
- Follow Angular best practices and style guide
- Maintain consistency with existing components
- Implement responsive design (mobile-first)
- Include proper TypeScript typing
- Add unit tests for components
- Follow existing SCSS patterns

Current Components: Header, Footer, CourseCard, MainLayout
Existing Services: CourseService, CategoryService, InstructorService, UserService
```

### Service & API Integration
```
Context: NewSkill frontend API services
Current State: Course service complete, auth service partial

Task: [Choose one or customize]
- Complete user authentication service
- Add enrollment management service
- Implement payment service integration
- Create notification service
- Build progress tracking service

API Integration Requirements:
- Use existing HTTP interceptors
- Implement proper error handling
- Include loading states
- Cache responses where appropriate
- Follow RxJS best practices

Backend API Base URL: /api
Authentication: JWT tokens (when implemented)
```

### UI/UX Enhancement
```
Context: NewSkill frontend user interface
Current State: Basic responsive layout implemented

Task: [Choose one or customize]
- Improve mobile responsiveness
- Add loading states and skeleton screens
- Implement dark/light theme switching
- Create custom component library
- Add accessibility features (WCAG 2.1)

Design Requirements:
- Mobile-first responsive design
- Consistent with existing visual style
- Professional e-learning platform appearance
- Intuitive user experience
- Fast loading and smooth animations

Target Users: Students, Instructors, Administrators
```

---

## 🔗 Full-Stack Integration Prompts

### Feature Development
```
Context: NewSkill platform end-to-end feature development
Repositories: newskill-ws (backend) + newskill-ui (frontend)

Task: Implement [feature name] from backend to frontend

Feature Requirements:
Backend:
- API endpoints with proper validation
- Business logic in service layer
- Database schema updates if needed
- Error handling and responses

Frontend:
- User interface components
- Service integration with API
- Form validation and UX
- Loading and error states

Integration:
- Consistent data models between frontend/backend
- Proper error handling across layers
- User experience considerations
- Performance optimization

Examples:
- Complete user authentication flow
- Course enrollment system
- Payment processing
- Quiz/assessment system
- Progress tracking
```

### Bug Fixes & Debugging
```
Context: NewSkill platform issue resolution
Current State: [Describe the issue]

Bug Report:
- Component/Service affected: [specify]
- Expected behavior: [describe]
- Actual behavior: [describe]
- Steps to reproduce: [list steps]
- Environment: [dev/staging/production]

Investigation Required:
- Check related files: [list specific files if known]
- Review recent changes: [mention if relevant]
- Test across different scenarios
- Verify both frontend and backend if applicable

Resolution Requirements:
- Fix the root cause, not just symptoms
- Add tests to prevent regression
- Update documentation if needed
- Consider impact on other features
```

---

## 🚀 Deployment & DevOps Prompts

### Environment Setup
```
Context: NewSkill platform deployment and configuration

Task: [Choose one or customize]
- Set up development environment
- Configure staging environment
- Prepare production deployment
- Set up CI/CD pipeline
- Configure monitoring and logging

Environment Details:
Backend: Symfony in Docker containers
Frontend: Angular with nginx
Database: MySQL/PostgreSQL
Required: Docker, docker-compose

Configuration Needs:
- Environment variables
- Database connections
- API endpoint configurations
- Security settings
- Performance optimizations
```

### Performance Optimization
```
Context: NewSkill platform performance improvement

Current Performance Issues:
- [List specific performance concerns]

Optimization Areas:
Backend:
- Database query optimization
- API response time improvement
- Caching implementation
- Memory usage optimization

Frontend:
- Bundle size reduction
- Lazy loading implementation
- Change detection optimization
- Image and asset optimization

Monitoring:
- Add performance metrics
- Set up monitoring alerts
- Track user experience metrics
```

---

## 📊 Testing & Quality Assurance Prompts

### Test Development
```
Context: NewSkill platform testing strategy

Task: [Choose one or customize]
- Add unit tests for backend services
- Create frontend component tests
- Implement integration tests
- Set up end-to-end test suite
- Add API contract testing

Testing Requirements:
Backend Testing:
- PHPUnit for unit tests
- API endpoint testing
- Database integration tests
- Service layer testing

Frontend Testing:
- Jasmine/Karma for unit tests
- Component testing with TestBed
- Service testing with HttpClientTestingModule
- E2E testing with Cypress/Protractor

Coverage Goals:
- Backend: 80%+ code coverage
- Frontend: 70%+ code coverage
- Critical paths: 100% coverage
```

### Code Review & Quality
```
Context: NewSkill platform code quality improvement

Review Focus: [Choose area]
- Code architecture and patterns
- Security vulnerabilities
- Performance bottlenecks
- Code duplication and refactoring
- Documentation completeness

Quality Criteria:
- Follows framework best practices
- Proper error handling
- Consistent code style
- Adequate test coverage
- Security considerations
- Performance implications

Files to Review: [Specify if known]
Priority: [High/Medium/Low]
```

---

## 🔐 Security & Compliance Prompts

### Security Review
```
Context: NewSkill platform security audit

Security Areas:
- Authentication and authorization
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection
- Data encryption
- API security

Current Security Measures:
- JWT authentication (in development)
- Symfony security bundle
- Angular built-in protections
- HTTPS enforcement (planned)

Security Requirements:
- OWASP best practices
- Data protection compliance
- Secure password handling
- Session management
- API rate limiting
```

---

## 📚 Documentation & Maintenance Prompts

### Documentation Updates
```
Context: NewSkill platform documentation maintenance

Documentation Task: [Choose one]
- Update API documentation
- Create user guide
- Update developer setup instructions
- Document new features
- Create troubleshooting guide

Requirements:
- Clear, concise writing
- Include code examples
- Update existing documentation
- Maintain consistency with current implementation
- Include screenshots/diagrams where helpful

Target Audience: [Developers/Users/Administrators]
```

### Code Maintenance
```
Context: NewSkill platform maintenance and refactoring

Maintenance Task: [Choose one]
- Upgrade framework dependencies
- Refactor legacy code
- Remove deprecated features
- Update third-party integrations
- Optimize database schema

Requirements:
- Maintain backward compatibility where possible
- Update tests after changes
- Document breaking changes
- Consider impact on both frontend and backend
- Plan migration strategy if needed

Priority: [High/Medium/Low]
Timeline: [Specify if applicable]
```

---

## 💡 Innovation & Feature Planning Prompts

### New Feature Development
```
Context: NewSkill platform feature expansion

Feature Proposal: [Describe new feature]

Requirements Analysis:
- User stories and acceptance criteria
- Technical feasibility assessment
- Impact on existing features
- Resource requirements
- Timeline estimation

Technical Considerations:
- Backend API changes needed
- Frontend interface requirements
- Database schema modifications
- Third-party integrations
- Security implications
- Performance impact

Stakeholders: [Students/Instructors/Administrators]
Priority: [High/Medium/Low]
```

### Technology Upgrade Planning
```
Context: NewSkill platform technology roadmap

Upgrade Proposal: [Specify technology/framework]

Current State:
- Backend: Symfony version [specify]
- Frontend: Angular version [specify]
- Dependencies: [list critical dependencies]

Upgrade Benefits:
- Performance improvements
- Security enhancements
- New feature capabilities
- Developer experience improvements

Migration Strategy:
- Compatibility assessment
- Testing requirements
- Deployment considerations
- Rollback plan
- Timeline and resources needed
```

---

## 🎯 Quick Action Templates

### Quick Bug Fix
```
Quick Context: NewSkill [backend/frontend] bug fix
Issue: [Brief description]
Files: [List affected files]
Expected Fix: [What should be done]
```

### Quick Feature Addition
```
Quick Context: NewSkill [backend/frontend] feature addition
Feature: [Brief description]
Location: [Where to implement]
Requirements: [Key requirements]
```

### Quick Optimization
```
Quick Context: NewSkill [backend/frontend] optimization
Target: [What to optimize]
Current Issue: [Performance problem]
Goal: [Desired improvement]
```

---

## 📞 Getting Help Template

When you need comprehensive assistance:

```
NewSkill Platform Development Assistance Needed

Project Context:
- Component: [Backend/Frontend/Full-stack]
- Current Task: [What you're working on]
- Blocking Issue: [What's stopping progress]

Environment:
- Repository: [newskill-ws/newskill-ui]
- Branch: [current branch]
- Local Setup: [Docker/Native/Other]

Request:
- Type: [Bug fix/Feature development/Code review/Architecture advice]
- Urgency: [High/Medium/Low]
- Specific Question: [Your specific question or need]

Context Files:
- Please review: README.md and CONTEXT.md in relevant repository
- Focus on: [Specific areas or files]

Expected Outcome: [What you want to achieve]
```

---

**Note**: Always refer to the CONTEXT.md files in both repositories for the most current project state before starting any development work.