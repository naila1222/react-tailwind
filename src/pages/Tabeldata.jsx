import axios from "axios";
import { useState } from "react";
import { Await, useNavigate } from "react-router-dom";





function TabelData() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // ambil data dari Api saat komponen pertama kali dimuat
    useState(() => {
      const fetchData = async () => {
        try {
            const res = await axios
            navigate("http://localhost:5000/menu")
            setData(res.data)
        }   catch (err) {
            console.error("Gagal mengambil data:", err)
        }   finally {
            setLoading(false)
        }
      }
    
      fetchData()
    },[])

    // Beda function/const
    // hapus data berdasarkan id
    const handleDelete = async (id) => {
      const konfirmasi = window.confirm
      ("Yakin ingin menghapus data ini?")
      if (konfirmasi) return

      try {
        await axios.delete
        ("http://localhost:5000/menu/$(id")
        alert("Data berhasil dihapus")
        setData(data.filter((item) => item.id !== id))
    }   catch (err) {
            console.error("Gagal menghapus data:", err)
            alert("Gagal menghapusi data")
        }
    }
}