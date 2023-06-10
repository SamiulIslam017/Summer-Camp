import { Link } from "react-router-dom";
import useCourses from "../../../hooks/useCourses";
import { FaEdit } from "react-icons/fa";


const MyCourses = () => {
    const [courses] = useCourses();
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
                            <th>Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
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
                                        {course.total_students}
                                    </td>
                                    <td className="flex items-center gap-2">
                                        <button className={`btn btn-sm ${course.status === 'approved' && 'bg-[green] text-neutral-100'} ${course.status === 'denied text-neutral-100' && 'bg-[red]'} ${course.status === 'pending' && 'bg-[yellow]'} text-[black] font-medium`} aria-readonly>{course.status}</button>
                                    </td>

                                    <td>
                                        {
                                            course.status === 'denied' ? <p>{course.feedback}</p> : 'Null'
                                        }
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateCourse/${course._id}`}><button className="btn bg-blue
                                        btn-sm text-neutral-100"><FaEdit></FaEdit></button></Link>
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

export default MyCourses;