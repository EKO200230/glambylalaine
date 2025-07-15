# GLAM by Lalaine - Professional Makeup & Hair Services Website

A beautiful, modern, and responsive website for "GLAM by Lalaine" makeup and hair services. This website showcases your portfolio, services, and provides an easy booking system for clients.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Portfolio Gallery**: Filterable gallery showcasing your work by category
- **Booking System**: Easy-to-use booking form with your available dates
- **Contact Integration**: Direct links to your Instagram for private scheduling
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Elegant navigation between sections
- **Form Validation**: Ensures all booking information is properly filled

## 📁 File Structure

```
GLAM/
├── index.html          # Main website file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
├── README.md           # This file
├── Glam Logo.png       # Your logo
├── Glam portrait.png   # Hero section image
├── Glam Square.png     # Contact section image
├── Clients Picture/    # Portfolio images
│   ├── Client 1 Graduation/
│   ├── Client 2 Graduation/
│   ├── Client 3 Prom Night/
│   ├── Client 4 Graduation/
│   ├── Client 5 Prom Night/
│   ├── Client 6 Graduation/
│   ├── Client 7 Wedding/
│   ├── Client 8 Cup and pinning/
│   └── Client 9/
└── Clients Videos/     # Video content
```

## 🚀 How to Use

### 1. Opening the Website
Simply open the `index.html` file in any modern web browser. The website will load with all your content and functionality.

### 2. Navigation
- **Desktop**: Use the navigation menu at the top
- **Mobile**: Click the hamburger menu (☰) to access navigation
- **Smooth Scrolling**: Click any navigation link to smoothly scroll to that section

### 3. Portfolio Gallery
- **Filtering**: Use the filter buttons to view specific categories:
  - All
  - Graduation
  - Prom Night
  - Wedding
  - Special Events
- **Hover Effects**: Hover over images to see additional information
- **Responsive Grid**: Automatically adjusts based on screen size

### 4. Booking System
- **Available Dates**: Currently shows July 17 and July 30, 2024
- **Form Fields**: 
  - Full Name (required)
  - Email (required)
  - Phone Number (required)
  - Preferred Date (required)
  - Service Type (required)
  - Additional Details (optional)
- **Validation**: Form validates all required fields before submission
- **Success Message**: Shows confirmation when booking is submitted

### 5. Contact Information
- **Instagram**: Direct link to @glam.by.lalaine
- **Private Scheduling**: Instructions for custom date requests via Instagram

## 🎨 Customization

### Colors
The website uses a beautiful gradient color scheme:
- Primary: `#e74c3c` (Red)
- Secondary: `#f39c12` (Orange)
- Text: `#2c3e50` (Dark Blue)
- Background: `#f8f9fa` (Light Gray)

### Fonts
- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Poppins (modern sans-serif)

### Adding New Portfolio Images
1. Add your new images to the appropriate folder in `Clients Picture/`
2. Update the HTML in `index.html` by adding new portfolio items:

```html
<div class="portfolio-item" data-category="graduation">
    <img src="Clients Picture/Your New Folder/image.jpg" alt="Description">
    <div class="portfolio-overlay">
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
```

### Updating Available Dates
Edit the booking section in `index.html`:

```html
<div class="date-card">
    <div class="date-header">
        <i class="fas fa-calendar-alt"></i>
        <span>Your New Date</span>
    </div>
    <p>Availability status</p>
</div>
```

Also update the form options:

```html
<option value="newdate">Your New Date</option>
```

### Changing Contact Information
Update the Instagram link in both the contact section and footer:

```html
<a href="your-new-instagram-link" target="_blank" class="social-link">@your-handle</a>
```

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- **Mobile Navigation**: Hamburger menu for small screens
- **Responsive Grid**: Portfolio and services adjust to screen size
- **Touch-Friendly**: All buttons and links are optimized for touch
- **Fast Loading**: Optimized images and efficient code

## 🔧 Technical Features

- **HTML5**: Semantic markup for better SEO
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **JavaScript**: Interactive features and form handling
- **Font Awesome**: Professional icons throughout the site
- **Google Fonts**: Beautiful typography
- **Intersection Observer**: Smooth scroll animations
- **Form Validation**: Client-side validation for better UX

## 📞 Support

For any questions or customization needs:
- **Instagram**: @glam.by.lalaine
- **Email**: Contact via Instagram DM

## 🎯 SEO Optimization

The website includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Descriptive page titles
- Mobile-friendly design (Google ranking factor)

## 🚀 Deployment

To make your website live:
1. **Free Hosting**: Use GitHub Pages, Netlify, or Vercel
2. **Paid Hosting**: Upload files to any web hosting service
3. **Domain**: Consider purchasing a custom domain (e.g., glam-bylalaine.com)

## 📊 Analytics (Optional)

To track website visitors, you can add Google Analytics by adding this code to the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🎉 Ready to Launch!

Your website is now ready to showcase your beautiful work and help clients book your services. The modern design, easy navigation, and professional presentation will help you attract more clients and grow your business.

**Good luck with your makeup and hair services business! 💄✨** 