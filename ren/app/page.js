'use client';

import React from 'react';

const students = [
  { no: 1, nim: "220101", nama: "Reni", gender: "Perempuan", prodi: "Teknik Informatika", kelas: "TI-1A", semester: 4, alamat: "Jakarta", hobby: "Bermain Musik", cita_cita: "Software Engineer" },
  { no: 2, nim: "220102", nama: "Siti Aisyah", gender: "Perempuan", prodi: "Sistem Informasi", kelas: "SI-1B", semester: 2, alamat: "Bandung", hobby: "Membaca", cita_cita: "Data Analyst" },
  { no: 3, nim: "220103", nama: "Joko Widodo", gender: "Laki-laki", prodi: "Manajemen", kelas: "M-1C", semester: 6, alamat: "Surabaya", hobby: "Olahraga", cita_cita: "Pengusaha" },
  { no: 4, nim: "220104", nama: "Rina Kartika", gender: "Perempuan", prodi: "Akuntansi", kelas: "AK-2A", semester: 3, alamat: "Yogyakarta", hobby: "Menulis", cita_cita: "Akuntan" },
  { no: 5, nim: "220105", nama: "Andi Pratama", gender: "Laki-laki", prodi: "Teknik Mesin", kelas: "TM-1B", semester: 5, alamat: "Medan", hobby: "Mekanika", cita_cita: "Teknisi" },
];

export default function StudentTable() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen mx-auto flex flex-col items-center">
      <h1 className="text-lg font-bold mb-4 text-center">Data Mahasiswa</h1>
      {/* Tampilan untuk Desktop */}
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="min-w-full border-collapse text-xs bg-white shadow-lg rounded-lg">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="border border-gray-300 px-2 py-2">No</th>
              <th className="border border-gray-300 px-2 py-2">NIM</th>
              <th className="border border-gray-300 px-2 py-2">Nama</th>
              <th className="border border-gray-300 px-2 py-2">Gender</th>
              <th className="border border-gray-300 px-2 py-2">Prodi</th>
              <th className="border border-gray-300 px-2 py-2">Kelas</th>
              <th className="border border-gray-300 px-2 py-2">Semester</th>
              <th className="border border-gray-300 px-2 py-2">Alamat</th>
              <th className="border border-gray-300 px-2 py-2">Hobby</th>
              <th className="border border-gray-300 px-2 py-2">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="bg-white hover:bg-teal-100">
                <td className="border border-gray-300 px-2 py-2 text-center">{student.no}</td>
                <td className="border border-gray-300 px-2 py-2 text-center">{student.nim}</td>
                <td className="border border-gray-300 px-2 py-2">{student.nama}</td>
                <td className="border border-gray-300 px-2 py-2">{student.gender}</td>
                <td className="border border-gray-300 px-2 py-2">{student.prodi}</td>
                <td className="border border-gray-300 px-2 py-2 text-center">{student.kelas}</td>
                <td className="border border-gray-300 px-2 py-2 text-center">{student.semester}</td>
                <td className="border border-gray-300 px-2 py-2">{student.alamat}</td>
                <td className="border border-gray-300 px-2 py-2">{student.hobby}</td>
                <td className="border border-gray-300 px-2 py-2">{student.cita_cita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Tampilan untuk Mobile */}
      <div className="md:hidden w-full space-y-4">
        {students.map((student, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-2 text-sm">
            <p><strong>No:</strong> {student.no}</p>
            <p><strong>NIM:</strong> {student.nim}</p>
            <p><strong>Nama:</strong> {student.nama}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Prodi:</strong> {student.prodi}</p>
            <p><strong>Kelas:</strong> {student.kelas}</p>
            <p><strong>Semester:</strong> {student.semester}</p>
            <p><strong>Alamat:</strong> {student.alamat}</p>
            <p><strong>Hobby:</strong> {student.hobby}</p>
            <p><strong>Cita-cita:</strong> {student.cita_cita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
