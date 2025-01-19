import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import ChatApp from "./ChatApp";

// Dynamically import the ChatApp component
// const ChatApp = React.lazy(() => import("./ChatApp"));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ChatApp />
  </Suspense>
);

const rootElement = document.getElementById("react-root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
