import Button from "./Button";

function StartScreen({ isDark, subjects, dispatch }) {
  return (
    <div
      className={`mt-14 md:mt-16 text-almostDark ${
        isDark ? "text-almostWhite" : "text-almostDark"
      } transition-all`}
    >
      <section>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
          Welcome to the{" "}
          <span className="font-medium block">Frontend Quiz!</span>
        </h2>

        <p className="italic text-lg  mt-5 sm:mt-10 md:mt-12">
          Pick a subject to get started
        </p>
      </section>

      {/* subjects */}
      <section className="mt-9 sm:mt-11 md:mt-12 space-y-4 sm:space-y-6">
        {subjects.map((subject, i) => (
          <Button
            key={i}
            onClick={() => dispatch({ type: "active" })}
            content={subject?.title}
            bgColor={subject?.bgColor}
            isDark={isDark}
          >
            <img src={subject?.icon} alt="" className="w-8" />
          </Button>
        ))}
      </section>
    </div>
  );
}

export default StartScreen;
