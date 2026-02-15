import React, { useEffect, useState } from "react";
import { dummyStudentEnrolled } from "../../assets/assets";
import Loading from "../../components/students/Loading";

const StudentsEnrolled = () => {
  const [studentsEnrolled, setStudentsEnrolled] = useState(null);

  const fetchAllStudents = () => {
    setStudentsEnrolled(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);
  return studentsEnrolled ? (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
        <table className="md:table-auto table-fixed w-full overflow-hidden">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">
                #
              </th>
              <th className="px-4 py-3 font-semibold truncate">Student Name</th>
              <th className="px-4 py-3 font-semibold truncate">Course Title</th>
              <th className="px-4 py-3 font-semibold sm:hidden  md:block sm:tabel-cell">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {studentsEnrolled.map((item, index) => (
              <tr className="border-b border-gray-500/20" key={item._id}>
                <td className="px-4 py-3 text-center hidden sm:table-cell">
                  {index + 1}
                </td>
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                  <img
                    src={item.student.imageUrl}
                    alt=""
                    className="w-9 h-9 rounded-full"
                  />
                  <span className="truncate">{item.student.name}</span>
                </td>
                <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                <td className="px-4 py-3">
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentsEnrolled;
