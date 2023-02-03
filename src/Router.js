import { BrowserRouter as RouterContainer, Routes, Route, Link } from "react-router-dom";

import React from 'react'
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import NavBar from "./Components/NavBar";

export default function Router() {
    return (
        <RouterContainer>
            <NavBar/>

            <Routes>

                <Route path='page1' element={<Page1 />} />
                <Route path='/page2' element={<Page2 />} />
                <Route path='/page3' element={<Page3 />} />
            </Routes>


        </RouterContainer>
    )
}
