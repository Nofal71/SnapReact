# **SnapReact Documentation**

## **Overview**

**SnapReact** is a powerful React library that provides an array of essential UI components such as SnackBars, Alerts, Confirm Dialogs, and Custom Modals. These features are easy to integrate into your React app, allowing you to enhance user interaction and experience with minimal effort.

## **Installation**

You can install **SnapReact** in your project by either cloning the repository or installing it via **NPM** or **Yarn**.

### **Clone the Repository**

If you prefer to clone the repository directly:

```bash
git clone git@github.com:Nofal71/SnapReact.git
```

### **Install via NPM or Yarn**

Alternatively, you can install **SnapReact** directly into your project using **NPM** or **Yarn**.

**Using NPM**:

```bash
npm install @nofal71/snapreact
```

**Using Yarn**:

```bash
yarn add @nofal71/snapreact
```

Once installed, you can start using the provided features in your components.

---

## **Core Features Usage**

### **1. SnackBar**

The SnackBar is a floating message that appears at the bottom of the screen. It can be used to display messages such as success, error, or information.

#### **Usage Example**:

```js
import { snap_features } from '@nofal71/snapreact';

const { setSnackBar } = snap_features();

// Open SnackBar with Undo functionality
setSnackBar(true, "Snack message", () => setAlert("Undo action", "info"));

// Open SnackBar without undo
setSnackBar(true, "Snack message");
```

### **2. Alert**

Alerts are notifications that inform users about important events or actions. These alerts can have different severity levels, such as success, error, or info.

#### **Usage Example**:

```js
import { snap_features } from '@nofal71/snapreact';

const { setAlert } = snap_features();

// Show a success alert
setAlert("Success message", "success");
```

### **3. Confirm Dialog**

The Confirm Dialog prompts users to make a decision, such as confirming a delete action. It includes customizable actions (buttons) for user interaction.

#### **Usage Example**:

```js
import { snap_features } from '@nofal71/snapreact';

const { setConfirm } = snap_features();

// Show confirm dialog with Yes/No buttons
setConfirm(true, "Confirmation title", "Are you sure?", [
  { label: 'Yes', handler: () => setAlert("Confirmed", "success") },
  { label: 'No', handler: () => setAlert("Cancelled", "error") },
]);
```

### **4. Custom Modal**

Custom Modals allow you to display custom components, such as forms or interactive UI elements.

#### **Usage Example**:

```js
import { snap_features } from '@nofal71/snapreact';

const { setNewConfirm } = snap_features();

// Open custom modal with your custom component
setNewConfirm(true, <YourCustomComponent />);
```

---

## **Pre-configured Integrations**

SnapReact comes with the following integrations pre-configured:

- **Redux**: Integrated for state management. Access the store and dispatch actions as needed.
- **Material UI (MUI)**: Pre-configured theme setup. You can use the default theme or customize it according to your needs.
- **React Router**: Set up for seamless routing in your app.

---

## **Conclusion**

With **SnapReact**, you can effortlessly integrate essential UI features like SnackBars, Alerts, Confirm Dialogs, and Custom Modals into your React applications. The package is designed to save you time by offering pre-configured solutions for state management (Redux), theming (MUI), and routing (React Router). It's perfect for developers looking to enhance user experience with minimal setup.
