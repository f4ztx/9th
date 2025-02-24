# 9th Avenue

Modern and minimalist website for 9th Avenue, built with Next.js 15.1.7 and React, featuring neo-brutalist design and optimized user experience.

> 🚧 **Project Status**: Work in Progress - This project is currently under active development.
> 
> 🌐 **Live Preview**: [https://9thavenue.dev](https://9thavenue.dev)

## Key Features

- 🎨 Neo-brutalist design with modern elements
- 🌓 Integrated light/dark theme
- 🌐 Multi-language support (English/Spanish)
- 📱 Fully responsive design
- 📬 Contact system with notifications
- ⚡ Performance and SEO optimization

## Tech Stack

- **Framework:** Next.js 15.1.7 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Roboto Mono, Roboto Condensed
- **Icons:** Lucide Icons
- **Email:** Resend
- **i18n:** react-i18next

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/f4ztx/9th.git
cd 9th
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with the following variables:
```
RESEND_API_KEY=your_resend_api_key
```

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:9004](http://localhost:9004) in your browser.

## Environment Variables

- `RESEND_API_KEY`: Your Resend API key for email functionality. Get it from [Resend Dashboard](https://resend.com)

> Note: The contact email and Google Analytics ID are hardcoded in their respective files:
> - Contact email is set in `src/app/api/send/route.ts` as 'your@email.com'
> - GA4 measurement ID is set in `src/app/layout.tsx` as 'G-XYZ123ABC4', that isn't a real gtag, change it.

## Project Structure

```
9th/
├── app/
│   ├── [lang]/
│   └── api/
├── components/
│   ├── sections/
│   └── ui/
├── lib/
│   └── i18n/
└── public/
    ├── locales/
    └── images/
```

## Development Status

This is an ongoing project with regular updates. Some features are still in development:

- Complete internationalization implementation
- Enhanced animations and interactions
- Additional service sections
- Blog integration
- Performance optimizations


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For more information or inquiries, contact [info@9thavenue.dev](mailto:info@9thavenue.dev)
