import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <div className="font-rubik  min-h-screen bg-mobileDarkBackground sm:bg-tabletDarkBackground  lg:bg-desktopDarkBackground bg-no-repeat bg-topleft ">
      <div className="bg-almostWhite min-h-screen bg-opacity-[0.98] px-8 sm:px-14 py-7 sm:py-10 ">
        <div className="max-w-5xl mx-auto">
          <NavBar>
            <img src="/icon-html.svg" alt="" className="w-8" />
          </NavBar>

          {/* <StartScreen /> */}
          <Question />
        </div>
      </div>
    </div>
  );
}

export default App;
