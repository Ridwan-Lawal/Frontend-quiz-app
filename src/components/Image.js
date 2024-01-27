function Image({ icon = "icon-html" }) {
  return <img src={process.env.PUBLIC_URL + `/${icon}.svg`} alt="Light Mode" />;
}

export default Image;
