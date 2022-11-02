import { Routes, Route, Outlet } from 'react-router-dom';
import MobileNav from './MobileNav';
import Scroll from '../pages/Scroll';



function Main() {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path='/' element={<Scroll />} />
                <Route path='/menu' element={<MobileNav />} />
            </Routes>
        </>
    )
}

export default Main;