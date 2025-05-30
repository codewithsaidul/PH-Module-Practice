-- Active: 1747486928827@@127.0.0.1@5432@ph

DROP TABLE students;

-- create a new table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    roll INT UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    age INT,
    department CHAR(3) NOT NULL,
    score INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    last_login DATE NOT NULL,
    student_email VARCHAR(100),
    dob DATE NOT NULL,
    country VARCHAR(50) NOT NULL
);

SELECT * FROM students;

-- ====================== add a new column
ALTER TABLE students ADD COLUMN email VARCHAR(100);

-- ================ reneme email to student_email
ALTER TABLE students RENAME COLUMN email to student_email;

-- ================== make unique student_email
ALTER TABLE students
ADD constraint unique_student_email UNIQUE (student_email);

-- ================= create a new table
CREATE TABLE course ( id SERIAL, courseName VARCHAR(50) )

-- =============== add primary key
ALTER TABLE course ADD constraint pk_course_id PRIMARY KEY (id);

-- =============== deleting a column from existing table
ALTER TABLE course DROP COLUMN courseName

-- ========================= Inserting 50 Students data
INSERT INTO students (roll, name, age, department, score, status, last_login, student_email, dob, country) VALUES
(1001, 'Thomas Bryant', 24, 'CSE', 41, 'active', '2025-05-13', 'nbrown@example.com', '2001-09-30', 'Germany'),
(1002, 'Kimberly Sullivan', 19, 'EEE', 66, 'active', '2025-04-28', 'adam32@example.net', '2006-05-13', 'New Zealand'),
(1003, 'Travis Dawson', 25, 'ECE', 90, 'active', '2025-04-27', 'gibsondaniel@example.com', '2000-04-15', 'UK'),
(1004, 'Jamie Romero', 24, 'EEE', 88, 'inactive', '2025-05-07', 'stoutscott@example.com', '2001-05-15', 'India'),
(1005, 'Michele Blake', 25, 'BBA', 38, 'suspended', '2025-05-11', 'bcarroll@example.com', '2000-03-20', 'South Korea'),
(1006, 'Catherine Whitehead', 20, 'ECE', 94, 'active', '2025-05-13', 'joconnor@example.org', '2005-01-21', 'Germany'),
(1007, 'James Anderson', 25, 'CSE', 86, 'suspended', '2025-05-09', 'johnsonlogan@example.com', '2000-01-25', 'Germany'),
(1008, 'Stacy Robinson', 21, 'BBA', 67, 'suspended', '2025-05-01', 'susan28@example.org', '2004-03-08', 'USA'),
(1009, 'Tammy Williams', 24, 'CSE', 98, 'inactive', '2025-05-08', 'ojohnson@example.com', '2001-01-07', 'New Zealand'),
(1010, 'John Compton', 20, 'EEE', 47, 'active', '2025-04-20', 'ashleycarr@example.com', '2005-01-14', 'UK'),
(1011, 'Ryan Bennett', 24, 'BBA', 72, 'inactive', '2025-05-14', 'thomasdawn@example.com', '2001-02-22', 'UK'),
(1012, 'Terry Boone', 21, 'CSE', 89, 'suspended', '2025-05-03', 'pmills@example.com', '2004-05-09', 'UK'),
(1013, 'Tanya Bryant', 24, 'EEE', 33, 'suspended', '2025-04-26', 'brownbrenda@example.org', '2001-01-24', 'Australia'),
(1014, 'Angela Jefferson', 20, 'CSE', 84, 'suspended', '2025-04-24', 'alexanderlisa@example.net', '2005-03-03', 'Germany'),
(1015, 'Laura Ruiz', 22, 'CSE', 91, 'active', '2025-05-16', 'michael80@example.org', '2003-01-04', 'India'),
(1016, 'Nicholas Thomas', 22, 'CSE', 76, 'suspended', '2025-05-14', 'lopezmichael@example.org', '2003-05-14', 'India'),
(1017, 'Ashley Johnson', 24, 'ECE', 93, 'inactive', '2025-05-10', 'phillipsgina@example.net', '2001-01-15', 'South Korea'),
(1018, 'Michele Hicks', 21, 'CSE', 71, 'suspended', '2025-04-26', 'kathleen65@example.net', '2004-04-22', 'USA'),
(1019, 'Stephanie Huffman', 20, 'EEE', 69, 'active', '2025-05-05', 'dawsonlisa@example.net', '2005-03-17', 'UK'),
(1020, 'Mark Kim', 21, 'ECE', 37, 'inactive', '2025-04-27', 'uhoffman@example.org', '2004-02-01', 'South Korea'),
(1021, 'Christopher Gill', 23, 'CSE', 86, 'inactive', '2025-05-12', 'alicia40@example.net', '2002-04-15', 'Germany'),
(1022, 'Jacob Bowen', 19, 'ECE', 65, 'inactive', '2025-04-23', 'rickyperez@example.org', '2006-04-08', 'Germany'),
(1023, 'Edward Dominguez', 19, 'ECE', 48, 'active', '2025-04-26', 'michelle28@example.com', '2006-01-15', 'New Zealand'),
(1024, 'Jeremy Pittman', 25, 'BBA', 72, 'active', '2025-05-11', 'aaron13@example.org', '2000-05-17', 'Australia'),
(1025, 'Thomas King', 21, 'EEE', 100, 'active', '2025-05-11', 'cramirez@example.net', '2004-05-08', 'India'),
(1026, 'Daniel Newton', 21, 'EEE', 98, 'suspended', '2025-04-22', 'kevin28@example.com', '2004-03-09', 'India'),
(1027, 'Melissa Gibbs', 23, 'ECE', 90, 'inactive', '2025-05-14', 'rhodesstephanie@example.org', '2002-04-18', 'USA'),
(1028, 'Stacy Schmidt', 24, 'ECE', 49, 'suspended', '2025-05-03', 'frank89@example.net', '2001-05-10', 'Australia'),
(1029, 'Lisa Curtis', 20, 'EEE', 92, 'active', '2025-05-15', 'richard43@example.com', '2005-01-04', 'India'),
(1030, 'Timothy Hammond', 19, 'ECE', 45, 'inactive', '2025-04-24', 'thall@example.com', '2006-04-09', 'Germany'),
(1031, 'Karen Johnston', 21, 'CSE', 78, 'inactive', '2025-05-01', 'stevenmaldonado@example.com', '2004-05-15', 'UK'),
(1032, 'Linda Hogan', 20, 'CSE', 94, 'suspended', '2025-04-28', 'garrettbrittany@example.com', '2005-05-10', 'Australia'),
(1033, 'Michael Davidson', 22, 'BBA', 91, 'active', '2025-04-25', 'brandon12@example.com', '2003-01-28', 'UK'),
(1034, 'Kimberly Bradley', 25, 'CSE', 42, 'inactive', '2025-04-27', 'rebeccamacias@example.net', '2000-02-12', 'New Zealand'),
(1035, 'Patricia Henson', 18, 'EEE', 55, 'active', '2025-05-04', 'dwalker@example.net', '2007-03-24', 'South Korea'),
(1036, 'Brenda Robinson', 23, 'EEE', 70, 'suspended', '2025-05-13', 'lori11@example.net', '2002-02-14', 'Germany'),
(1037, 'Nathan Carr', 22, 'ECE', 83, 'active', '2025-05-06', 'carlos72@example.com', '2003-02-17', 'Australia'),
(1038, 'Larry Chambers', 24, 'EEE', 36, 'inactive', '2025-05-15', 'daniel87@example.org', '2001-03-25', 'USA'),
(1039, 'Kimberly Banks', 19, 'ECE', 64, 'suspended', '2025-05-02', 'julia29@example.net', '2006-03-12', 'Canada'),
(1040, 'Julie Edwards', 21, 'CSE', 99, 'inactive', '2025-05-12', 'erinleonard@example.net', '2004-02-13', 'UK'),
(1041, 'Catherine Dixon', 22, 'EEE', 58, 'active', '2025-04-22', 'wallacecolleen@example.com', '2003-04-29', 'Canada'),
(1042, 'Barbara Estrada', 25, 'ECE', 68, 'inactive', '2025-05-08', 'brockcharles@example.com', '2000-01-05', 'South Korea'),
(1043, 'Mark Byrd', 20, 'EEE', 76, 'active', '2025-05-09', 'robinsonbrittany@example.org', '2005-01-08', 'India'),
(1044, 'Brian Blake', 25, 'ECE', 32, 'suspended', '2025-05-10', 'andrewcarter@example.net', '2000-05-06', 'UK'),
(1045, 'Amanda Arnold', 18, 'CSE', 97, 'inactive', '2025-04-29', 'ashleylawrence@example.org', '2007-02-19', 'USA'),
(1046, 'Kevin Bell', 22, 'EEE', 87, 'suspended', '2025-05-03', 'brandonparks@example.net', '2003-02-16', 'Germany'),
(1047, 'Sara Sullivan', 21, 'BBA', 73, 'inactive', '2025-05-07', 'michaelhall@example.org', '2004-01-16', 'New Zealand'),
(1048, 'Sean Sharp', 24, 'EEE', 95, 'active', '2025-05-06', 'zachary74@example.net', '2001-01-06', 'Canada'),
(1049, 'Paul Jordan', 23, 'ECE', 40, 'suspended', '2025-04-23', 'patriciapena@example.org', '2002-01-19', 'Germany'),
(1050, 'Debbie Vaughn', 19, 'CSE', 91, 'active', '2025-04-25', 'holmeswilliam@example.com', '2006-03-10', 'UK');


