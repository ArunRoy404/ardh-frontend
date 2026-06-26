# ARDH — Property Management & Financial Tracking Platform

> **Manage buildings, apartments, tenants, income, expenses, and maintenance — all in one unified ERP for modern property businesses.**

ARDH is a full-featured single-page application (SPA) built with **React 19**, **Vite 8**, and **Tailwind CSS v4**. It serves as a property management dashboard that helps landlords, property managers, and real estate businesses track every aspect of their portfolio through an intuitive, responsive interface.

---

## ✨ Features

### 📊 Dashboard Overview
- **Stats Cards** — At-a-glance metrics: total buildings, apartments, occupancy rate, monthly income/expenses, pending payments, and open maintenance tickets.
- **Occupancy Overview** — Donut chart showing occupied vs. vacant units.
- **Expense Breakdown** — Categorized expense visualization using Recharts.
- **Recent Payments** — Latest payment transactions with status indicators.
- **Recent Activities** — Chronological activity feed of portfolio events.
- **Open Maintenance** — Quick-view cards for unresolved maintenance requests.
- **Building Filter** — Filter the entire dashboard by a selected building.

### 🏢 Buildings
- Card-based gallery view with building images, status badges, and tags.
- Add new buildings via a dialog form.
- Navigate to building details view.

### 🏠 Apartments
- Dual-view layout: **Table view** (with column visibility toggling) and **Card view** (toggleable).
- Add new apartments with comprehensive form (building, flat#, floor, type, area, bedrooms, bathrooms, parking, balcony, rent, charges, owner).
- Apartment detail page with tabs: **Info**, **Stats**, **Expected Income**.

### 👥 Tenants
- Table & card views with search and filtering.
- Add tenants with full KYC details (ID type/number, lease dates, security deposit, emergency contacts).
- **Move Out** workflow for end-of-tenancy processing.
- Tenant detail page with comprehensive profile.

### 👤 Owners
- Table & card views for property owners.
- Add owner profiles with contact and property ownership details.
- Owner detail page with linked properties list.

### 💰 Income
- Record and track all income streams (rent, maintenance fees, parking fees, etc.).
- Table & card views with action menus.
- Income detail page with full transaction information.

### 💸 Expenses
- Categorized expense tracking (electricity, water, repairs, salaries, etc.).
- Table & card views with expense actions.
- Expense detail page.

### 🔧 Maintenance
- Log and track maintenance requests with status tracking (Open, In Progress, Completed).
- Table & card views.
- Maintenance detail page.

### ⚙️ Equipment
- Track building equipment and assets.
- Table & card views with action menus.
- Equipment detail page.

### 🛠️ Vendors
- Manage service vendors with contact info, categories, and ratings.
- Table & card views.
- Vendor detail page.

### 📈 Reports
- Comprehensive reporting with date/type/building filters.
- Income & expense reports with action menus.
- Report statistics overview.

### 🔔 Notifications
- Centralized notification center with categorized alerts:
  - Vacant apartment reminders
  - Maintenance status updates (critical, in-progress, open)
  - Overdue payment alerts

### 👤 User Management
- Manage system users with table & card views.
- Add new users.
- Role-based access structure.

### ⚙️ Settings
- **General Settings** — Platform-wide configuration.
- **Change Password** — Secure password update form.
- **Deleted History** — View, filter, and restore deleted records (income, expense, tenant, vendor) with detailed history logs and one-click restore.

### 🔐 Authentication Flow
- **Sign In** — Email + password authentication with "Remember me" toggle.
- **Forgot Password** — Email submission for password reset.
- **OTP Verification** — 6-digit code verification.
- **Reset Password** — New password with strength validation & confirmation.

---

## 🧱 Tech Stack

| Layer           | Technology                                                                 |
|-----------------|----------------------------------------------------------------------------|
| **Framework**   | React 19 (with JSX)                                                        |
| **Build Tool**  | Vite 8                                                                     |
| **Styling**     | Tailwind CSS v4 + `tw-animate-css` + shadcn/ui (`base-mira` style)        |
| **Routing**     | React Router v7                                                            |
| **Forms**       | React Hook Form v7 + @hookform/resolvers (Zod integration)                |
| **Validation**  | Zod v4                                                                     |
| **State Mgmt**  | Zustand v5                                                                 |
| **Tables**      | TanStack React Table v8 (with column visibility toggling)                 |
| **Charts**      | Recharts v3                                                                |
| **UI Icons**    | HugeIcons Core Free (v4) + Lucide React                                   |
| **Rich Text**   | Tiptap (starter-kit, underline, color, highlight, placeholder, text-align) |
| **Animations**  | GSAP v3                                                                    |
| **Toasts**      | Sonner v2                                                                  |
| **Themes**      | next-themes                                                                |
| **Linting**     | ESLint 10                                                                  |
| **Font**        | Inter Variable (via @fontsource-variable)                                  |
| **Deployment**  | Vercel (SPA with SPA rewrites configured)                                  |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ApartmentDetails/      # Apartment detail view sub-components
│   ├── Apartments/            # Apartment list, add, action components
│   ├── AuthForms/             # Sign in, forgot password, OTP, reset password forms
│   ├── AuthLayout/            # Auth page layout (hero image + form)
│   ├── BuildingDetails/       # Building detail view
│   ├── Buildings/             # Building list, add components
│   ├── DashboardLayout/       # Sidebar, navbar, breadcrumb, layout shell
│   ├── DashboardPage/         # Dashboard stat cards, charts, activity feeds
│   ├── DataTable/             # Reusable data table with column visibility
│   ├── DataTableColumns/      # Column definitions per domain (11 modules)
│   ├── Equipment/             # Equipment management components
│   ├── EquipmentDetails/      # Equipment detail view
│   ├── Expenses/              # Expense management components
│   ├── ExpensesDetails/       # Expense detail view
│   ├── Income/                # Income management components
│   ├── IncomeDetails/         # Income detail view
│   ├── Maintenance/           # Maintenance management components
│   ├── MaintenanceDetails/    # Maintenance detail view
│   ├── OwnerDetails/          # Owner detail view + properties list
│   ├── Owners/                # Owner management components
│   ├── Reports/               # Reports with filters, table, stats
│   ├── Settings/              # General settings, password, deleted history
│   ├── shared/                # Reusable: Card, Table, Search, Logo, Dialog,
│   │                          #   Avatar, FileInput, Select, TextEditor,
│   │                          #   ImageUpload, ThemeToggle, Pagination, etc.
│   ├── skeletons/             # Loading skeletons (card, list, table)
│   ├── SvgIcons/              # Custom SVG icon components (16 icons)
│   ├── TenantDetails/         # Tenant detail view
│   ├── Tenants/               # Tenant list, add, move-out components
│   ├── ui/                    # shadcn/ui primitives (20+ components)
│   ├── UserManagement/        # User management components
│   ├── VendorDetails/         # Vendor detail view
│   └── Vendors/              # Vendor list, add components
│
├── context/
│   └── ThemeContext.jsx        # Theme provider (default / gradient)
│
├── css/
│   ├── index.css               # Global styles, Tailwind imports, CSS variables
│   └── scrollbar.css           # Custom scrollbar styling
│
├── data/
│   └── navData.js              # Sidebar navigation structure
│
├── dummyData/                  # Mock data files (18 modules)
│   ├── apartmentRecords.js     # Apartment listing data
│   ├── tenantRecords.js        # Tenant records
│   ├── ownerRecords.js         # Owner records
│   ├── incomeRecords.js        # Income transaction records
│   ├── expenseRecords.js       # Expense transaction records
│   ├── maintenanceRecords.js   # Maintenance request records
│   ├── equipmentRecords.js     # Equipment inventory records
│   ├── vendorRecords.js        # Vendor directory records
│   ├── userRecords.js          # System user records
│   ├── reportRecords.js        # Report data
│   ├── notificationsData.js    # Notification items
│   ├── statsData.js            # Dashboard stat card data
│   ├── occupancyData.js        # Occupancy chart data
│   ├── openMaintenance.js      # Open maintenance ticket data
│   ├── recentActivities.js     # Activity feed data
│   ├── recentPayments.js       # Recent payment records
│   ├── deletedHistoryRecords.js# Deleted records audit log
│   ├── expenseCategories.js    # Expense category definitions
│   └── *DetailsRecords.js      # Detail-level mock data per domain
│
├── dummyDataStore/             # Zustand stores (24 stores)
│   ├── useStatsStore.js        # Dashboard statistics
│   ├── useApartmentStore.js    # Apartment records
│   ├── useTenantStore.js       # Tenant records
│   ├── useOwnerStore.js        # Owner records
│   ├── useIncomeStore.js       # Income records
│   ├── useExpenseStore.js      # Expense records
│   ├── useMaintenanceStore.js  # Maintenance records
│   ├── useEquipmentStore.js    # Equipment records
│   ├── useVendorStore.js       # Vendor records
│   ├── useUserStore.js         # User records
│   ├── useReportStore.js       # Report data
│   ├── useNotificationsStore.js# Notifications
│   ├── usePaymentsStore.js     # Payment records
│   ├── useActivitiesStore.js   # Activity feed
│   ├── useOccupancyStore.js    # Occupancy data
│   ├── useDeletedHistoryStore.js# Deleted history records
│   └── *DetailsStore.js        # Detail-level stores per domain
│
├── hooks/
│   └── use-mobile.js           # Mobile responsive breakpoint hook
│
├── lib/
│   └── utils.js                # Utility: cn() for class merging
│
├── pages/
│   ├── auth/                   # Auth page components
│   │   ├── SignInPage.jsx
│   │   ├── ForgotPasswordPage.jsx
│   │   ├── OtpVerificationPage.jsx
│   │   └── ResetPasswordPage.jsx
│   ├── dashboard/             # Dashboard feature pages (14 modules)
│   │   ├── DashboardPage.jsx
│   │   ├── BuildingsPage.jsx
│   │   ├── ApartmentsPage.jsx
│   │   ├── TenantsPage.jsx
│   │   ├── OwnersPage.jsx
│   │   ├── IncomePage.jsx
│   │   ├── ExpensesPage.jsx
│   │   ├── MaintenancePage.jsx
│   │   ├── EquipmentPage.jsx
│   │   ├── VendorsPage.jsx
│   │   ├── NotificationsPage.jsx
│   │   ├── ReportsPage.jsx
│   │   ├── UserManagementPage.jsx
│   │   └── SettingsPage.jsx
│   ├── *Details/              # Detail pages per domain (8 modules)
│   └── NotFoundPage.jsx       # 404 fallback page
│
├── router/
│   ├── router.jsx              # Main router configuration
│   ├── AuthRouter.jsx          # Auth route definitions
│   └── DashboardRoute.jsx      # Dashboard route definitions
│
├── zodSchema/                  # Zod validation schemas (13 modules)
│   ├── authZodSchema.js        # Sign-in, forgot password, OTP, reset password
│   ├── apartmentZodSchema.js   # Apartment creation/editing
│   ├── tenantZodSchema.js      # Tenant registration
│   ├── ownerZodSchema.js       # Owner profiles
│   ├── buildingZodSchema.js    # Building data
│   ├── incomeZodSchema.js      # Income records
│   ├── expenseZodSchema.js     # Expense records
│   ├── maintenanceZodSchema.js # Maintenance requests
│   ├── equipmentZodSchema.js   # Equipment records
│   ├── vendorZodSchema.js      # Vendor profiles
│   ├── userZodSchema.js        # User management
│   ├── moveOutTenantZodSchema.js# Tenant move-out
│   └── settingsZodSchema.js   # Settings forms
│
├── main.jsx                    # Application entry point
└── App.jsx                     # (optional root wrapper)
```

---

## 🧭 Routes

### 🔐 Auth Routes
| Path                 | Page              | Description                        |
|----------------------|-------------------|------------------------------------|
| `/sign-in`           | SignInPage        | Email & password authentication    |
| `/forgot-password`   | ForgotPasswordPage| Request password reset             |
| `/otp-verification`  | OtpVerificationPage| 6-digit OTP code verification     |
| `/reset-password`    | ResetPasswordPage | Set new password                   |

### 📋 Dashboard Routes
| Path                        | Page                  | Description                     |
|-----------------------------|-----------------------|---------------------------------|
| `/`                         | DashboardPage         | Overview & analytics            |
| `/notifications`            | NotificationsPage     | Notification center             |
| `/buildings`                | BuildingsPage         | Building gallery                |
| `/buildings/:buildingid`    | BuildingDetails       | Building detail view            |
| `/apartments`               | ApartmentsPage        | Apartment list (table & cards)  |
| `/apartments/:apartmentid`  | ApartmentDetails      | Apartment detail with tabs      |
| `/tenants`                  | TenantsPage           | Tenant list                     |
| `/tenants/:tenantid`        | TenantDetails         | Tenant detail profile           |
| `/owners`                   | OwnersPage            | Owner list                      |
| `/owners/:ownerid`          | OwnerDetailsPage      | Owner detail + properties       |
| `/income`                   | IncomePage            | Income records                  |
| `/income/:incomeid`         | IncomeDetailsPage     | Income transaction detail       |
| `/expenses`                 | ExpensesPage          | Expense records                 |
| `/expenses/:expenseid`      | ExpensesDetailsPage   | Expense transaction detail      |
| `/maintenance`              | MaintenancePage       | Maintenance requests            |
| `/maintenance/:maintenanceid`| MaintenanceDetailsPage| Maintenance request detail     |
| `/equipment`                | EquipmentPage         | Equipment list                  |
| `/equipment/:equipmentid`   | EquipmentDetailsPage  | Equipment detail                |
| `/vendors`                  | VendorsPage           | Vendor directory                |
| `/vendors/:vendorid`        | VendorsDetailsPage    | Vendor detail                   |
| `/reports`                  | ReportsPage           | Reports with filters & stats    |
| `/user-management`          | UserManagementPage    | System user management          |
| `/settings`                 | SettingsPage          | Settings (general, password, history) |
| `*`                         | NotFoundPage          | 404 fallback                    |

---

## 🎨 Theme System

ARDH supports two visual themes that can be toggled via the **ThemeToggle** component:

| Theme      | Description                                      |
|------------|--------------------------------------------------|
| **Default**| Clean white background with neutral tones        |
| **Gradient**| Light blue gradient background (`#E4ECFF` → `#E9F0FF`) |

- Theme preference is persisted in `localStorage` under the key `app-theme`.
- All colors (sidebar, charts, cards, status tags) are driven by CSS custom properties, providing consistent theming across the application.
- **Status Tags** — Built-in color tokens for: success (green), progress/in-progress (amber), warning/destructive (red), medium/info (blue), open (sky blue).

---

## 💻 Development

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Lint the codebase
npm run lint
```

### Configuration

| File               | Purpose                                |
|--------------------|----------------------------------------|
| `vite.config.js`  | Vite config with React + Tailwind v4 plugins, `@` path alias |
| `jsconfig.json`   | Path alias (`@/` → `src/`) for IntelliSense |
| `components.json` | shadcn/ui configuration (style, aliases, icon library) |
| `vercel.json`     | Vercel deployment config with SPA rewrites |
| `eslint.config.js`| ESLint 10 flat config                  |

### Path Aliases

The project uses the `@` alias to reference the `src/` directory:
```js
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

---

## 🚀 Deployment

The project is pre-configured for **Vercel** deployment:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

The SPA rewrites rule ensures client-side routing works correctly on all paths.

---

## 📦 Dependencies Overview

| Category         | Packages                                                                        |
|------------------|---------------------------------------------------------------------------------|
| **Core**         | `react`, `react-dom`, `react-router`                                           |
| **UI**           | `@base-ui/react`, `@hugeicons/core-free-icons`, `@hugeicons/react`, `lucide-react` |
| **Styling**      | `tailwindcss`, `@tailwindcss/vite`, `tw-animate-css`, `class-variance-authority`, `clsx`, `tailwind-merge` |
| **shadcn/ui**    | `shadcn`, custom components in `src/components/ui/`                             |
| **Forms**        | `react-hook-form`, `@hookform/resolvers`                                       |
| **Validation**   | `zod`                                                                           |
| **State**        | `zustand`                                                                       |
| **Tables**       | `@tanstack/react-table`                                                         |
| **Charts**       | `recharts`                                                                      |
| **Editor**       | `@tiptap/react`, `@tiptap/starter-kit` + extensions                            |
| **Animations**   | `gsap`                                                                          |
| **Toasts**       | `sonner`                                                                        |
| **Themes**       | `next-themes`                                                                   |
| **OTP Input**    | `input-otp`                                                                     |
| **Font**         | `@fontsource-variable/inter`                                                    |

---

## 🏗️ Architecture Notes

- **State Management**: Each domain has its own Zustand store, initialized with mock data from `dummyData/` files. This makes it straightforward to swap in real API calls later.
- **Component Reusability**: Shared components in `src/components/shared/` are used across multiple feature modules — `CommonCard`, `CommonTable`, `CommonSearch`, `CommonDeleteDialog`, `FormContainer`, `CommonInput`, etc.
- **DataTable Abstraction**: The `DataTable` component wraps `@tanstack/react-table` with built-in sorting, column visibility toggling, and a no-data state.
- **Form Pattern**: All forms use a consistent pattern: Zod schema → `react-hook-form` with `zodResolver` → `FormContainer` wrapper → domain-specific input fields.
- **Modular Pages**: Each dashboard feature page (e.g., `TenantsPage`) is composed of a `DashboardHeader` and a feature-specific list/view component.
- **Detail Pages**: Every major entity has a detail page at `/:entity/:id` that shows the full record with contextual navigation.

---

> Built with React 19, Tailwind CSS v4, and shadcn/ui.
