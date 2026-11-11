import { createContext, useContext } from "react";

const theme = createContext<"light" | "dark">("light");
const name = createContext<string | null>(null);

function ShowTheme() {
  const contextTheme = useContext(theme);
  if (!contextTheme) return <p>no theme provided</p>;
  return <p>theme is {contextTheme}</p>;
}

function ThemeContext() {
  return (
    <>
      <theme.Provider value="dark">
        <ShowTheme />
      </theme.Provider>
    </>
  );
}

export default ThemeContext;
