import Image from "./Image";
import Subject from "./Subject";

function FinishScreen({ isDark, subjectType = "HTML" }) {
  const subjectBgColor = `${subjectType === "HTML" && "bg-red-50"} ${
    subjectType === "CSS" && "bg-green-50"
  } ${subjectType === "JavaScript" && "bg-blue-50"} ${
    subjectType === "Accessibility" && "bg-purple-50"
  }`;

  return (
    <div
      className={`${
        isDark ? "text-almostWhite" : "text-almostDark"
      }  mt-14 md:mt-16 flex flex-col lg:flex-row gap-10 md:gap-14 lg:justify-between`}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-light ">
        Quiz completed <span className="font-medium block">You scored...</span>
      </h2>

      <div className=" lg:w-[45%]">
        <section
          className={`shadow-md ${
            isDark
              ? "bg-darkGray shadow-almostDark"
              : "bg-white shadow-gray-200"
          }  flex flex-col items-center gap-1  py-12 rounded-3xl px-8 w-full transition-colors duration-500`}
        >
          <div className="flex gap-5 items-center">
            <Subject
              bgColor={subjectBgColor}
              content={subjectType}
              isDark={isDark}
            >
              <Image icon="icon-html" width="w-8" />
            </Subject>
          </div>
          <p className="text-[90px] md:text-[110px] font-semibold">3</p>
          <p className={`text-xl ${isDark && "text-gray-200"} `}>Out of X</p>
        </section>

        <button className="play-again">Play Again</button>
      </div>
    </div>
  );
}

export default FinishScreen;
