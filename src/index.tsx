import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-responsive-modal/styles.css";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <SnackbarProvider
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
        >
            <App />
        </SnackbarProvider>
    </React.StrictMode>
);
