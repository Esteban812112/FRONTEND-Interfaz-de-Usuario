import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';

import HomePage from '../pages/HomePage'; // Landing pages
import QuotePage from '../pages/QuotePage';
import ReviewPage from '../pages/ReviewPage';
import LoginPage from '../pages/LoginPage';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import RegisterPage from '../pages/RegisterPage';
import GraphPage from '../pages/Graphs'; // Asegúrate de tener el componente GraphPage

const AppRouter = () => {
    return (
        <Router>
            <Header />            
            <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/reviews" element={<ReviewPage />} />
                <Route path="/quotes" element={<QuotePage />} />
                
                {/* Nueva ruta para los gráficos */}
                <Route path="/graphs" element={<GraphPage />} />

                {/* Rutas protegidas para admin */}
                <Route path="/*" element={<AdminRoutes />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;
