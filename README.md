
# Today's Dental Services - Professional Dental Care Website

A modern, responsive dental clinic website built with React, TypeScript, and Tailwind CSS. This project showcases a complete dental services website with booking functionality, service details, and contact forms.

## 🚀 Live Demo

[View Live Demo](https://your-netlify-app.netlify.app) *(To be deployed)*

## 📋 Project Overview

This is a comprehensive dental clinic website featuring:

- **Home Page**: Hero section, services overview, testimonials, and call-to-action
- **About Us Page**: Clinic background, team information, and mission statement
- **Services Page**: Detailed list of 6+ dental services with expandable modals
- **Contact Page**: Contact form with validation, clinic information, and Google Maps integration
- **Common Components**: Header navigation, footer, and FAQ section

## 🛠️ Technical Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **HTTP Client**: Axios for form submissions
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks (useState, useEffect)

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todays-dental-services.git
   cd todays-dental-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── FAQ.tsx         # Frequently asked questions
├── pages/              # Main page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About us page
│   ├── Services.tsx    # Services listing
│   ├── Contact.tsx     # Contact form & info
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: #0ea5e9 (Dental blue)
- **Secondary Teal**: #14b8a6 (Accent color)
- **Light Blue**: #e0f2fe (Background accents)
- **Mint Green**: #a7f3d0 (Success states)

### Typography
- **Headers**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Components
- Responsive navigation with mobile menu
- Animated hero sections with gradients
- Card-based layouts with hover effects
- Modal dialogs for service details
- Form validation with error handling
- Interactive FAQ accordion

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Key Features

### Form Handling
- Contact form with full validation
- Axios integration for form submissions
- Success/error toast notifications
- Real-time validation feedback

### Services Section
- 6+ dental services with detailed descriptions
- Expandable modal dialogs
- Service pricing and duration information
- Technology highlights

### Interactive Elements
- Smooth scrolling navigation
- Hover animations and transitions
- Loading states for form submissions
- Mobile-friendly touch interactions

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for continuous deployment

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deployment script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 📝 Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=https://your-api-endpoint.com
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

## 🧪 Testing

Run the development server and test:

1. **Navigation**: Test all page routes and mobile menu
2. **Forms**: Submit contact form with various inputs
3. **Responsive**: Check layout on different screen sizes
4. **Accessibility**: Test with screen readers and keyboard navigation

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For any questions or issues, please contact:
- **Email**: developer@todaysdental.com
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/todays-dental-services/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Lucide React** for the comprehensive icon set
- **Tailwind CSS** for the utility-first CSS framework
- **Unsplash** for the high-quality placeholder images

---

**Note**: This is a demonstration project showcasing modern web development practices and dental clinic website functionality.
