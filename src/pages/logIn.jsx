import Button from "../components/atomic/button"
import Input from "../components/atomic/input"

function Login() {
    return (
        <div className='h-dvh bg-[#1e1e1e] flex flex-col items-center justify-center text-white'>
            <h1 className='text-4xl font-bold mb-8'>Bienvenido</h1>
            <div className="flex flex-col w-fit border-2 border-white p-8 rounded-md">
                <Input type="text" placeholder='Usuario' />
                <Input type="password" placeholder='Contraseña' />
                <Button text='Iniciar Sesión' />
            </div>
        </div>
    )
}

export default Login