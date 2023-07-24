import Content from "./content";
import { ThemeContext } from "../ThemeContext";
import "./Theme.css";
import { useContext } from "react";

// Context
// CompA => CompB => CompC

function ChangeTheme() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.changeTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}
export default ChangeTheme;
