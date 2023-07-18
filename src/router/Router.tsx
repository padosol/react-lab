import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from '../component/layout/Header';
import Content from '../component/layout/Content';
import Footer from '../component/layout/Footer';

function Router() {
    return  (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Header/> }></Route>  
            <Route path="/content" element= { <Content /> }></Route>
            <Route path="/footer" element={ <Footer/> }></Route>
        </Routes>     
    </BrowserRouter>

    )     
}

export default Router;