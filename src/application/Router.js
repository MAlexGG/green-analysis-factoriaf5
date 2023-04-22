import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';

function Router() {
  return (
    <BrowserRouter basename="/green-analysis-factoriaf5/">
        <Routes>
            <Route path='/' element={<App/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router