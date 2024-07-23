import React from "react";
import NavBar from "../components/Navbar";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-center text-6xl  mt-10  ">Wedding Portraits</h1>
      <span className=" flex justify-center font-extrabold mt-4">
        __________
      </span>
      <ul className="flex flex-col space-y-4 font-bold text-4xl items-center mt-10">
        <li className="border-4 rounded-2xl px-14 py-2 mb-4">
          <Link href={"/photography"}>Photography</Link>
        </li>
        <li className="border-4  rounded-2xl px-6 py-2 ">
          <Link href={"/cinematography"}>Cinematography</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
