import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    
    // Pages where footer should be hidden
    const hideFooterPages = ['/account', '/contact'];
    const shouldHideFooter = hideFooterPages.includes(location.pathname);
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a2a] to-[#200d42] text-white font-sans flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            {!shouldHideFooter && <Footer />}
        </div>
    );
};

export default Layout;
