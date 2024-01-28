function Error({ error }) {
  return (
    <div className="flex mt-20 justify-center items-center">
      <p className="text-blue-950 italic text-2xl text-center">{error}</p>
    </div>
  );
}

export default Error;
