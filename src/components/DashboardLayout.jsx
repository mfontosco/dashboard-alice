import { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open,setOpen] =useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <div className="hidden  md:block md:fixed md:left-0 top-0 bottom-0 md:w-1/5 bg-gray-800 text-black overflow-y-auto">
        <SideBar />
      </div>
      <div className='md:hidden fixed w-full'>
        <NavBar />
      </div>
      <main className="md:ml-64 flex min-h-auto mt-8 md:mt-0 justify-center w-full p-4 bg-gray-100 flex-1 ">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
