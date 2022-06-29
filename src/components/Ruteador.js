import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import DetalleAgente from "../pages/DetalleAgente";
import ListadoAgentes from "../pages/ListadoAgentes";

const Ruteador = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListadoAgentes />} />
                <Route path="/detalle/:id" element={<DetalleAgente/>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default Ruteador