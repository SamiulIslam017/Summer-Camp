import { useQuery } from "@tanstack/react-query"
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    })
    const handleInstructor = user => {
        fetch(`${import.meta.env.VITE_DOMAIN}/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} in an instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    const handleAdmin = user => {
        fetch(`${import.meta.env.VITE_DOMAIN}/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} in an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FEBF00',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_DOMAIN}/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })


    }
    return (
        <div className="w-10/12 mx-auto my-20">
            <Helmet>
                <title>Admin Dashboard | Manage Users</title>
            </Helmet>
            <h1 className="text-3xl font-bold">Total Users: {users.length}</h1>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Sl
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td className="flex items-center gap-2">
                                        <button onClick={() => handleInstructor(user)} className="btn btn-sm" disabled={user.role === 'instructor' || user.role === 'admin' ? 'disable' : ''}>Instructor</button>
                                        <button onClick={() => handleAdmin(user)} className="btn btn-sm" disabled={user.role === 'instructor' || user.role === 'admin' ? 'disable' : ''}>Admin</button>
                                        {user.role === 'instructor' && <p>Instructor</p>}
                                        {user.role === 'admin' && <p>Admin</p>}
                                        {user.role === 'student' && <p>Student</p>}
                                    </td>
                                    <td>
                                        <button className="btn" onClick={() => handleDelete(user)}><FaTrashAlt className="text-lg text-orange"></FaTrashAlt></button>
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

export default AllUsers;