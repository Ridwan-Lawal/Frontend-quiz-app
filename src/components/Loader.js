import { Grid } from "react-loader-spinner";

function Loader({ isDark }) {
  return (
    <div className="flex justify-center items-center mt-40">
      <Grid
        visible={true}
        height="40"
        width="40"
        color={isDark ? "#F4F6FA" : "#313E51"}
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}

export default Loader;
