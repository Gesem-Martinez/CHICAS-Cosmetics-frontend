import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')

            if (!token) {
                setLoading(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            try {
                const { data } = await clienteAxios("/admin/dashboard", config);
                setAuth(data);
            } catch (error) {
                console.log("Error en autenticación:", error.response?.data?.msg);
                setAuth({});
            } finally {
                setLoading(false);
            }
        }
        autenticarUsuario();
    }, [])

    return (
        <AuthContext.Provider
            value = {{
                auth,
                setAuth,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext