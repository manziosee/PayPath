# 🚀 PayPath - Smart Invoice & Payment Tracker

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-13.5-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</div>

<div align="center">
  <h3>Professional invoice management and payment tracking for freelancers and small businesses</h3>
  <p>Create beautiful invoices, track payments, and get paid faster with PayPath's modern, intuitive interface.</p>
</div>

---

## ✨ Features

### 🧾 **Invoice Management**
- **Professional Templates** - Create stunning, branded invoices with customizable templates
- **PDF Generation** - Automatic PDF creation with professional formatting
- **Multi-Currency Support** - Handle international clients with ease
- **Recurring Invoices** - Set up automatic billing for regular clients
- **Custom Branding** - Add your logo and brand colors

### 💰 **Payment Tracking**
- **Real-time Status Updates** - Track paid, pending, and overdue invoices
- **Payment Reminders** - Automated email reminders for overdue payments
- **Partial Payment Support** - Handle installment payments
- **Payment History** - Complete audit trail of all transactions
- **Late Fee Calculation** - Automatic late fee application

### 👥 **Client Management**
- **Contact Database** - Organize all client information in one place
- **Payment History** - Track each client's payment patterns
- **Communication Log** - Keep notes and communication history
- **Client Portal** - Optional client access to their invoices

### 📊 **Analytics & Reporting**
- **Financial Dashboard** - Visual overview of your business performance
- **Revenue Analytics** - Track income trends and patterns
- **Tax Reports** - Generate tax-ready financial reports
- **Export Options** - CSV, PDF, and Excel export capabilities
- **Custom Date Ranges** - Flexible reporting periods

### 🎨 **Modern Design**
- **Dark/Light Mode** - Beautiful themes for any preference
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Accessibility** - WCAG compliant for all users
- **Smooth Animations** - Delightful micro-interactions
- **Professional UI** - Clean, modern interface design

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manziosee/PayPath.git
   cd PayPath
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Project Structure

```
paypath/
├── app/                    # Next.js 13+ App Router
│   ├── dashboard/         # Dashboard pages
│   ├── pricing/           # Pricing page
│   ├── help/              # Help center
│   ├── notifications/     # Notifications page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── auth/              # Authentication components
│   ├── clients/           # Client management
│   ├── invoices/          # Invoice components
│   ├── layout/            # Layout components
│   └── ui/                # UI components (shadcn/ui)
├── lib/                   # Utility functions
│   ├── mock-data.ts       # Sample data
│   └── utils.ts           # Helper functions
├── public/                # Static assets
├── README.md              # Project documentation
├── LICENSE                # MIT License
└── package.json           # Dependencies
```

---

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 13+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode support

### **Styling & Animation**
- **Custom CSS** - Advanced animations and effects
- **Neumorphism** - Modern design patterns
- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layout techniques

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Git** - Version control

---

## 📱 Screenshots

### Landing Page
![Landing Page](https://via.placeholder.com/800x400/000000/FFFFFF?text=PayPath+Landing+Page)

### Dashboard
![Dashboard](https://via.placeholder.com/800x400/000000/FFFFFF?text=PayPath+Dashboard)

### Invoice Creation
![Invoice Creation](https://via.placeholder.com/800x400/000000/FFFFFF?text=Invoice+Creation)

### Dark Mode
![Dark Mode](https://via.placeholder.com/800x400/FFFFFF/000000?text=PayPath+Dark+Mode)

---

## 🎯 Roadmap

### Phase 1 - Core Features ✅
- [x] Invoice creation and management
- [x] Client management
- [x] Payment tracking
- [x] Dashboard analytics
- [x] Dark/light mode
- [x] Responsive design

### Phase 2 - Advanced Features 🚧
- [ ] Database integration (PostgreSQL/Supabase)
- [ ] User authentication (NextAuth.js)
- [ ] Email notifications
- [ ] PDF generation
- [ ] Payment gateway integration

### Phase 3 - Business Features 📋
- [ ] Multi-user support
- [ ] Team collaboration
- [ ] Advanced reporting
- [ ] API development
- [ ] Mobile app

### Phase 4 - Enterprise 🏢
- [ ] White-label solutions
- [ ] Advanced integrations
- [ ] Custom workflows
- [ ] Enterprise security
- [ ] SLA support

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design
- Test in both light and dark modes

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Implement proper error handling
- Add JSDoc comments for functions

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Commercial use** - Use in commercial projects
- ✅ **Modification** - Modify the code as needed
- ✅ **Distribution** - Share with others
- ✅ **Private use** - Use in private projects
- ❗ **Liability** - No warranty provided
- ❗ **Attribution** - Include original license

---

## 🙏 Acknowledgments

- **[shadcn/ui](https://ui.shadcn.com/)** - For the beautiful component library
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Lucide](https://lucide.dev/)** - For the beautiful icons
- **[Next.js](https://nextjs.org/)** - For the amazing React framework
- **[Vercel](https://vercel.com/)** - For hosting and deployment

---

## 📞 Support

### Community Support
- **GitHub Issues** - [Report bugs or request features](https://github.com/manziosee/PayPath/issues)
- **Discussions** - [Join community discussions](https://github.com/manziosee/PayPath/discussions)

### Professional Support
- **Email** - oseemanzi3@gmail.com
- **GitHub** - [@manziosee](https://github.com/manziosee)

---

## 👨‍💻 Author

**MANZI NIYONGIRA Osee**
- GitHub: [@manziosee](https://github.com/manziosee)
- Email: oseemanzi3@gmail.com

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=manziosee/PayPath&type=Date)](https://star-history.com/#manziosee/PayPath&Date)

---

<div align="center">
  <p>Made with ❤️ by MANZI NIYONGIRA Osee</p>
  <p>
    <a href="https://github.com/manziosee/PayPath">GitHub</a> •
    <a href="mailto:oseemanzi3@gmail.com">Contact</a>
  </p>
</div>