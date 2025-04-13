document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;
    const travelers = document.getElementById('travelers').value;
    const seats= document.getElementById('seats').value;
    const comments = document.getElementById('comments').value;

    const confirmationMessage = `
        Thank you, ${name}! Your trip to ${destination} has been booked.
        Departure: ${departure}
        Return: ${returnDate || 'Not specified'}
        Travelers: ${travelers}
        You will receive a confirmation email at ${email}.
    `;

    document.getElementById('confirmationMessage').textContent = confirmationMessage;
    document.getElementById('confirmationMessage').style.display = 'block';
});
