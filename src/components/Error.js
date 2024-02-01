function Error({ error, isDark }) {
  return (
    <div className="flex mt-20 justify-center items-center">
      <p
        className={` italic text-2xl text-center ${
          isDark ? "text-white" : "text-blue-950"
        } `}
      >
        {error}
      </p>
    </div>
  );
}

export default Error;
