import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";

import Button from "../components/atomic/button.jsx"
import Input from "../components/atomic/input.jsx"
import { Navigate } from "react-router-dom";

function Login() {
    const { login, isLoggingIn } = useAuth();
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        login({ email, password }, {
                onSuccess: () =>  navigate('/sales'),
                onError: (error) => {
                    const message = error.response?.data?.message || error.message;
                    alert('Error al iniciar sesión: ' + message);
            },
        });
    }

    return (
        <div className='h-dvh bg-[#1e1e1e] flex flex-col items-center justify-center text-white'>

            <h1 className='text-4xl font-bold mb-8'>Bienvenido</h1>

            <form 
                onSubmit={handleFormSubmit} 
                className="flex flex-col w-fit border-2 border-white p-8 rounded-md gap-4"
            >
                <Input name="email" type="text" placeholder='Usuario' required />
                <Input name="password" type="password" placeholder='Contraseña' required />
                
                <Button 
                    type="submit" 
                    text={isLoggingIn ? 'Cargando...' : 'Iniciar Sesión'} 
                    disabled={isLoggingIn} 
                />
            </form>

        </div>
    )
}

export default Login