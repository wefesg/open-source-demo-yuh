# 💻 Motion-U: Used Laptop Marketplace (Bug Hunt Demo)

Welcome to the **Motion-U Technical Operations** open-source demonstration project!  
This repository contains an intentionally **unstable** web application designed to help club members practice their **debugging**, **UI/UX fixing**, and **state management** skills.

> ⚠️ This project is a sandbox. It’s meant to be broken — and it's your job to make it production-ready.

---

## 🚀 The Stack

- **HTML5**
- **CSS3** (Custom layouts)
- **Vanilla JavaScript**  
  - State management via `localStorage`

---

## 🛠️ Project Structure

The project consists of three main files:

- **`index.html`**  
  The main marketplace hub with search, filtering, and **Add to Cart** logic.

- **`product.html`**  
  The dynamic details page that parses URL parameters to display laptop specs.

- **`cart.html`**  
  The checkout system that handles persistent data and price calculations.

---

## 🤝 How to Contribute

We follow a **"Bug-to-Feature"** workflow. To contribute, follow these steps:

---

### 1. Identify an Issue

Check the **Issues** tab in this repository. Tasks are generally categorized as:

- `bug-ui`  
  Issues related to overlapping elements, hidden text, or broken responsiveness.

- `bug-logic`  
  JavaScript errors, broken search filters, or math errors in the cart.

- `enhancement`  
  New features like **Clear Cart** buttons, dark mode, or better feedback.

---

### 2. Setup Locally


# Clone the repository
git clone https://github.com/kaiden-A/open-source-demo.git

# Navigate to the folder
cd laptop-marketplace-demo

# Open index.html in your favorite browser to start hunting

## 3. Solving the Issue

1. **Fork** the repository to your own GitHub profile.

2. **Create a branch** for your fix:
   ```bash
   git checkout -b fix/broken-search-logic

## 4. Submit a Pull Request (PR)

When submitting your PR, please include:

- **The Issue number** you are fixing  
  Example: `Fixes #12`

- **A brief description** of why the code was broken  
  Example: *"Mismatched ID selector in event listener"*

- **A screenshot of the fixed UI**  
  *(Required if the fix was visual)*