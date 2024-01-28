import { useEffect, useReducer } from "react";
import Button from "./components/Button";
import FinishScreen from "./components/FinishScreen";
import NavBar from "./components/NavBar";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import Error from "./components/Error";

const initialState = {
  isDark: false,
  status: "loading",
  error: "",
  subjects: [],
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
      return { ...state, status: "active" };

    default:
      throw new Error("Unknown error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isDark, status, subjects, error } = state;

  const bgStyle = isDark
    ? "bg-mobileDarkBackground sm:bg-tabletDarkBackground  lg:bg-desktopDarkBackground "
    : "bg-mobileLightBackground sm:bg-tabletLightBackground  lg:bg-desktopLightBackground";

  // to fetch questions

  useEffect(function () {
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function getQuestions() {
      try {
        const res = await fetch(`http://localhost:3002/quizzes`, { signal });

        if (!res.ok) throw new Error("Something went wrong fetching questions");

        const data = await res.json();
        console.log(data);
        dispatch({ type: "dataFetched", payload: data });
      } catch (err) {
        if (err.name === "AbortError") return;

        dispatch({ type: "dataFailed", payload: err.message });
      }
    }

    getQuestions();

    return () => abortController.abort();
  }, []);

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
          <NavBar isDark={isDark} dispatch={dispatch}>
            <img src="/icon-html.svg" alt="" className="w-8" />
          </NavBar>

          <Error error={error} />

          {/* {status === "ready" && (
            <StartScreen
              isDark={isDark}
              subjects={subjects}
              dispatch={dispatch}
            />
          )}
          {status === "active" && <Question isDark={isDark} />} */}

          {/* <FinishScreen isDark={isDark} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
