
import { useNavigate } from "react-router-dom";


const Menu = () => {

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-200 text-sm text-left">
                <thead className="bg-gray-400">
                    <tr>
                        <th className="px-4 py-2 border">Makanan</th>
                        <th className="px-4 py-2 border">Minuman</th>
                        <th className="px-4 py-2 border">Combo</th>
                        <th className="px-4 py-2 border">harga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border">Mie ayam</td>
                        <td className="px-4 py-2 border">Es jeruk</td>
                        <th className="px-4 py-2 borded">Kerupuk</th>
                        <th className="px-4 py-2 border">15.000</th>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border">Pecel lele</td>
                        <th className="px-4 py-2 border">Es teh</th>
                        <th className="px-4 py-2 border">Tahu</th>
                        <th className="px-4 py-2 border">20.000</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function Dashboard() {
    const navigate = useNavigate();
    return (
        <div className="p-6 max-w-4xl mx-auto bg-purple-950">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl fony-bold text-center">Daftar Menu</h2>
                <button
                onClick={() => navigate("/Y")}
                className="px-4 py-2 mt-2 bg-green-50 text-white rounded hover:bg-green-600 transition"
                >
                    Tambah Data
                </button>
            </div>
            <Menu />
        </div>
    )
}

export default Dashboard