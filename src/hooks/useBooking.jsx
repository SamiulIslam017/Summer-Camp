import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const useBooking = () => {
    const { user } = useContext(AuthContext);
    const { data: booking = [], refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_DOMAIN}/booking?email=${user?.email}`)
            return response.json();
        },
    })
    return [booking, refetch]

};

export default useBooking;