import DashboardNavBar from './DashboardNavBar';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <div>
        <div className="flex item-center-">
          <SideBar />
          <div className="bg-[#FFFFFF]  flex flex-col ">
            <DashboardNavBar />
            <div className="px-10 py-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
