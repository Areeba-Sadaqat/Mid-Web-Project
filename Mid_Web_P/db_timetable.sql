<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_timetable";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// SQL to insert data
$sql = "INSERT INTO cs1_classes (course_name, day, time, location, instructor) VALUES
    ('CS-1 pre calculus-1', 'Tue', '1:00p - 4:00p', 'GGC A-204', 'Sadia Lodhi'),
    ('CS-1 Discrete Structure', 'Tue', '1:00p - 4:00p', 'GGC A-204', 'Sadia Lodhi'),
    ('CS-1 Programming Fundamentals', 'Fri', '3:00p - 4:00p', 'GGC B-203', 'Seemab Karim'),
    ('CS-1 Programming Fundamentals', 'Thu', '11:30a - 1:30p', 'GGC A-004', 'Seemab Karim'),
    ('CS-1 Functional English', 'Mon', '12:30p - 3:30p', 'GGC A-214', 'New Faculty'),
    ('CS-1 Applied Physics (Lab)', 'Wed', '1:00p - 4:00p', 'GGC A-204', 'Mahpara Ghanzanfar'),
    ('CS-1 Introduction to information and communication technologies', 'Wed', '11:00a - 1:00p', 'GGC A-206', 'Anum Bibi'),
    ('CS-1 Programming Fundamentals (Lab)', 'Thu', '8:00a - 11:00a', 'GGC B-209', 'Nayab Khalid'),
    ('CS-1 Programming Fundamentals (Lab)', 'Fri', 'noon - 3:00p', 'GGC A-212', 'Nayab Khalid'),
    ('CS-1 Applied Physics (Lab)', 'Fri', '9:00a - noon', 'GGC A-213', 'Mahpara Ghanzanfar'),
    ('CS-1 Introduction to information and communication technologies (Lab)', 'Mon', '8:00a - 11:00a', 'GGC B-209', 'Nayab Khalid')";



// Close the database connection
$conn->close();
?>
