import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const AllCourses = () => {
    // const [courses] = useCourses();
    const [axiosSecure] = useAxiosSecure();
    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await axiosSecure.get('/courses/admin');
        return res.data;
    })
    const handleApproved = (course) => {
        fetch(`${import.meta.env.VITE_DOMAIN}/courses/${course._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Course ${course.status} successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    console.log(courses);
    return (
        <div className="w-10/12 mx-auto my-20">
            <h1 className="text-3xl font-bold">Total Courses: {courses.length}</h1>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Sl
                            </th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Total seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) => {
                                return <tr key={course._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{course.course_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {course.instructor_name}
                                    </td>
                                    <td>{course.email}</td>
                                    <td>{course.total_seats}</td>
                                    <td>{course.price}</td>
                                    <td className="flex items-center gap-2">
                                        <button className={`btn btn-sm ${course.status === 'approved' && 'bg-[green] text-neutral-100'} ${course.status === 'denied' && 'bg-[red] text-neutral-100'} ${course.status === "pending" && 'bg-[yellow]'} text-[black] font-medium`} aria-readonly>{course.status}</button>
                                    </td>

                                    <td >
                                        <button onClick={() => handleApproved(course)} className="btn btn-sm mr-2" disabled={course.status === 'approved' || course.status === 'denied' ? 'disable' : ''}>Approved</button>
                                        {/* <button  className="btn btn-sm" disabled={course.status === 'approved' || course.status === 'denied' ? 'disable' : ''}>Denied</button> */}
                                        <Link to={`/dashboard/modal/${course._id}`}>
                                            <button className="btn btn-sm" disabled={course.status === 'approved' || course.status === 'denied' ? 'disable' : ''}>Denied</button>
                                        </Link>
                                    </td>
                                </tr>
                            })
                        }
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCourses;