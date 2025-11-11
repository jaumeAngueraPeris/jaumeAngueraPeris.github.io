import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SITE_CONFIG } from './config.ts';

document.title = `${SITE_CONFIG.name} - KTH Research Portfolio`;
createRoot(document.getElementById("root")!).render(<App />);
