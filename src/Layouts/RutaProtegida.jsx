import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Header from "../components/Header";
import Footer from "../components/Footer";

const RutaProtegida = () => {
    const { auth, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    return (
        <div className="bg-chicas max-w-full h-screen flex flex-col">
            <Header />
                <div className="flex-grow">
                    {auth.username ? <Outlet /> : <Navigate to="/admin" />}
                </div>
            <Footer />
        </div>
    )
};

export default RutaProtegida;