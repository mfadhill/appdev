import React, { useState, useEffect } from "react";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(window.studentData);
    }, []);

    return (
        <div>
            <h1>Daftar Mahasiswa</h1>
            <table>
                <thead>
                    <tr>
                        <th>Kode Siswa</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.kode_siswa}</td>
                            <td>{student.nama}</td>
                            <td>{student.email}</td>
                            <td>{student.status}</td>
                            <td>
                                <img
                                    src={`/storage/${student.foto}`}
                                    alt={student.nama}
                                    width="50"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
