# techtalks-onboardly

**Project Name:** techtalks-onboardly 
 

A modern Next.js application built with **React, TypeScript, and Tailwind CSS that helps newcomers (interns, juniors, or new employees) navigate their first months by capturing real experiences, tips, and warnings from peers. The platform aggregates this information to provide insights and early warnings for the next person joining a team.**  

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16.1.4  
- **UI Library:** [React](https://react.dev/) 19.2.3  
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4  
- **Linting:** [ESLint](https://eslint.org/) with Next.js config  

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)  
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)  

---

## 🛠️ Installation

1. Clone the repository:  
```bash
git clone <repository-url>
cd techtalks-onboardly
```

2. Install dependencies:  
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

---

## 🏃 Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.  
Changes in the `app` directory will hot-reload automatically.

---

## 📁 Project Structure

```
techtalks-onboardly/
├── app/                # Next.js App Router directory
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets (images, icons)
├── components/         # Reusable React components
├── utils/              # Utility functions
├── api/                # API routes (if any)
├── eslint.config.mjs   # ESLint configuration
├── next.config.ts      # Next.js configuration
├── postcss.config.mjs  # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

---

## 🎨 Features

- ⚡ Next.js App Router for optimal performance  
- 🎯 TypeScript for type safety  
- 💅 Tailwind CSS for utility-first styling  
- 🌙 Dark mode support  
- 📱 Responsive design  
- 🔍 ESLint for code quality  
- 📌 Capture tips, warnings, struggles, and expectations from new employees  
- 📊 Aggregation and pattern detection over time  
- 🛡️ Early warnings and reality checks for newcomers  

---

## 🧑‍💻 Team Guidelines

- Each teammate works on a **separate branch**:  
```bash
git checkout -b feature/<feature-name>
```

- Make **frequent commits** with clear messages:  
```bash
git add .
git commit -m "Add tip card component"
git push origin feature/<feature-name>
```

- Open a **Pull Request** to `main` for review before merging.  

- Always pull the latest `main` branch before starting work:  
```bash
git pull origin main
```

- Use **Notion** for documentation and **Jira** for task tracking.

---

## 🚢 Deployment

The easiest way to deploy your Next.js app is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app).  

Check the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)  
- [React Documentation](https://react.dev/)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
- [TypeScript Documentation](https://www.typescriptlang.org/docs)  

---