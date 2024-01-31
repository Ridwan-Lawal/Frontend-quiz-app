import Image from "./Image";
import Subject from "./Subject";

function OptionButton({
  children,
  content = "button",
  textstyling,
  padding,
  buttonPadding = "p-4",
  isDark,
  onClick,
  disabled,
  isSubmitClicked,
  answerSelected,
  correctAnswer,
  hover,
}) {
  let border = "";
  let optionBgColor = "bg-almostWhite";
  let optionTextColor;
  let answer;

  if (answerSelected === content && !isSubmitClicked) {
    border = "border-[3px] border-purple-600";
    optionBgColor = "bg-purple-600";
    optionTextColor = "text-white";
  } else {
    optionTextColor = "text-darkGray";
  }

  if (isSubmitClicked && answerSelected && content === correctAnswer) {
    border = "border-[3px] border-green-400";
    optionBgColor = "bg-green-400";
    optionTextColor = "text-white";
    answer = "correct";
  }

  if (
    isSubmitClicked &&
    answerSelected !== correctAnswer &&
    content === answerSelected
  ) {
    border = "border-red-400";
    optionBgColor = "bg-red-400";
    optionTextColor = "text-white";
    answer = "wrong";
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`shadow-md ${
        !disabled && hover
      } transition-colors duration-400   ${border} border-[3px] ${
        isDark && !border && "border-darkGray"
      } ${!isDark && !border && "border-white"} ${
        isDark ? "bg-darkGray  shadow-almostDark" : "bg-white  shadow-gray-200"
      }  ${buttonPadding} ${textstyling} relative  rounded-xl flex w-full ${
        disabled && "cursor-not-allowed"
      }  gap-8 group items-center flex`}
    >
      <Subject
        content={content}
        bgColor={optionBgColor}
        padding={padding}
        textstyling={optionTextColor}
        isDark={isDark}
      >
        {children}
      </Subject>

      {answer === "correct" && (
        <img src="/icon-correct.svg" icon="icon" className=" ml-auto w-8" />
      )}
      {answer === "wrong" && (
        <img src="/icon-error.svg" alt="icon" className="ml-auto w-8" />
      )}
    </button>
  );
}

export default OptionButton;
