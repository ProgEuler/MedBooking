export const getBookings = () => {
    const bookings = localStorage.getItem('bookings')
    if (bookings) return JSON.parse(bookings)
    else return []
}

export const addBooking = doctor => {
    const bookings = getBookings()
    const isExist = bookings.find((doc) => doc.id === doctor.id);

    if (isExist) {
        return true; // Booking already exists
    }
    else {
        bookings.push(doctor)
        localStorage.setItem('bookings', JSON.stringify(bookings))
        return false; // Booking successfully added
    }
}

export const cancelAppointment = id => {
    const appointments = getBookings()
    const remainingAppointments = appointments.filter(doc => doc.id !== id)
    localStorage.setItem('bookings', JSON.stringify(remainingAppointments))
}
