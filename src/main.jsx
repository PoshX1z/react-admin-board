import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
//license for sysfusion, expire on 2 september.
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense("Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVFpR2Nbe053flZBal9WVAciSV9jS3pTfkVgWXhdd3ddRGJfVg==");

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);
