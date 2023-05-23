import Navlink from "@/components/Nav-link";
const Header = () => {
  return (
    <div>
      <Navlink href="/movie">Dashboard</Navlink>
      <Navlink href="/ram">next</Navlink>
      <ul className=" flex flex-row gap-3 items-center justify-between ">
        <li className="p-2 bg-red-300 ">1</li>
        <li className=" bg-cyan-200 p-2 ">2</li>
        <li className=" p-2 bg-violet-500 ">3</li>
        <li className=" p-2 bg-cyan-300 ">4</li>
      </ul>
    </div>
  );
};

export default Header;
