import { Outlet } from 'react-router-dom';
import Navbar from './navbar.jsx';

function MainLayout() {
  return (
    <div className="flex flex-row h-screen w-full">
      <Navbar /> 
      <main className="flex-1 overflow-hidden bg-background">
        <Outlet /> 
      </main>
    </div>
  );
}

export default MainLayout;