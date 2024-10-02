import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addStudent,
    deleteStudent,
    fetchStudents,
} from "../actions/studentActions";

const StudentList = () => {
    const [showModal, setShowModal] = useState(false);
    const [newStudent, setNewStudent] = useState({
        kode_siswa: "",
        nama: "",
        email: "",
        status: "Aktif",
        foto: null,
    });
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { students } = useSelector((state) => state.students);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setMessage("");
    };

    const handleChange = (e) => {
        const { name, type, files } = e.target;
        if (type === "file") {
            setNewStudent({
                ...newStudent,
                [name]: files[0],
            });
        } else {
            setNewStudent({
                ...newStudent,
                [name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const studentData = {
                kode_siswa: newStudent.kode_siswa,
                nama: newStudent.nama,
                email: newStudent.email,
                status: newStudent.status,
            };

            dispatch(addStudent(studentData));
            setNewStudent({
                kode_siswa: "",
                nama: "",
                email: "",
                status: "Aktif",
                foto: null,
            });
            handleCloseModal();
            setMessage("Data siswa berhasil ditambahkan!");
        } catch (error) {
            setMessage("Terjadi kesalahan saat menambahkan data siswa!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {message && (
                <div className="mb-4 text-center text-green-500">{message}</div>
            )}
            {isLoading && (
                <div className="mb-4 text-center text-blue-500">
                    Sedang mengirim data...
                </div>
            )}
            <div className="mb-6 flex justify-end">
                <button
                    onClick={handleShowModal}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Add Data
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-1/3 rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Add Student Data
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="kode_siswa"
                                >
                                    Kode Siswa
                                </label>
                                <input
                                    type="text"
                                    name="kode_siswa"
                                    value={newStudent.kode_siswa}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="nama"
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    value={newStudent.nama}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={newStudent.email}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="status"
                                >
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={newStudent.status}
                                    onChange={handleChange}
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                >
                                    <option value="Aktif">Aktif</option>
                                    <option value="Tidak Aktif">
                                        Tidak Aktif
                                    </option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="foto"
                                >
                                    Foto
                                </label>
                                <input
                                    type="file"
                                    name="foto"
                                    onChange={handleChange}
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                    accept="image/*"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Student Table */}
            <div className="overflow-x-auto mt-8">
                <table className="table-auto w-full border border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Kode Siswa</th>
                            <th className="py-3 px-6 text-left">Nama</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-left">Status</th>
                            <th className="py-3 px-6 text-left">Foto</th>
                            <th className="py-3 px-6 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {!students.length ? (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No Data Available
                                </td>
                            </tr>
                        ) : (
                            students.map((student) => (
                                <tr
                                    key={student.id}
                                    className="border-b border-gray-200 hover:bg-gray-100"
                                >
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        {student.kode_siswa}
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        {student.nama}
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        {student.email}
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <span
                                            className={`py-1 px-3 rounded-full text-xs ${
                                                student.status === "Aktif"
                                                    ? "bg-green-200 text-green-600"
                                                    : "bg-red-200 text-red-600"
                                            }`}
                                        >
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        {student.foto && (
                                            <img
                                                src={student.foto}
                                                alt={student.nama}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                        )}
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;
