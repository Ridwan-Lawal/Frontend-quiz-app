function NextButton({ onClick, content }) {
  return (
    <button
      onClick={onClick}
      className="bg-pink text-lg sm:text-[22px] rounded-lg font-medium w-full py-3 mt-7 text-white"
    >
      {content}
    </button>
  );
}

export default NextButton;
