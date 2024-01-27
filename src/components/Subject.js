function Subject({
  bgColor = "bg-red",
  children,
  content = "HTML",
  opacity = "bg-opacity-10",
  padding = "p-1 ",
  textstyling,
}) {
  return (
    <>
      <section
        className={`${bgColor} text-lg sm:text-[24px] font-semibold ${textstyling} ${opacity} ${padding} rounded-md`}
      >
        {children}
      </section>

      <strong className="text-lg sm:text-[24px]  font-medium text-darkGray">
        {content}
      </strong>
    </>
  );
}

export default Subject;
