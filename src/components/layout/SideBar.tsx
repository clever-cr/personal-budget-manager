import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      <div className="bg-[#F8F8FA] h-screen ">
        <h1 className="font-bold text-[#46AC36] text-xl border-b py-4 px-5">
          BudgetBloom
        </h1>
        <div className='px-5 py-5 flex flex-col gap-3'>
          <h3 >General</h3>
          <div>
            <div>
              <Link to="overview">Overview</Link>
            </div>
            <div>
              <Link to="addExpense">Expenses</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
