<!-- @format -->

# Product Management Web App

A modern, responsive product management web application built with React, TypeScript, and Vite. This application provides a comprehensive interface for browsing products, viewing detailed product information, and managing product data with an intuitive user experience.

## 🚀 Live Demo

**Deployed Application:** [https://product-management-web-app-omega.vercel.app/products](https://product-management-web-app-omega.vercel.app/products)

## ✨ Features

- **Product Listing**: Browse through a paginated list of products with search and category filtering
- **Product Details**: View comprehensive product information including images, specifications, reviews, and shipping details
- **Edit Product**: Frontend-only product editing with form validation
- **Search & Filter**: Real-time product search and category-based filtering
- **Responsive Design**: Fully responsive UI that works seamlessly across desktop, tablet, and mobile devices
- **Loading States**: Skeleton screens for better user experience during data fetching
- **Error Handling**: Graceful error handling with custom 404 page
- **Image Gallery**: Interactive image preview with multiple product images
- **Dynamic Routing**: Client-side routing with React Router for smooth navigation

## 🛠️ Tech Stack

- **React 19** - UI library for building interactive interfaces
- **TypeScript** - Type-safe JavaScript for better developer experience
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management with RTK Query for API calls
- **React Router DOM** - Client-side routing
- **Ant Design** - UI component library for professional design
- **Tailwind CSS** - Utility-first CSS framework
- **SCSS** - CSS preprocessor for custom styling
- **Vercel** - Deployment and hosting platform

## 🏗️ Architecture Decisions

### 1. **State Management - Redux Toolkit**

- **Why?** Redux Toolkit provides a standardized way to manage global state with built-in best practices
- **RTK Query** is used for efficient API data fetching, caching, and synchronization
- Reduces boilerplate code and improves developer productivity

### 2. **Client-Side Routing - React Router**

- **Why?** Enables single-page application (SPA) behavior with dynamic routing
- Supports nested routes, lazy loading, and programmatic navigation
- Better user experience with instant page transitions

### 3. **Component Architecture**

- **Container/Presentational Pattern**: Separation of business logic (containers) from UI (presentational components)
- **Modular Structure**: Components organized by feature for better maintainability
- **Reusable Components**: Styled components and common UI elements for consistency

### 4. **API Integration - RTK Query**

- **Why?** Automatic caching, request deduplication, and background refetching
- Type-safe API calls with TypeScript integration
- Reduces the need for manual state management for server data

### 5. **Styling Strategy**

- **Tailwind CSS**: Utility-first approach for rapid UI development
- **SCSS Modules**: Custom styles with scoped CSS to prevent conflicts
- **Ant Design**: Pre-built components for consistent design system

### 6. **Code Splitting & Lazy Loading**

- **Why?** Improves initial load time and performance
- React.lazy() and Suspense for route-based code splitting
- Only loads components when needed

### 7. **TypeScript**

- **Why?** Type safety reduces runtime errors and improves code quality
- Better IDE support with autocomplete and inline documentation
- Easier refactoring and maintenance

## 📁 Project Structure

```
src/
├── components/
│   ├── CommonComponents/        # Shared components (Layout, Loading, etc.)
│   ├── ProductsComponents/      # Product-related components
│   │   ├── ProductsDetailsComponents/  # Product details sub-components
│   │   ├── ProductsContainer.tsx
│   │   └── ProductsTable.tsx
│   └── StyledComponents/        # Reusable styled components
├── pages/
│   ├── Products/               # Product pages
│   │   ├── Products.tsx
│   │   └── ProductDetails.tsx
│   └── Errors/                 # Error pages
│       └── ErrorPage.tsx
├── redux/
│   ├── api/                   # API configuration
│   ├── features/              # Feature-based Redux slices
│   │   └── Products/
│   │       ├── ProductsAPI.tsx    # RTK Query API endpoints
│   │       └── ProductsSlice.tsx  # Redux state slice
│   └── store.tsx              # Redux store configuration
├── routes/
│   └── routes.tsx            # Application routing configuration
├── types/
│   └── ProductsTypes.tsx     # TypeScript type definitions
├── scssstyles/
│   └── CommonStyles.module.scss  # Common SCSS modules
└── App.tsx                   # Root application component
```

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd product-management-web-app
   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   VITE_API_URL=https://dummyjson.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the production-ready application
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 🌐 Environment Variables

The application requires the following environment variable:

| Variable       | Description                    | Example                 |
| -------------- | ------------------------------ | ----------------------- |
| `VITE_API_URL` | Base URL for the DummyJSON API | `https://dummyjson.com` |

**Note:** All environment variables in Vite must be prefixed with `VITE_` to be exposed to the client-side code.

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment to Vercel

The application is configured for seamless deployment on Vercel:

1. The `vercel.json` file handles client-side routing rewrites
2. All routes are redirected to `index.html` to support React Router
3. Environment variables are configured in Vercel dashboard

**Current Deployment:** [https://product-management-web-app-omega.vercel.app/products](https://product-management-web-app-omega.vercel.app/products)

## 🎨 Key Features Explained

### Product Listing Page

- Displays products in a paginated table format
- Search functionality to find products by name
- Category filter to browse products by category
- Responsive design with mobile-friendly layout

### Product Details Page

- Displays comprehensive product information
- Image gallery with preview functionality
- Product specifications (dimensions, weight, SKU)
- Customer reviews and ratings
- Shipping and warranty information
- Edit product functionality with form validation

### Search & Filtering

- Real-time search with debouncing
- Category-based filtering
- Clear filters to reset search

### Form Validation

- Required field validation
- Type validation (number ranges, text length)
- User-friendly error messages
- Real-time validation feedback

## 🔧 Troubleshooting

### Development Server Issues

**Port already in use:**

```bash
# Kill the process using port 5173
npx kill-port 5173
```

**Module not found errors:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Issues

**TypeScript errors:**

```bash
# Run type check
npx tsc --noEmit
```

## 📄 License

This project is created for educational and portfolio purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or feedback, please reach out through the repository issues.

---

Built with ❤️ using React, TypeScript, and Vite
