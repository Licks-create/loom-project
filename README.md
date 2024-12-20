# Technical Documentation

## How to Run the Code


### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Licks-create/loom-project.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd loom-project
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
   http://localhost:5173/ or follow hosted link on your IDE terminal
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

### 4. **Icons with Material-UI**
Material-UI icons were chosen for their:
- Professional and modern appearance.
- Ease of integration into React components.
- Prebuilt interactivity, such as hover effects.

Icons like `AddCircleIcon` and `DocumentScannerIcon` provide intuitive user interactions for attachment-related actions.

### 5. **Responsive Design with Media Queries**
Responsive design is achieved using Tailwind CSS media query utilities (e.g., `max-[600px]`). The `Disclaimer` component and `TransactionTable` dynamically adapt to smaller screen sizes.


### 6. **Static Transaction Data**
For simplicity, the transaction data is stored in a static JavaScript file (`transactionData.js`). This allows for quick testing and prototyping. Future enhancements can include:
- Integrating an API to fetch dynamic data.
- Using a database for persistent storage.



---

This documentation aims to provide a clear understanding of the technical decisions and implementation details of the project.

