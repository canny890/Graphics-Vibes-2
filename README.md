# Graphic Vibes - Professional Design Services Website

A modern, professional website for Graphic Vibes design agency built with HTML5, SCSS, and JavaScript.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Pages**: Dedicated pages for each service offering
- **Contact Forms**: Professional contact forms with validation
- **Portfolio Showcase**: Filterable portfolio section
- **SEO Optimized**: Proper meta tags and semantic HTML

## Services Included

1. Graphics & Web Designing
2. Logo Branding
3. Visiting & Employee Cards
4. Banner Flyers
5. Brochures
6. Social Media Ads
7. CMYK & RGB Colors
8. Printing Works
9. Website Designing
10. Website Redesigning
11. Website Management

## Color Scheme

- Primary: #00bcd4 (Cyan)
- Secondary: #0097a7 (Dark Cyan)
- Accent: #00e5ff (Light Cyan)
- Background: #000000 (Black)
- Text: #ffffff (White)

## File Structure

```
/
├── index.html              # Homepage
├── services.html           # Services overview
├── about.html             # About page
├── contact.html           # Contact page
├── portfolio.html         # Portfolio showcase
├── css/
│   ├── style.scss         # Main SCSS file
│   └── style.css          # Compiled CSS
├── js/
│   └── script.js          # JavaScript functionality
└── README.md              # This file
```

## Setup Instructions

1. **Download all files** to your local directory
2. **Compile SCSS**: If you make changes to `style.scss`, compile it to CSS:
   ```bash
   sass css/style.scss css/style.css
   ```
3. **Open in browser**: Open `index.html` in your web browser
4. **Customize content**: Edit the HTML files to add your specific content, images, and contact information

## Customization

### Colors
Edit the SCSS variables at the top of `css/style.scss`:
```scss
$primary-color: #00bcd4;
$secondary-color: #0097a7;
$accent-color: #00e5ff;
```

### Content
- Update contact information in `contact.html`
- Add your portfolio images and descriptions
- Modify service descriptions and pricing
- Update company information in `about.html`

### Images
- Replace placeholder images with your actual work
- Add your logo and brand assets
- Update portfolio images in the portfolio section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- Font Awesome 6.0.0 (for icons)
- Google Fonts (Inter font family)
- No JavaScript frameworks required

## Performance

- Optimized CSS with minimal dependencies
- Compressed images recommended
- Lazy loading implemented for better performance
- Mobile-first responsive design

## SEO Features

- Semantic HTML5 structure
- Proper heading hierarchy
- Meta descriptions for all pages
- Alt tags for images
- Schema markup ready

## Contact

For support or questions about this template, please contact the development team.

---

**Note**: This is a static HTML/CSS/JS website. For dynamic functionality (contact forms, CMS, etc.), you'll need to integrate with a backend service or use a static site generator with form handling services.