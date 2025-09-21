import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const handleThemeToggle = () => {
    const newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <header className="header">
      <div className="container header-container">
        <div>1</div>
        <div>
          <div className="dark-btn" onClick={handleThemeToggle}>
            <input type="checkbox" />
            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
