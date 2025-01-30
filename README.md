## **SnapReact Documentation**

### **Overview**

SnapReact is a feature-rich React package designed to simplify the integration of common UI components such as SnackBars, Alerts, Confirm Dialogs, and Custom Modals. It also comes with pre-configured solutions for state management, theming, and routing. With the added flexibility of templates in both JavaScript (`js-mui`) and TypeScript (`ts-mui`), SnapReact is an ideal choice for rapid React app development. It’s powered by the Vite engine to offer fast and efficient development.

### **Installation**

You can get started with SnapReact using `npx` or `yarn`.

#### **Using `npx` (no installation required)**:
To scaffold a new SnapReact project without global installation, simply run:

```bash
npx create-snap-react-app my-app
```

This command will create a new project named `my-app` using the latest version of SnapReact.

#### **Using `yarn` (global installation)**:
Alternatively, you can install the CLI tool globally using Yarn:

```bash
yarn global add create-snap-react-app
```

Once installed, create a new SnapReact project by running:

```bash
create-snap-react-app my-app
```

This will set up your new SnapReact project in the `my-app` folder.

---

### **Core Features Usage**

#### **1. SnackBar**

The SnackBar displays floating messages at the bottom of the screen, perfect for notifications like success, error, or information.

##### **Usage**:

```js
import { snap_features } from 'snap-features';

const { setSnackBar } = snap_features();

// Open SnackBar with Undo functionality
setSnackBar(true, "Snack message", () => setAlert("Undo action", "info"));

// Open SnackBar without undo
setSnackBar(true, "Snack message");
```

#### **2. Alert**

Alerts notify users about important events. You can customize the severity (success, error, info) based on your needs.

##### **Usage**:

```js
import { snap_features } from 'snap-features';

const { setAlert } = snap_features();

// Show a success alert
setAlert("Success message", "success");
```

#### **3. Confirm Dialog**

The Confirm Dialog asks users to confirm actions (e.g., delete items). You can set custom buttons with handlers for each decision.

##### **Usage**:

```js
import { snap_features } from 'snap-features';

const { setConfirm } = snap_features();

// Show confirm dialog with Yes/No buttons
setConfirm(true, "Confirmation title", "Are you sure?", [
  { label: 'Yes', handler: () => setAlert("Confirmed", "success") },
  { label: 'No', handler: () => setAlert("Cancelled", "error") },
]);
```

#### **4. Custom Modal**

Custom modals can display interactive components, like forms, within your application.

##### **Usage**:

```js
import { snap_features } from 'snap-features';

const { setNewConfirm } = snap_features();

// Open custom modal with your custom component
setNewConfirm(true, <YourCustomComponent />);
```

---

### **Pre-configured Integrations**

- **Redux**: Redux is pre-configured and ready for use. You can access the store and dispatch actions as needed.
- **Theme**: Material UI (MUI) is set up with a default theme, customizable to suit your needs.
- **Routing**: React Router is already integrated for easy navigation handling.

---

### **Templates**

SnapReact includes two templates for your convenience:

- **js-mui template**: A JavaScript-based template using Material UI.
- **ts-mui template**: A TypeScript-based template using Material UI.

Simply choose the template based on your project needs when starting your app.

---

### **What You Get**

#### **JavaScript with MUI (pre-configured)**

![image](https://github.com/user-attachments/assets/8704b260-5434-4d2c-b836-146efdab99e6)

#### **Typescript with MUI (pre-configured)**

![image](https://github.com/user-attachments/assets/5a4b7a4c-1024-4d97-b2de-84bdc03791a1)

---

### **Conclusion**

SnapReact offers a streamlined solution for integrating essential UI features like SnackBars, Alerts, Confirm Dialogs, and Custom Modals into your React application. With pre-configured Redux, MUI themes, and React Router, SnapReact helps you save time and focus on building your app. Whether you're using the `js-mui` or `ts-mui` template, SnapReact is designed to support your React development needs from start to finish.

---

This update includes the new `npx` and `yarn` commands for installing the SnapReact CLI tool, ensuring users can easily scaffold new projects using the SnapReact templates.

---