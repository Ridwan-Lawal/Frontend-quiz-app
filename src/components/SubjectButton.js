import Subject from "./Subject";

function SubjectButton({
  content,
  bgColor,
  padding,
  textStyling,
  isDark,
  onClick,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className={`shadow-lg  transition-colors duration-400   ${
        isDark ? "bg-darkGray shadow-almostDark" : "bg-white shadow-gray-200"
      }  p-4 ${textStyling} relative  rounded-xl flex w-full   gap-8 items-center `}
    >
      <Subject
        content={content}
        bgColor={bgColor}
        padding={padding}
        textstyling={textStyling}
        isDark={isDark}
      >
        {children}
      </Subject>
    </button>
  );
}

export default SubjectButton;
