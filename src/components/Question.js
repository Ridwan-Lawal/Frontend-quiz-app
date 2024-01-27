import Button from "./Button";
import NextButton from "./NextButton";

function Question() {
  return (
    <div className="text-almostDark  mt-14 md:mt-16 lg:flex lg:items-start lg:justify-between">
      {/* question and progress */}
      <section className="lg:flex lg:flex-col lg:justify-between  lg:h-[400px] ">
        <div className="mb-1">
          <p className="italic text-[15px] sm:text-lg lg:text-[20px] ">
            Question X of X
          </p>
          <p className="text-xl font-medium mt-3 sm:text-[28px] lg:text-[32px]">
            What does HTML stand for?
          </p>
        </div>
        <progress value={50} max={100} />
      </section>

      {/* options */}
      <section>
        <div className="space-y-5 mt-12 sm:mt-16 lg:mt-0">
          <Button
            textstyling="text-darkGray"
            padding="py-2.5 px-3.5"
            bgColor="bg-lightGray"
            content="Lorem ipsum dolor sit amet."
            buttonPadding="p-3 sm:p-4 lg:p-5"
          >
            A
          </Button>

          <Button
            textstyling="text-darkGray"
            padding="py-2.5 px-3.5"
            bgColor="bg-lightGray"
            content="Lorem ipsum dolor sit amet."
          >
            B
          </Button>

          <Button
            textstyling="text-darkGray"
            padding="py-2.5 px-3.5"
            bgColor="bg-lightGray"
            content="Lorem ipsum dolor sit amet."
          >
            C
          </Button>

          <Button
            textstyling="text-darkGray"
            padding="py-2.5 px-3.5"
            bgColor="bg-lightGray"
            content="Lorem ipsum dolor sit amet."
          >
            D
          </Button>
        </div>
        {/* Button for going to the next question */}
        <NextButton />

        <p></p>
      </section>
    </div>
  );
}

export default Question;
