
# **SnapReact Documentation**

## **Overview**

SnapReact is a powerful React project that provides a collection of UI features such as SnackBars, Alerts, Confirm Dialogs, and Custom Modals, all of which are easy to integrate into your React app.

## **Installation**

To get started, simply use `npx` or `yarn` to create a new app with the SnapReact template.

### Using **npx**:

```bash
npx create-snapreact my-app
```

### Using **yarn**:

```bash
yarn create snapreact my-app
```

This will generate a new project with the name `my-app` based on the SnapReact template. Once the installation is complete, you can start using the provided features directly in your components.

---

## **Core Features Usage**

### **1. SnackBar**

The SnackBar is a floating message that appears at the bottom of the screen. You can trigger it for various messages like success, error, or information.

#### **Usage**:

```js
import { snap_features } from '@nofal71/snapreact';

const { setSnackBar } = snap_features();

// Open SnackBar with Undo functionality
setSnackBar(true, "Snack message", () => setAlert("Undo action", "info"));

// Open SnackBar without undo
setSnackBar(true, "Snack message");
```

### **2. Alert**

Alerts are notifications that inform the user about important events or actions. You can trigger them with different severity levels such as success, error, or info.

#### **Usage**:

```js
import { snap_features } from '@nofal71/snapreact';

const { setAlert } = snap_features();

// Show a success alert
setAlert("Success message", "success");
```

### **3. Confirm Dialog**

The Confirm dialog allows you to prompt users for a decision (e.g., "Are you sure you want to delete?"). It includes customizable actions (buttons) for user interaction.

#### **Usage**:

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

You can create custom modals that display custom components, such as forms or interactive UI elements.

#### **Usage**:

```js
import { snap_features } from '@nofal71/snapreact';

const { setNewConfirm } = snap_features();

// Open custom modal with your custom component
setNewConfirm(true, <YourCustomComponent />);
```

---

## **Pre-configured Integrations**

- **Redux**: Redux is pre-configured with your project. You can access the store and dispatch actions as needed.
- **Theme**: Material UI (MUI) is set up with a default theme, which can be used as-is or customized further.
- **Routing**: React Router is set up to handle navigation in your app.

---

## **Conclusion**

With `@nofal71/snapreact`, you can integrate essential UI features such as SnackBars, Alerts, Confirm Dialogs, and Custom Modals into your React application effortlessly. The package is designed to save you time by offering pre-configured solutions for state management (Redux), theming (MUI), and routing (React Router).
