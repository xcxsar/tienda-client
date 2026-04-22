import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const getButtonClass = (path) => 
        `grow-0 w-full h-8 rounded-md flex items-center justify-center transition-colors hover:bg-[#333] ${
            isActive(path) ? 'bg-[#000]' : ''
        }`;

    const getIconClass = (iconName) => `fa-solid ${iconName} text-[#00BE64]`;

    return (
        <div id='navbar' className='bg-white flex flex-col grow-0 shrink-0 w-12 h-screen p-2 gap-6 sticky left-0 top-0'>
            
            <img src="./src/assets/logo.png" alt="logo" className='rounded-full mb-6'/>

            <Link title="Ventas" to="/sales">
                <button className={getButtonClass('/sales')}>
                    <i className={getIconClass('fa-house', '/sales')}></i>
                </button>
            </Link>

            <Link title="Historial" to="/history">
                <button className={getButtonClass('/history')}>
                    <i className={getIconClass('fa-clock', '/history')}></i>
                </button>
            </Link>

            <Link title="Estadísticas" to="/stats">
                <button className={getButtonClass('/stats')}>
                    <i className={getIconClass('fa-chart-simple', '/stats')}></i>
                </button>
            </Link>
        </div>
    );
}

export default Navbar;