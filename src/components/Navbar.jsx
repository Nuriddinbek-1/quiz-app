import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Navbar() {
  const { title } = useParams();
  const themeFromLocalStorage = () => {
    return localStorage.getItem("theme") || "light";
  };

  const [theme, setTheme] = useState(themeFromLocalStorage());

  const handleThemeToggle = () => {
    const newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <header className="header">
      <div className="container header-container">
        <div>
          {title && (
            <Link to={"/"} className="header-logo">
              <figure>
                <img src={`/assets/icon-${title}.svg`} alt={`${title} icon`} />
              </figure>
              <span>{title}</span>
            </Link>
          )}
        </div>
        <div>
          <div className="dark-btn" onClick={handleThemeToggle}>
            <input type="checkbox" checked={theme == "dark"} readOnly />
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
