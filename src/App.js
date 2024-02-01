import { useEffect, useReducer } from "react";
import Button from "./components/OptionButton";
import FinishScreen from "./components/FinishScreen";
import NavBar from "./components/NavBar";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import Error from "./components/Error";
import Loader from "./components/Loader";
import { useSubjects } from "./components/useSubjects";
import quizzes from "./data.json";

// play again functionality
// also i want to display a button finish quiz when i submit the last quesiton

const initialState = {
  isDark: JSON.parse(localStorage.getItem("quizTheme")),
  status: "loading",
  error: "",
  subjects: [],
  subjectSelected: {},
  answerSelected: "",
  isSubmitClicked: false,
  index: 0,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "themeChange":
      return { ...state, isDark: !state.isDark };

    case "dataFailed":
      return { ...state, status: "error", error: action.payload };

    case "dataFetched":
      return { ...state, subjects: action.payload, status: "ready" };

    case "active":
      return { ...state, status: "active", subjectSelected: action.payload };

    case "answerSelected":
      return {
        ...state,
        answerSelected: action.payload,
        isSubmitClicked: false,
      };

    case "submitClick":
      return {
        ...state,
        isSubmitClicked: true,
        points:
          state.answerSelected === action.payload
            ? state.points + 1
            : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answerSelected: "",
        isSubmitClicked: false,
      };

    case "playAgain":
      return {
        ...state,
        status: "ready",
        error: "",
        subjectSelected: {},
        answerSelected: "",
        isSubmitClicked: false,
        index: 0,
        points: 0,
      };
    case "finishQuiz":
      return { ...state, status: "finished" };

    default:
      throw new Error("Unknown error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isDark,
    status,
    subjects,
    error,
    subjectSelected,
    index,
    answerSelected,
    isSubmitClicked,
    points,
  } = state;

  // for getting the fetching the subjects
  useSubjects(dispatch, quizzes);

  const numQuestions = subjectSelected?.questions?.length;

  const bgStyle = isDark
    ? "bg-mobileDarkBackground sm:bg-tabletDarkBackground  lg:bg-desktopDarkBackground "
    : "bg-mobileLightBackground sm:bg-tabletLightBackground  lg:bg-desktopLightBackground";

  useEffect(
    function () {
      localStorage.setItem("quizTheme", JSON.stringify(isDark));
    },
    [isDark]
  );

  return (
    <div
      className={`font-rubik  min-h-screen bg-no-repeat ${bgStyle} bg-topleft `}
    >
      <div
        className={` ${
          isDark
            ? "bg-almostDark bg-opacity-[0.96]"
            : "bg-almostWhite bg-opacity-[0.65]"
        }  min-h-screen  px-8 sm:px-14 py-7 sm:py-10 transition-colors duration-1000 `}
      >
        <div className="max-w-5xl mx-auto">
          <NavBar
            isDark={isDark}
            content={subjectSelected?.title}
            dispatch={dispatch}
          >
            <img src={subjectSelected?.icon} alt="" className="w-8" />
          </NavBar>

          {status === "loading" && <Loader isDark={isDark} />}

          {status === "error" && <Error error={error} isDark={isDark} />}

          {status === "ready" && (
            <StartScreen
              isDark={isDark}
              subjects={subjects}
              dispatch={dispatch}
            />
          )}
          {status === "active" && (
            <Question
              isDark={isDark}
              question={subjectSelected?.questions[index]}
              index={index}
              dispatch={dispatch}
              answerSelected={answerSelected}
              isSubmitClicked={isSubmitClicked}
              numQuestions={numQuestions}
            />
          )}

          {status === "finished" && (
            <FinishScreen
              isDark={isDark}
              numQuestions={numQuestions}
              points={points}
              subjectType={subjectSelected?.title}
              subjectImage={subjectSelected?.icon}
              dispatch={dispatch}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
