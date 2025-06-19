# Playwright MCP PageObjects Demo

This project demonstrates the use of Playwright for end-to-end web testing using the Model Context Protocol (MCP) and the Page Object Model (POM) design pattern. It is designed for testing the SauceDemo web application.

## Project Structure

```
├── context/
│   ├── webtestcontext
│   └── pageObjects/
│       ├── CheckoutPage.ts
│       ├── LoginPage.ts
│       └── ProductsPage.ts
├── playwright.config.ts
├── package.json
├── playwright-report/
│   └── index.html
├── test-results/
├── tests/
│   └── saucedemo-checkout.spec.ts
```

- **context/pageObjects/**: Contains Page Object classes for different pages (Login, Products, Checkout).
- **tests/**: Contains Playwright test specs.
- **playwright.config.ts**: Playwright configuration file.
- **playwright-report/**: Stores Playwright HTML reports after test runs.
- **test-results/**: Stores test result artifacts.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd pw-MCP-PageObjects-demo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running Tests

To run all tests:
```sh
npx playwright test
```

To run a specific test file:
```sh
npx playwright test tests/saucedemo-checkout.spec.ts
```

### Viewing Reports

After running tests, view the HTML report:
```sh
npx playwright show-report
```

## Project Highlights
- **Page Object Model**: Encapsulates page interactions for maintainable and reusable test code.
- **Playwright**: Fast and reliable end-to-end testing framework.
- **MCP Integration**: Demonstrates context-driven testing (if applicable).