# 🛒 E-Commerce Website - Frontend 

# AlmaBetter Capstone Project: Front-end Development (Module 2)
---
- **Name**- Amal Kishor
- **Chohort**- SE2508A
- **Project Name**- E-Commerce Website - Frontend Development
---

# Live - https://e-commerce-website-frontend-develop.vercel.app/

A modern, beginner-friendly e-commerce shopping platform built with React. This project demonstrates core web development concepts including component-based architecture, state management, routing, and responsive design.
<img width="1920" height="5440" alt="screencapture-localhost-5173-2025-12-27-20_27_16" src="https://github.com/user-attachments/assets/cfccf961-d4fa-4076-8317-e19ac9a882b1" />

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Architecture Explanation](#architecture-explanation)
5. [Key Features](#key-features)
6. [Component Guide](#component-guide)
7. [State Management](#state-management)

---

## 🎯 Project Overview

This is a full-featured e-commerce frontend application where users can:

- **Browse Products**: View products by category and search
- **Shop**: Add items to cart and proceed to checkout
- **Wishlist**: Save favorite products for later
- **User Authentication**: Login and register functionality
- **Responsive Design**: Works smoothly on desktop, tablet, and mobile

**Why This Project?** It's a great learning project because it uses all the modern tools that real companies use - React for building the interface, Redux for managing data, and Tailwind CSS for styling.

---

## 🛠 Technology Stack

- **React** - UI library for building interactive interfaces
- **Vite** - Fast build tool for development
- **React Router** - Page navigation without page reloads
- **Redux Toolkit** - Manages app data in one place
- **Tailwind CSS** - Fast styling with utility classes
- **React Icons** - Ready-made icon library
- **ESLint** - Checks code quality

---

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── navbar/             # Navigation bar (Navbar, NavbarTop, NavbarMiddle, NavbarBottom)
│   ├── Contact.jsx         # Contact page component
│   ├── Footer.jsx          # Footer component
│   ├── Login.jsx           # Login form
│   ├── Register.jsx        # Registration form
│   └── RatingStars.jsx     # Star rating component
│
├── pages/                  # Full page components
│   ├── home/               # Home page
│   │   ├── Home.jsx
│   │   ├── HeroSection.jsx      # Main banner
│   │   ├── Banner.jsx
│   │   ├── Categories.jsx       # Category showcase
│   │   ├── DealsSection.jsx     # Special offers
│   │   ├── PromoBanner.jsx
│   │   └── TrendingProducts.jsx
│   │
│   ├── shop/               # Shopping pages
│   │   ├── ShopPage.jsx         # Main shop with filters
│   │   ├── ProductCards.jsx     # Product card display
│   │   ├── ShopFiltering.jsx    # Filter products
│   │   ├── CartPage.jsx         # Shopping cart
│   │   ├── Wishlist.jsx         # Saved items
│   │   ├── OrderSummary.jsx     # Order review
│   │   └── productDetails/
│   │       ├── SingleProduct.jsx # Individual product page
│   │       └── ProductTabs.jsx   # Product details tabs
│   │
│   ├── category/           # Category pages
│   │   └── CategoryPage.jsx
│   │
│   ├── search/             # Search results page
│   │   └── Search.jsx
│   │
│   └── blog/               # Blog section
│       └── Blogs.jsx
│
├── redux/                  # State management
│   ├── store.js            # Redux store setup
│   └── features/           # Redux slices (different data pieces)
│       ├── cart/
│       │   └── cartSlice.js       # Shopping cart logic
│       ├── wishlist/
│       │   └── wishlistSlice.js   # Wishlist logic
│       └── products/
│           └── productSlice.js    # Product data logic
│
├── routers/                # Routing setup
│   └── router.jsx          # All page routes defined here
│
├── data/                   # Static data (mock data)
├── assets/                 # Images, fonts, etc.
│
├── App.jsx                 # Main app component
├── App.css                 # App-level styles
├── main.jsx                # App entry point
└── index.css               # Global styles
```

---

## 🏗 Architecture Explanation

### Our Architecture: Component-Based with Redux

```
┌─────────────────────────────────────┐
│     User Sees (UI - Components)     │
│  Navbar | Home | Shop | Cart etc.   │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│    Redux Store (Central Data)       │
│  Cart Items | Wishlist | Products   │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│   Redux Slices (Data Logic)         │
│  cartSlice | wishlistSlice etc.     │
└─────────────────────────────────────┘
```

### How It Works (Beginner Explanation)

**1. Components** 📦

- Small, reusable pieces of the UI
- Each component is responsible for one thing
- Example: `ProductCard.jsx` shows one product

```jsx
// A simple component structure
const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};
```

**2. Pages** 📄

- Full pages made by combining multiple components
- Example: `ShopPage.jsx` = ShopFiltering + ProductCards + Navbar

**3. Redux Store** 🏪

- A central warehouse for all app data
- Instead of passing data through many components, we store it in Redux
- All components can access this data instantly

```javascript
// What's in our Redux store:
{
  cart: { items: [...], total: 100 },
  wishlist: { items: [...] },
  products: { items: [...], filters: {...} }
}
```

**4. Routing** 🗺️

- Uses React Router to navigate between pages
- User clicks a link → URL changes → different page shows
- No page reload needed (Single Page Application)

### Data Flow (The Journey of Adding to Cart)

```
User clicks "Add to Cart" button
         ↓
Component calls Redux action
         ↓
Redux reducer updates the cart data
         ↓
Components listening to cart data re-render
         ↓
User sees updated cart immediately
```

## ✨ Key Features

### 1. **Product Browsing**

- View all products on the shop page
- Filter by category, price, ratings
- Search functionality to find specific products
  <img width="1920" height="3782" alt="screencapture-localhost-5173-shop-2025-12-27-20_27_58" src="https://github.com/user-attachments/assets/755746f9-cb13-420e-a96c-de31df998120" />

### 2. **Shopping Cart**

- Add/remove items from cart
- Update quantities
- View total price
- Redux manages cart state
  <img width="1920" height="1490" alt="screencapture-localhost-5173-cart-2025-12-27-20_32_07" src="https://github.com/user-attachments/assets/6a05a36d-5761-49fb-9d67-bd02638b9a13" />

### 3. **Wishlist**

- Save favorite products
- Add wishlist items to cart
- Persistent across navigation
  <img width="1920" height="1580" alt="screencapture-localhost-5173-wishlist-2025-12-27-20_31_56" src="https://github.com/user-attachments/assets/6066d8df-a12d-4ff6-a072-8014a0393ad4" />

### 4. **Product Details**

- View detailed information about products
- See product specifications and reviews
- View related products
  <img width="1920" height="2408" alt="screencapture-e-commerce-website-frontend-develop-vercel-app-shop-2-2025-12-27-20_50_34" src="https://github.com/user-attachments/assets/1b24015b-5d69-42ce-b236-b894dc708524" />

### 5. **User Authentication**

- Login page for existing users
- Register page for new users
- Separate pages for auth (not inside main layout)

### 6. **Responsive Design**

- Mobile-friendly interface using Tailwind CSS
- Works on all screen sizes
- Tailwind's utility classes make responsive design easy

### 7. **Category Navigation**

- Browse products by category
- Dynamic category pages

---

## 🧩 Component Guide

### How to Understand Any Component

```jsx
// 1. Imports (things the component needs)
import React from "react";
import { useSelector } from "react-redux"; // Get data from Redux

// 2. Component definition
const MyComponent = ({ prop1, prop2 }) => {
  // 3. Get data from Redux if needed
  const data = useSelector((state) => state.someSlice);

  // 4. Component logic here

  // 5. Return JSX (what shows on screen)
  return <div>{/* Display content here */}</div>;
};

export default MyComponent;
```

### Key Components Explained

#### **Navbar Components** 🧭

- **Navbar.jsx**: Main navigation wrapper
- **NavbarTop.jsx**: Top bar (logo, search, user menu)
- **NavbarMiddle.jsx**: Middle section (main nav links)
- **NavbarBottom.jsx**: Bottom bar (categories)

#### **Product Components** 📦

- **ProductCards.jsx**: Displays a grid of products
- **SingleProduct.jsx**: Shows one product in detail
- **ProductTabs.jsx**: Shows product info in tabs

#### **Shop Pages** 🛍️

- **ShopPage.jsx**: Main shopping page layout
- **ShopFiltering.jsx**: Filters and search options
- **CartPage.jsx**: Shopping cart review
- **Wishlist.jsx**: Saved items page

#### **Home Page Sections** 🏠

- **HeroSection.jsx**: Eye-catching banner
- **Categories.jsx**: Category showcase
- **TrendingProducts.jsx**: Popular products
- **DealsSection.jsx**: Special offers/promotions

---

## 📊 State Management (Redux Explanation)

### What is State?

State = Current data of your app

- What items are in the cart?
- What's the user's wishlist?
- What products are available?

### Why Redux?

Without Redux:

```jsx
// Problem: Data is stuck inside components
App.jsx has cart data
  ↓
Pass to ShopPage
  ↓
Pass to ProductCard
// Takes forever and makes code messy!
```

With Redux:

```jsx
// Solution: Central store, access from anywhere
Redux Store (has all data)
     ↑
Accessed by any component instantly
```

### The Three Redux Files

#### **1. store.js** (Setup)

```javascript
// This is like setting up a library
// We tell Redux: "Here are the different data sections"
// - cart (shopping cart data)
// - wishlist (favorite items)
// - products (all products in the store)
```

#### **2. cartSlice.js** (Cart Logic)

```javascript
// This handles:
// - Adding items to cart
// - Removing items
// - Updating quantities
// - Calculating totals
```

#### **3. wishlistSlice.js & productSlice.js**

```javascript
// Same idea but for:
// - wishlistSlice: Adding/removing favorites
// - productSlice: Managing product list and filters
```

### How to Use Redux in a Component

```jsx
import { useSelector, useDispatch } from "react-redux";

const MyComponent = () => {
  // Get data FROM Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Get the function to UPDATE Redux
  const dispatch = useDispatch();

  // When user clicks button, update Redux
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <p>Items in cart: {cartItems.length}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
```

### Our Routes

```
/ ........................... Home page
/shop ........................ All products
/shop/:id .................... Single product details
/categories/:categoryName .... Category page
/search ...................... Search results
/cart ........................ Shopping cart
/wishlist .................... Wishlist
/contact ..................... Contact page
/login ....................... Login page
/register .................... Register page
```

```

The `:id` and `:categoryName` are dynamic - they change based on what user clicks.
```
