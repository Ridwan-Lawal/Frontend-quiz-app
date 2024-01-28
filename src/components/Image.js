function Image({ icon = "icon-html", width }) {
  return (
    <img
      src={process.env.PUBLIC_URL + `/${icon}.svg`}
      alt="Light Mode"
      className={`${width}`}
    />
  );
}

export default Image;
