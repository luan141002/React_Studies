import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

function Paragraph() {
  const Context = useContext(ThemeContext);
  return (
    <p className={Context.theme}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur dicta
      aliquid nam mollitia ullam qui in adipisci ipsam ab ea, architecto veniam
      error expedita obcaecati quasi soluta consequuntur alias tempore?
    </p>
  );
}
export default Paragraph;
