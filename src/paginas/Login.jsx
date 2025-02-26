import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const navigate = useNavigate()

    const { setAuth } = useAuth(); // Importar desde el contexto

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        if ([username, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }

        try {
            const {data} = await clienteAxios.post('/admin/login', {username, password})
            localStorage.setItem('token', data.token)

            setAuth({
                username: data.username,
                role: "admin"
            });

            navigate('/admin/dashboard')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta
  return (
    <div className="container text-center bg-chicas min-h-screen flex flex-col items-center justify-center gap-4 max-w-full">
        <div>
            <h1 className='text-gray-500 font-black text-6xl font-chicas uppercase'>Login</h1>
        </div>
        <div className='mt-2'>
            {msg && <Alerta 
                alerta={alerta}
            />}
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        placeholder='Ingresar usuario'
                        className='border w-96 p-3 mt-3 bg-gray-50 rounded-xl'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        placeholder='Ingresar password'
                        className='border w-96 p-3 mt-3 bg-gray-50 rounded-xl'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <input 
                    type="submit"
                    value='Iniciar Sesión'
                    className='button-chicas w-6/12 py-3 mt-5 rounded-xl text-white font-bold uppercase hover:cursor-pointer hover:bg-pink-400'
                />
            </form>
        </div>
    </div>
  )
}

export default Login