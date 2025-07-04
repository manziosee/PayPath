# Contributing to PayPath

Thank you for your interest in contributing to PayPath! This document provides guidelines and information for contributors.

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- **Be respectful** and inclusive of all contributors
- **Be constructive** in discussions and feedback
- **Be patient** with new contributors and maintainers
- **Focus on the project** and avoid personal attacks
- **Help create a welcoming environment** for everyone

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/PayPath.git
   cd PayPath
   ```

3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/manziosee/PayPath.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Copy environment variables**:
   ```bash
   cp .env.example .env.local
   ```

6. **Start the development server**:
   ```bash
   npm run dev
   ```

## 📝 How to Contribute

### Reporting Bugs

Before creating a bug report, please:

1. **Check existing issues** to avoid duplicates
2. **Use the latest version** of PayPath
3. **Provide detailed information** including:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Browser/OS information
   - Console errors

### Suggesting Features

For feature requests:

1. **Check existing feature requests** first
2. **Describe the problem** you're trying to solve
3. **Explain your proposed solution**
4. **Consider the impact** on existing users
5. **Provide mockups or examples** if helpful

### Pull Requests

#### Before You Start

1. **Create an issue** to discuss major changes
2. **Check the roadmap** to align with project direction
3. **Look for "good first issue"** labels for beginners

#### Pull Request Process

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Commit with clear messages**:
   ```bash
   git commit -m "feat: add invoice template customization"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** with:
   - Clear title and description
   - Link to related issues
   - Screenshots for UI changes
   - Testing instructions

## 🎨 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type when possible
- Use meaningful variable names

```typescript
// Good
interface InvoiceData {
  id: string;
  clientName: string;
  amount: number;
  dueDate: Date;
}

// Avoid
const data: any = {};
```

### React Components

- Use functional components with hooks
- Follow the single responsibility principle
- Use proper prop types
- Implement error boundaries where needed

```tsx
// Good
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Styling

- Use Tailwind CSS for styling
- Follow the existing design system
- Ensure responsive design
- Test in both light and dark modes
- Use semantic class names

```tsx
// Good
<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">

// Avoid inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

### File Organization

- Keep components small and focused
- Use proper file naming conventions
- Organize files by feature
- Export components from index files

```
components/
├── invoices/
│   ├── invoice-list.tsx
│   ├── invoice-form.tsx
│   ├── invoice-item.tsx
│   └── index.ts
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write tests for new features
- Test both happy path and edge cases
- Use descriptive test names
- Mock external dependencies

```typescript
describe('InvoiceCalculator', () => {
  it('should calculate total amount correctly', () => {
    const items = [
      { quantity: 2, rate: 100 },
      { quantity: 1, rate: 50 }
    ];
    
    expect(calculateTotal(items)).toBe(250);
  });
});
```

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions
- Document complex logic
- Update README for new features
- Include examples in documentation

```typescript
/**
 * Calculates the total amount for invoice items
 * @param items - Array of invoice items
 * @returns Total amount in cents
 */
function calculateTotal(items: InvoiceItem[]): number {
  return items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
}
```

### Commit Messages

Follow conventional commits format:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add dark mode toggle to dashboard
fix: resolve invoice calculation rounding error
docs: update API documentation
style: format code with prettier
refactor: extract invoice validation logic
test: add unit tests for payment tracking
chore: update dependencies
```

## 🔍 Review Process

### What We Look For

- **Code quality** - Clean, readable, maintainable code
- **Functionality** - Features work as expected
- **Testing** - Adequate test coverage
- **Documentation** - Clear documentation and comments
- **Design consistency** - Follows existing patterns
- **Performance** - No unnecessary performance impacts
- **Accessibility** - Meets accessibility standards

### Review Timeline

- **Initial response** - Within 2-3 days
- **Full review** - Within 1 week
- **Follow-up** - Within 2-3 days of updates

## 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `documentation` - Improvements to documentation
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 🎯 Project Priorities

### High Priority
- Core invoice functionality
- Payment tracking
- User experience improvements
- Bug fixes and stability

### Medium Priority
- Advanced reporting features
- Integration capabilities
- Performance optimizations
- Mobile responsiveness

### Low Priority
- Nice-to-have features
- Experimental functionality
- Advanced customization options

## 📞 Getting Help

### Community Support
- **GitHub Discussions** - For general questions
- **GitHub Issues** - For bug reports and feature requests
- **Email** - oseemanzi3@gmail.com

### Maintainer Contact
- **Email** - oseemanzi3@gmail.com
- **GitHub** - [@manziosee](https://github.com/manziosee)

## 🙏 Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- Project website
- Annual contributor highlights

---

**Project Maintainer:** MANZI NIYONGIRA Osee  
**Contact:** oseemanzi3@gmail.com  
**Repository:** https://github.com/manziosee/PayPath

Thank you for contributing to PayPath! 🚀