import { createContext } from "react";

const ThemeContext = createContext ([
  "",
  theme => theme
]);

export default ThemeContext;