import { FaTrashAlt } from "react-icons/fa";
import useBooking from "../../../hooks/useBooking";
import Swal from "sweetalert2";


const MySelectedClasses = () => {
    const [booking, refetch] = useBooking();
    const handleDelete = book => {
        console.log(book);
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

                fetch(`${import.meta.env.VITE_DOMAIN}/booking/${book._id}`, {
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
            <h1 className="text-3xl font-bold">Total Users: {booking.length}</h1>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Sl
                            </th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((book, index) => {
                                return <tr key={book._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={book.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{book.course_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {book.instructor_name}
                                    </td>
                                    <td>
                                        $ {book.price}
                                    </td>
                                    <td className="flex items-center gap-2">
                                        <button className="btn btn-sm">pay now</button>

                                    </td>
                                    <td>
                                        <button className="btn" onClick={() => handleDelete(book)}><FaTrashAlt className="text-lg text-orange"></FaTrashAlt></button>
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

export default MySelectedClasses;