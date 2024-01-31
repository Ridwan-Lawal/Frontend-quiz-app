function Subject({
  bgColor = "bg-red",
  children,
  content,
  padding = "p-1 ",
  textstyling,
  isDark,
}) {
  return (
    <>
      <section
        className={`${bgColor} text-lg sm:text-[24px] font-semibold ${textstyling} transition-colors duration-400 ${padding} group-hover:text-purple-600 rounded-md`}
      >
        {children}
      </section>

      <strong
        className={`text-lg sm:text-[24px]  font-medium ${
          isDark ? "text-white" : "text-darkGray"
        } `}
      >
        {content}
      </strong>
    </>
  );
}

export default Subject;
