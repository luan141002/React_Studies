import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// import App from "./App";
// import UseEffectExample from "./useEffect";
// import Timer from "./Timer";
// import ChooseImage from "./ChooseImage";
// import FakeChatApp from "./FakeChatApp";
// import UseMemoExample from "./UseMemoExample";
import reportWebVitals from "./reportWebVitals";
// import UseReducerExample from "./UseReducerExample";
// import UseContext from "./UseContextExample/App";
// import { ThemeProvider } from "./ThemeContext";
import HomePage from "./Pages/homePage";
import { StoreProvider } from "./React-Context";
import UseImperativeHandleE from "./UseImperativeHandle";
import App1 from "./react_context";
// fake comments
function fakeComment(id) {
  setInterval(() => {
    // create a fake comment event
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung của lesson ${id}`,
      })
    );
  }, 2000);
}
fakeComment(1);
fakeComment(2);
fakeComment(3);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffectExample /> */}
    {/* <Timer /> */}
    {/* <ChooseImage /> */}
    {/* <FakeChatApp /> */}
    {/* <UseMemoExample /> */}
    {/* <UseReducerExample /> */}
    {/* <App1 /> */}
    <StoreProvider>
      <Router>
        <HomePage />
      </Router>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
