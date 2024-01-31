function NextButton({
  dispatch,
  isSubmitClicked,
  answerSelected,
  question,
  numQuestions,
  questionIndex,
}) {
  if (questionIndex !== numQuestions - 1 && isSubmitClicked && answerSelected) {
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="bg-pink text-lg sm:text-[22px] rounded-lg font-medium w-full py-3 mt-7 text-white"
      >
        Next Question
      </button>
    );
  } else if (
    questionIndex === numQuestions - 1 &&
    isSubmitClicked &&
    answerSelected
  ) {
    return (
      <button
        onClick={() => dispatch({ type: "finishQuiz" })}
        className="bg-pink text-lg sm:text-[22px] rounded-lg font-medium w-full py-3 mt-7 text-white"
      >
        Submit Quiz
      </button>
    );
  } else {
    return (
      <button
        onClick={() =>
          dispatch({ type: "submitClick", payload: question.answer })
        }
        className="bg-pink text-lg sm:text-[22px] rounded-lg font-medium w-full py-3 mt-7 text-white"
      >
        Submit Answer
      </button>
    );
  }
}

export default NextButton;
