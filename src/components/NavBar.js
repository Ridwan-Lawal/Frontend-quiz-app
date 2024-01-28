import Subject from "./Subject";
import Image from "./Image";
import ThemeSwitch from "./ThemeSwitch";

function NavBar({ content = "HTML", children, isDark, dispatch }) {
  const subjectBgColor = `${content === "HTML" && "bg-red-50"} ${
    content === "CSS" && "bg-green-50"
  } ${content === "JavaScript" && "bg-blue-50"} ${
    content === "Accessibility" && "bg-purple-50"
  }`;

  return (
    <nav className="flex justify-between items-center">
      {/* for the subject type when clicked */}
      <section className="flex items-center gap-8">
        <Subject
          bgColor={subjectBgColor}
          opacity={isDark ? "bg-opacity-100" : "bg-opacity-10"}
          isDark={isDark}
        >
          {children}
        </Subject>
      </section>

      {/* for the theme switch */}
      <ThemeSwitch isDark={isDark} dispatch={dispatch} />
    </nav>
  );
}

export default NavBar;
