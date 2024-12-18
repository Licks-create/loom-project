
# loom-project
# Technical Documentation

## How to Run the Code

### Prerequisites
To run this project, ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- A modern web browser (e.g., Chrome, Firefox, or Edge)

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/transaction-table.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd transaction-table
   ```

3. **Install Dependencies:**
   Install all required packages using npm:
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   Launch the application in development mode:
   ```bash
   npm run dev
   ```

5. **Access the Application:**
   Open your web browser and visit:
   ```
   http://localhost:3000
   ```

6. **Build for Production (Optional):**
   If you wish to create a production build, run:
   ```bash
   npm run build
   ```
   The build output will be available in the `dist` directory.

## Technical Decisions

### 1. **Component-Based Architecture**
The application uses a modular architecture to enhance reusability and maintainability. Key components include:
- **`Disclaimer` Component:** Guides users for optimal device usage.
- **`TransactionTable` Component:** Renders transaction data in a table.
- **`TableRow` Component:** Handles individual transaction rows with logic to group dates.

This approach ensures that each component has a single responsibility, making the code easier to understand and extend.

### 2. **Tailwind CSS for Styling**
Tailwind CSS was chosen to implement a utility-first design system. This decision was made to:
- Reduce the need for custom CSS files.
- Simplify the process of applying styles directly in the JSX code.
- Allow for rapid prototyping and responsive design with built-in utilities.

### 3. **State Management with React Hooks**
React's `useState` hook is used for local state management:
- The `display` state determines whether the `Disclaimer` component is shown.
- This approach avoids the overhead of introducing a more complex state management library like Redux for such a small-scale application.

### 4. **Dynamic Rendering with Conditional Logic**
The `TableRow` component includes conditional rendering logic to avoid displaying duplicate dates. This improves the visual clarity of the table and reduces redundancy.

Example:
```jsx
{preDate === date ? null : (preDate = date) && <div>{formattedDate}</div>}
```

### 5. **Icons with Material-UI**
Material-UI icons were chosen for their:
- Professional and modern appearance.
- Ease of integration into React components.
- Prebuilt interactivity, such as hover effects.

Icons like `AddCircleIcon` and `DocumentScannerIcon` provide intuitive user interactions for attachment-related actions.

### 6. **Responsive Design with Media Queries**
Responsive design is achieved using Tailwind CSS media query utilities (e.g., `max-[600px]`). The `Disclaimer` component and `TransactionTable` dynamically adapt to smaller screen sizes.

### 7. **Use of Vite**
Vite was selected as the build tool due to its:
- Faster development server with hot module replacement (HMR).
- Optimized production build output.

### 8. **Static Transaction Data**
For simplicity, the transaction data is stored in a static JavaScript file (`transactionData.js`). This allows for quick testing and prototyping. Future enhancements can include:
- Integrating an API to fetch dynamic data.
- Using a database for persistent storage.

### 9. **Error and Prop Handling**
The project uses ESLint to enforce coding standards and detect unused variables. Additionally, PropTypes could be introduced in future iterations for type-checking component props.

### Future Considerations
- **Sorting and Filtering:**
  Add UI controls and logic for sorting transactions by date, amount, or other criteria.
- **Backend Integration:**
  Connect the app to a backend API for dynamic transaction data.
- **Testing:**
  Implement unit and integration tests using Jest or React Testing Library.
- **Accessibility:**
  Improve ARIA compliance for screen readers.

---

This documentation aims to provide a clear understanding of the technical decisions and implementation details of the project.

