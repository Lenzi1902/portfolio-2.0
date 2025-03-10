import Link from "next/link";
import { navbarLink } from "./config";

const NavbarComponent = () => {
  return (
    <div className=" flex justify-center">
      <ul className=" w-[51rem] h-[4.5rem] fixed text-white font-inter bg-[url('/backgroundNavbar.png')] text-[1rem] flex items-center px-[0.5rem] justify-between bottom-[2rem]">
        {navbarLink.map((data, index) => (
          <li key={index}>
            <Link href={data.url} className="w-[10rem] h-[3.75rem] flex justify-center items-center ">
              {data.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href={"#"} className="w-[13.25rem] h-[3.75rem] bg-white flex rounded-[0.813rem] text-black justify-center items-center">
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarComponent;
