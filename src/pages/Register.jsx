import { useState } from "react";
import { Link } from "react-router-dom";


function Resiger() {
    const [formData, setFormData] = useState ({
        email: '',
        password: '', 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
        alert('Simulasi Login Berhasil')
    };

    return (
        <div className="flex item-center justify-center min-h-screen -bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h1 className="text-2x1 font-bold text-center mb-6">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onchange={handleChange}
                    placeholder="Masukan email anda"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="Password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onchange={handleChange}
                    placeholder="Masukan Password Anda"
                    required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    >
                    Masuk
                    </button>
                    <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Belum punya akun? Daftar
                    </Link>
                </div>
            </form>
          </div>
        </div>
    );
}

export default  Resiger