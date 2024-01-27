import Subject from "./Subject";
import Image from "./Image";
import ThemeSwitch from "./ThemeSwitch";

function NavBar({ content = "HTML", bgColor = "bg-red", children }) {
  return (
    <nav className="flex justify-between items-center">
      {/* for the subject type when clicked */}
      <section className="flex items-center gap-8">
        <Subject>{children}</Subject>
      </section>

      {/* for the theme switch */}
      <ThemeSwitch />
    </nav>
  );
}

export default NavBar;
