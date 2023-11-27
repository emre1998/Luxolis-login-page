import React from "react";
import ReactDOMClient from "react-dom/client";
import { DashboardLogin } from "./screens/DashboardLogin";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DashboardLogin />);
