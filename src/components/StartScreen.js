import Button from "./Button";

function StartScreen() {
  return (
    <div className="border mt-14 md:mt-16 text-almostDark transition-all">
      <section>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
          Welcome to the{" "}
          <span className="font-medium block">Frontend Quiz!</span>
        </h2>

        <p className="italic text-lg text-grays mt-5 sm:mt-10 md:mt-12">
          Pick a subject to get started
        </p>
      </section>

      {/* subjects */}
      <section className="mt-9 sm:mt-11 md:mt-12 space-y-4 sm:space-y-6">
        <Button content="HTML">
          <img src="/icon-html.svg" alt="" className="w-8" />
        </Button>

        <Button content="CSS">
          <img src="/icon-css.svg" alt="" className="w-8" />
        </Button>

        <Button content="JavaScript">
          <img src="/icon-js.svg" alt="" className="w-8" />
        </Button>

        <Button content="Accessibility">
          <img src="/icon-html.svg" alt="" className="w-8" />
        </Button>
      </section>
    </div>
  );
}

export default StartScreen;
