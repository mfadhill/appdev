// src/components/StudentList.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, deleteStudent } from "../actions/studentActions";

const StudentList = () => {
    const [showModal, setShowModal] = useState(false);
    const [newStudent, setNewStudent] = useState({
        kode_siswa: "",
        nama: "",
        email: "",
        status: "Aktif",
        foto: "",
    });

    const { students } = useSelector((state) => state.students);
    const dispatch = useDispatch();

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(newStudent));
        setNewStudent({
            kode_siswa: "",
            nama: "",
            email: "",
            status: "Aktif",
            foto: "",
        });
        handleCloseModal();
    };

    const handleDelete = (id) => {
        dispatch(deleteStudent(id));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6 flex justify-end">
                <button
                    onClick={handleShowModal}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Add Data
                </button>
            </div>

            {/* Modal */}
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
                                    Foto URL
                                </label>
                                <input
                                    type="text"
                                    name="foto"
                                    value={newStudent.foto}
                                    onChange={handleChange}
                                    className="border rounded w-full py-2 px-3 text-gray-700"
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

            {/* Tabel Mahasiswa */}
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
                        {!students
                            ? null
                            : students.map((student) => (
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
                                          {student.foto ? (
                                              <img
                                                  src={student.foto}
                                                  alt={student.nama}
                                                  className="w-12 h-12 rounded-full"
                                              />
                                          ) : (
                                              <span className="text-gray-400 italic">
                                                  No Image
                                              </span>
                                          )}
                                      </td>
                                      <td className="py-3 px-6 text-left">
                                          <button
                                              onClick={() =>
                                                  handleDelete(student.id)
                                              }
                                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg"
                                          >
                                              Delete
                                          </button>
                                      </td>
                                  </tr>
                              ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;
