import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link to="/" className="font-bold text-[#46AC36] text-xl">
          BudgetBloom
        </Link>
        <button className=" px-4 py-2 border border-[#46AC36] rounded-full">
          <Link to="/summary" className="text-[#46AC36] ">
            Dashboard
          </Link>
        </button>
      </div>
    </>
  );
};
export default NavBar;
