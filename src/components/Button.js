import Subject from "./Subject";

function Button({
  bgColor = "bg-red",
  children,
  content = "button",
  textstyling,
  padding,
  buttonPadding = "p-4",
  isDark,
}) {
  return (
    <button
      className={`shadow-md ${
        isDark ? "bg-darkGray shadow-almostDark" : "bg-white shadow-gray-200"
      }  ${buttonPadding}  rounded-xl flex w-full  gap-8 items-center`}
    >
      <Subject
        content={content}
        bgColor={bgColor}
        padding={padding}
        textstyling={textstyling}
        isDark={isDark}
      >
        {children}
      </Subject>
    </button>
  );
}

export default Button;
