import Image from "./Image";

function ThemeSwitch({ isDark, dispatch }) {
  return (
    <form className="flex items-center gap-3">
      <Image icon={isDark ? "icon-sun-light" : "icon-sun-dark"} />
      <div
        onClick={() => dispatch({ type: "themeChange" })}
        className=" rounded-full cursor-pointer bg-purple-600 purple w-fit flex items-center p-1 gap-4"
      >
        <input
          type="radio"
          checked={isDark}
          name="theme"
          className={`radio transition-all duration-500  cursor-pointer ${
            !isDark ? "opacity-100" : "opacity-0"
          } `}
        />
        <input
          type="radio"
          checked={isDark}
          name="theme"
          className={`radio transition-all duration-500  cursor-pointer ${
            isDark ? "opacity-100" : "opacity-0"
          } `}
        />
      </div>
      <Image icon={isDark ? "icon-moon-light" : "icon-moon-dark"} />
    </form>
  );
}

export default ThemeSwitch;
