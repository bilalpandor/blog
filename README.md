# Bilal Pandor - Personal Website

A modern, responsive single-page portfolio website showcasing professional experience, skills, and projects.

## Features

- **Clean, Modern Design** - Professional layout with smooth animations and transitions
- **Light/Dark Theme** - Toggle between light and dark modes with preference persistence
- **Multilingual Greeting** - Dynamic greeting that cycles through 10 different languages
- **Responsive Design** - Fully responsive layout that works on all devices
- **Smooth Scrolling** - Seamless navigation between sections
- **Performance Optimized** - Fast loading with vanilla JavaScript (no frameworks needed)

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables) for theming, Flexbox, Grid
- **Vanilla JavaScript** - No dependencies, lightweight and fast

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styling and theme definitions
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## Local Development

Simply open `index.html` in your browser:

```bash
# Option 1: Direct open
open index.html

# Option 2: Using Python's built-in server
python3 -m http.server 8000

# Option 3: Using Node's http-server (if installed)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Deployment

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to deploy

4. Add custom domain in Vercel dashboard

### Option 2: Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy
   ```

3. Follow the prompts and add custom domain in Netlify dashboard

### Option 3: GitHub Pages

1. Create a new GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repository settings
4. Configure custom domain in settings

## Custom Domain Setup (bilalpandor.com)

1. **Purchase Domain**
   - Go to Namecheap, GoDaddy, or Cloudflare
   - Search for and purchase `bilalpandor.com`

2. **Configure DNS (if using Vercel)**
   - In Vercel dashboard, go to your project settings
   - Add `bilalpandor.com` as a custom domain
   - Vercel will provide DNS records to add
   - Go to your domain registrar's DNS settings
   - Add the A/CNAME records provided by Vercel
   - Wait for DNS propagation (can take up to 24-48 hours)

3. **Configure DNS (if using Netlify)**
   - In Netlify dashboard, go to Domain settings
   - Add custom domain `bilalpandor.com`
   - Follow Netlify's DNS configuration instructions
   - Update nameservers or add A/CNAME records at your registrar

## Customization

### Updating Content

- **Personal Info**: Edit the text in `index.html`
- **Experience**: Modify the timeline items in the Experience section
- **Skills**: Update skill tags in the Skills section
- **Social Links**: Change URLs in the hero and contact sections

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --accent: #2563eb;  /* Primary accent color */
    /* ... other variables */
}
```

### Adding Languages to Greeting

Edit the `greetings` array in `script.js`:

```javascript
const greetings = [
    'Hello',
    'Your Language Here',
    // ... add more
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 1s on average connection
- **Size**: ~15KB total (HTML + CSS + JS)

## License

© 2025 Bilal Pandor. All rights reserved.

## Contact

- Email: bpandor@gmail.com
- LinkedIn: [linkedin.com/in/bilal-pandor](https://linkedin.com/in/bilal-pandor)

---

Built with passion and code ☕
