// Redirect to Staff Login Page from the main login page
function redirectToStaff() {
    window.location.href = 'staff-login.html'; // Ensure the URL is correct
}

// Redirect to Student Login Page from the main login page
function redirectToStudent() {
    window.location.href = 'student-login.html'; // Ensure the URL is correct
}

// Handle Staff Login and Redirect to Staff Dashboard
function redirectToStaffDashboard(event) {
    event.preventDefault(); // Prevent form submission

    // Hardcoded credentials for staff
    const validStaffId = "44956";
    const validStaffPassword = "munaza";

    // Get values from staff login form
    const staffId = document.getElementById('staff-id').value;
    const staffPassword = document.getElementById('staff-password').value;

    // Validate credentials and redirect
    if (staffId === validStaffId && staffPassword === validStaffPassword) {
        window.location.href = "staff_db.html"; // Redirect to staff dashboard
    } else {
        alert("Invalid staff login credentials. Please try again.");
    }
}

// Handle Student Login and Redirect to Student Dashboard
function redirectToStudentDashboard(event) {
    event.preventDefault(); // Prevent form submission

    // Hardcoded credentials for student
    const validStudentId = "47633";
    const validStudentPassword = "areeba";

    // Get values from student login form
    const studentId = document.getElementById('student-id').value;
    const studentPassword = document.getElementById('student-password').value;

    // Validate credentials and redirect
    if (studentId === validStudentId && studentPassword === validStudentPassword) {
        window.location.href = "student_db.html"; // Redirect to student dashboard
    } else {
        alert("Invalid student login credentials. Please try again.");
    }
}

//timetable
function filterTimetable() {
    const selectedCourse = document.getElementById('courseSelect').value;
    const rows = document.querySelectorAll('#timetable tbody tr');

    rows.forEach(row => {
        const course = row.getAttribute('data-course');
        if (selectedCourse === 'all' || course === selectedCourse) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

function downloadTimetable() {
    const rows = document.querySelectorAll('#timetable tbody tr');
    let csvContent = "data:text/csv;charset=utf-8,";

    // Add headers if needed
    csvContent += "Course, Day, Time\n"; // Replace with your actual column headers

    // Loop through the rows and create CSV data
    rows.forEach(row => {
        if (!row.classList.contains('hidden')) { // Only include visible rows
            const cells = row.querySelectorAll('td');
            const rowData = Array.from(cells).map(cell => cell.textContent).join(",");
            csvContent += rowData + "\n";
        }
    });

    // Create a link to download the CSV file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "timetable.csv"); // Filename for download
    document.body.appendChild(link); // Required for Firefox

    link.click(); // This will trigger the download
    document.body.removeChild(link); // Cleanup
}




// Handle add timetable form submission
document.getElementById('timetableForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Fetch input values
    const title = document.getElementById('title').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const instructor = document.getElementById('instructor').value;

    // Display added timetable
    const timetableDisplay = document.getElementById('timetableDisplay');
    timetableDisplay.innerHTML = `
        <h4>New Timetable Added:</h4>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Day:</strong> ${day}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Instructor:</strong> ${instructor}</p>
    `;

    // Clear form after submission
    document.getElementById('timetableForm').reset();
});





