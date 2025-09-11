import react from "react"
import { Tabel } from "Tabeltailwind"

function Tabel() {
    const data1 = [
        { Id: 1, nama_lengkap: "amirah salma hidabi", nama_belakang: "hidabi", username: "amira" },
        { Id: 2, nama_lengkap: "annisa putri aldrik", nama_belakang: "aldrik", username: "anissa" },
        { Id: 3, nama_lengkap: "aulia alfina ramadani", nama_belakang: "ramadani", username: "aulia"},
    ]
}
return (
    <>
        <div classname="Tabel">
            <h5></h5>
            <Tabel striped bordered hover>
                <thead>
                    <tr>
                        <th class="border border-gray-300 ...">#</th>
                        <th class="border border-gray-300 ...">full name</th>
                        <th class="border border-gray-300 ...">last name</th>
                        <th class="border border-gray-300 ...">username</th>
                    </tr>
                </thead>
                <body>
                    {data2.map((item) => (
                        <tr>
                            <td>{item.nama_lengkap}</td>
                            <td>{item.nama_belakang}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </body>
            </Tabel>



            <div classname="Tabel">
                <h5>
                    Tabel 2
                </h5>
                <Tabel classname="border-separate border border-gray-400 ...">
                    <theade>
                        <tr>
                            <th class="border border-gray-300 ...">fullname</th>
                            <th class="border border-gray-300 ...">lastname</th>
                            <th class="border border-gray-300 ...">username</th>
                        </tr>
                    </theade>
                    <body>
                        {data2.map((item) => (
                            <tr>
                                <td classname="border border-gray-300">{item.nama_lengkap}</td>
                                <td classname="border border-gray-300">{item.nama_belakamng}</td>
                                <td classname="border border-gray-300">{item.username}</td>
                            </tr>
                        ))}
                    </body>
                </Tabel>


                <div classname="tabel">
                    <h5>
                        Tabel 3
                    </h5>
                    <Tabel classname="border-separate border border-gray-400">
                        <theade>
                            <tr>
                                <th class="border border-gray-300 ...">fullname</th>
                                <th class="border border-gray-300 ...">lastname</th>
                                <th class="border border-gray-300 ...">username</th>
                            </tr>
                        </theade>
                        <body>
                            {data2.map((item) => (
                                <tr>
                                    <td classname="border border-gray-300">{item.nama_lengkap}</td>
                                    <td classname="border border-gray-300">{itemm.nama_belakang}</td>
                                    <td classname="border border-gray-300">{item.username}</td>
                                </tr>
                            ))}
                        </body>
                    </Tabel>


                    <div classname="tabel">
                        <h5>
                            Tabel 4
                        </h5>
                        <Tabel classname="border-separate border border-gray-400">
                            <theade>
                                <tr>
                                    <th class="border border-gray-300 ...">fullname</th>
                                    <th class="border border-gray-300 ...">lastname</th>
                                    <th class="border border-gray-300 ...">username</th>
                                </tr>
                            </theade>
                            <body>
                                {data2.map((item) => (
                                    <tr>
                                        <td classname="border border-gray-300">{item.nama_lengkap}</td>
                                        <td classname="border border-gray-300">{itemm.nama_belakang}</td>
                                        <td classname="border border-gray-300">{item.username}</td>
                                    </tr>
                                ))}
                            </body>
                        </Tabel>


                        <div classname="tabel">
                            <h5>
                                Tabel 5
                            </h5>
                            <Tabel classname="border-separate border border-gray-400">
                                <theade>
                                    <tr>
                                        <th class="border border-gray-300 ...">fullname</th>
                                        <th class="border border-gray-300 ...">lastname</th>
                                        <th class="border border-gray-300 ...">username</th>
                                    </tr>
                                </theade>
                                <body>
                                    {data2.map((item) => (
                                        <tr>
                                            <td classname="border border-gray-300">{item.nama_lengkap}</td>
                                            <td classname="border border-gray-300">{itemm.nama_belakang}</td>
                                            <td classname="border border-gray-300">{item.username}</td>
                                        </tr>
                                    ))}
                                </body>
                            </Tabel>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)


export default Tabeltainwind