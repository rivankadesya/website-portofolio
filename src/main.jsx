import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import "../src/../index.css";

// Debug logging
console.log("App starting...");
console.log(
  "Base path:",
  import.meta.env.VITE_REPO_NAME || "website-portofolio"
);

try {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Root element not found!");
  }

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  console.log("App rendered successfully");
} catch (error) {
  console.error("Failed to render app:", error);
  document.body.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; background: #0f0f1e; color: white; padding: 20px;">
      <h2 style="color: #00d9ff; margin-bottom: 20px;">Failed to Load Application</h2>
      <pre style="color: #ff4444; background: #1a1a2e; padding: 15px; border-radius: 8px; overflow: auto;">${
        error.message || error.toString()
      }</pre>
      <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #00d9ff; color: #0f0f1e; border: none; border-radius: 5px; cursor: pointer;">Reload Page</button>
    </div>
  `;
}
