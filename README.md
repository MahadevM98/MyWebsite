# Personal Portfolio Website for Mahadev M

This is a fully responsive personal portfolio website built to showcase the skills, experience, and projects of Mahadev M, a Digital Marketing Specialist and Data Analyst.

## Tech Stack

This project is built with modern web technologies to ensure a fast, reliable, and maintainable application.

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Animations**: [React Type Animation](https://www.npmjs.com/package/react-type-animation) for the hero quote.

## Features

- **Responsive Design**: The layout is optimized for all screen sizes, from mobile phones to desktop computers.
- **Interactive Navigation**: A floating navigation bar provides easy access to all sections of the page.
- **Dynamic Content**: Includes an animated typing effect for the quote section.
- **Showcase Sections**:
  - **Hero**: A welcoming introduction with contact information.
  - **About Me**: A summary of professional background, career highlights, and a list of skills.
  - **Projects & Certifications**: Links to professional certifications and GitHub repositories.
  - **Quote**: An animated quote section to add a personal touch.

## Project Structure

The project follows the standard Next.js App Router structure:

```
.
├── src
│   ├── app
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page component
│   ├── components
│   │   ├── main-nav.tsx    # Floating navigation component
│   │   ├── header.tsx      # Top header component
│   │   ├── sections        # Directory for page sections (Hero, About, etc.)
│   │   └── ui              # Reusable UI components from Shadcn/UI
│   └── lib
│       └── utils.ts        # Utility functions
├── public                  # Static assets
└── package.json            # Project dependencies and scripts
```

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd <project-directory>
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at [http://localhost:9002](http://localhost:9002).
