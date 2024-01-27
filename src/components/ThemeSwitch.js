import Image from "./Image";

function ThemeSwitch() {
  return (
    <form className="flex items-center gap-3">
      <Image icon="icon-sun-dark" />
      <div className=" rounded-full bg-purple-600 purple w-fit flex items-center p-1 gap-4">
        <input type="radio" checked="" name="theme" className="radio" />
        <input type="radio" checked="" name="theme" className="radio" />
      </div>
      <Image icon="icon-moon-dark" />
    </form>
  );
}

export default ThemeSwitch;