-- Write a query to find all students who have a score greater than 80 and not null.
SELECT * FROM students WHERE score > 80 AND score IS NOT NULL

-- Use the NOT operator to exclude students from a specific department.
SELECT * FROM students WHERE department <> 'ECE'

-- Fetch students whose names start with ‘A’ using LIKE and ILIKE.
SELECT * FROM students WHERE name LIKE ('A%');

SELECT * FROM students WHERE name ILIKE ('a%')

-- Select all students whose age is between 18 and 25.
SELECT * FROM students WHERE age BETWEEN 18 and 25;

-- Retrieve rows using IN for a specific set of roll numbers.
SELECT *
FROM students
WHERE
    roll IN (
        1001,
        1011,
        1015,
        1020,
        1035,
        1040,
        1050
    );

-- Count how many students exist in the students table.
SELECT COUNT(roll) FROM students;

-- Find the average score of students in a specific department.
SELECT AVG(score) FROM students WHERE department = 'CSE';

-- Get the maximum and minimum age of all students.
SELECT MIN(age) FROM students;

SELECT MAX(age) FROM students;

-- Update the status of students who scored less than 50 to 'failed'.
UPDATE students set last_login = '2023-12-12' WHERE id = 50;

SELECT * FROM students;

-- Delete students who have not logged in since last year.
DELETE FROM students
WHERE
    last_login < CURRENT_DATE - INTERVAL '1 year';

-- Use LIMIT and OFFSET to fetch the second page of results (5 per page).
SELECT * FROM students LIMIT 5 OFFSET 5 * 1;