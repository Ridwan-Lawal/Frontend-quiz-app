import Button from "./OptionButton";
import NextButton from "./NextButton";
import { MdOutlineCancel } from "react-icons/md";
import OptionButton from "./OptionButton";

// you can create a different button for the subject and the questions options

function Question({
  isDark,
  question,
  index,
  numQuestions,
  dispatch,
  answerSelected,
  isSubmitClicked,
}) {
  return (
    <div
      className={`${
        isDark ? "text-almostWhite" : "text-almostDark"
      }   mt-14 md:mt-16 lg:flex lg:items-start lg:justify-between gap-8`}
    >
      {/* question and progress */}
      <section className="lg:flex lg:flex-col lg:justify-between  lg:h-[400px] w-[50%] ">
        <div className="mb-3">
          <p className="italic text-[15px] sm:text-lg lg:text-[20px] ">
            Question {index + 1} of {numQuestions}
          </p>
          <p className="text-xl font-medium mt-3 sm:text-[28px] lg:text-[32px]">
            {question?.question}
          </p>
        </div>
        <progress value={index + 1} max={numQuestions} />
      </section>

      {/* options */}
      <section className="w-[50%]">
        <div className="space-y-5 mt-12 sm:mt-16 lg:mt-0">
          {question?.options.map((option, i) => (
            <OptionButton
              key={i}
              answerSelected={answerSelected}
              isSubmitClicked={isSubmitClicked}
              correctAnswer={question?.answer}
              padding="py-2.5 px-3.5"
              disabled={isSubmitClicked && answerSelected && true}
              content={option}
              buttonPadding="p-3 sm:p-4 lg:p-5"
              isDark={isDark}
              onClick={() => {
                dispatch({ type: "answerSelected", payload: option });
              }}
              hover="hover:border-[3px] hover:border-purple-600"
            >
              {i === 0 && "A"}
              {i === 1 && "B"}
              {i === 2 && "C"}
              {i === 3 && "D"}
            </OptionButton>
          ))}
        </div>
        {/* Button for submitting answers question */}
        {/* {!isSubmitClicked && !answerSelected && (
          <NextButton
            content="Submit Answer"
            onClick={() =>
              dispatch({ type: "submitClick", payload: question.answer })
            }
          />
        )} */}

        {/* button for going to the next question and submit and also finish quiz */}
        <NextButton
          dispatch={dispatch}
          isSubmitClicked={isSubmitClicked}
          answerSelected={answerSelected}
          question={question}
          questionIndex={index}
          numQuestions={numQuestions}
        />

        {isSubmitClicked && !answerSelected && (
          <p className="text-red-400 justify-center text-lg sm:text-[22px] mt-6 flex gap-4 items-center">
            <MdOutlineCancel /> Please select an answer
          </p>
        )}
      </section>
    </div>
  );
}

export default Question;

// border={`

//               ${
//                 option === answerSelected &&
//                 !isSubmitClicked &&
//                 "border-[3px] border-purple-600"
//               }
//                 ${
//                   answerSelected &&
//                   isSubmitClicked &&
//                   option === question.answer &&
//                   "border-[3px] border-green-500"
//                 }

//                 ${
//                   option === answerSelected &&
//                   isSubmitClicked &&
//                   "border-[3px] border-red-500"
//                 }
//                 `}

// icon={`${
//   answerSelected &&
//   isSubmitClicked &&
//   option === question.answer &&
//   "icon-correct"
// }

// ${option === answerSelected && isSubmitClicked && "icon-error"}`}
