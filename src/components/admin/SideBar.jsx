// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h3>Panel de Administración</h3>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-tachometer-alt"></i> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/services" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-tools"></i> Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/quotes" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-file-invoice-dollar"></i> Cotizaciones
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/reviews" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-comments"></i> Reseñas
                    </NavLink>
                </li>
                {/* Nueva entrada para las gráficas */}
                <li>
                    <NavLink to="/admin/graphs" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-chart-line"></i> Gráficas
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
