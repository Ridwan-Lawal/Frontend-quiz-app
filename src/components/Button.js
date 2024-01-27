import Subject from "./Subject";

function Button({
  bgColor = "bg-red",
  children,
  content = "button",
  textstyling,
  padding,
  buttonPadding = "p-4",
}) {
  return (
    <button
      className={`shadow-md shadow-gray-200 ${buttonPadding} bg-white rounded-xl flex w-full  gap-8 items-center`}
    >
      <Subject
        content={content}
        bgColor={bgColor}
        padding={padding}
        textstyling={textstyling}
      >
        {children}
      </Subject>
    </button>
  );
}

export default Button;
