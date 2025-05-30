-- Active: 1747486928827@@127.0.0.1@5432@ph
CREATE TABLE students (
    std_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    age INT,
    grade CHAR(2),
    course VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    dob DATE,
    blood_group VARCHAR(5),
    country VARCHAR(50)
);


-- insert multiple data
INSERT INTO students (first_name, last_name, age, grade, course, email, dob, blood_group, country) VALUES
('Alice', 'Smith', 20, 'A+', 'Computer Science', 'alice.smith@example.com', '2004-03-15', 'O+', 'USA'),
('Bob', 'Johnson', 22, 'B', 'Mathematics', 'bob.johnson@example.com', '2002-07-09', 'A-', 'Canada'),
('Charlie', 'Brown', 19, 'A', 'Physics', 'charlie.brown@example.com', '2005-01-25', 'B+', 'UK'),
('Diana', 'Clark', 21, 'B+', 'Chemistry', 'diana.clark@example.com', '2003-11-10', 'AB-', 'Australia'),
('Ethan', 'Miller', 23, 'A', 'Economics', 'ethan.miller@example.com', '2001-05-05', 'O-', 'Germany'),
('Fiona', 'Garcia', 20, 'C', 'Literature', null, '2004-08-19', 'B-', 'France'),
('George', 'Martinez', 24, 'B-', 'Philosophy', 'george.martinez@example.com', '2000-12-01', 'A+', 'Mexico'),
('Hannah', 'Lee', 21, 'A', 'Biology', 'hannah.lee@example.com', '2003-04-30', 'O+', 'South Korea'),
('Ian', 'Walker', 22, 'C+', 'History', 'ian.walker@example.com', '2002-06-15', 'AB+', 'New Zealand'),
('Julia', 'Hall', 20, 'B', 'Art', 'julia.hall@example.com', '2004-09-11', 'B+', 'Italy'),
('Kevin', 'Allen', 25, 'A-', 'Sociology', null, '1999-10-03', 'O-', 'USA'),
('Laura', 'Young', 19, 'B+', 'Engineering', 'laura.young@example.com', '2005-02-27', 'A-', 'India'),
('Michael', 'King', 23, 'A+', 'Statistics', 'michael.king@example.com', '2001-07-13', 'AB+', 'Ireland'),
('Nina', 'Wright', 21, 'C', 'Law', 'nina.wright@example.com', '2003-03-09', 'B-', 'South Africa'),
('Oscar', 'Lopez', 20, 'A-', 'Architecture', 'oscar.lopez@example.com', '2004-10-23', 'A+', 'Spain'),
('Paula', 'Scott', 22, 'B+', 'Political Science', null, '2002-05-01', 'O+', 'Brazil'),
('Quincy', 'Adams', 24, 'A', 'Astronomy', 'quincy.adams@example.com', '2000-08-16', 'AB-', 'USA'),
('Rachel', 'Baker', 20, 'B', 'Journalism', 'rachel.baker@example.com', '2004-01-29', 'B+', 'UK'),
('Steven', 'Nelson', 21, 'C+', 'Music', 'steven.nelson@example.com', '2003-06-17', 'O-', 'Sweden'),
('Tina', 'Perez', 23, 'A', 'Theatre', 'tina.perez@example.com', '2001-11-22', 'A-', 'Argentina');



SELECT * FROM students ORDER BY dob ASC; 



SELECT * FROM students
   WHERE (country = 'USA' OR country = 'Australia') AND age >= 20 ;

SELECT * FROM students
    WHERE country <> 'USA';

SELECT concat(first_name, ' ', last_name) as "Full Name" FROM students;


SELECT sum(age) from students;

SELECT MAX(length(first_name)) FROM students;


SELECT * FROM students
    WHERE NOT country = 'USA';


SELECT * FROM students
    WHERE email IS NOT NULL;


SELECT COALESCE(email, 'Not Provided'), * FROM students;


SELECT * from students
    WHERE country NOT IN('Argentina', 'Brazil', 'Germany');


SELECT * FROM students
    WHERE dob BETWEEN '2002-01-01' and '2003-05-01';  


SELECT * FROM students
    WHERE first_name LIKE('___a__');   



SELECT * FROM students
    WHERE first_name ILIKE('a%');       





SELECT * FROM students LIMIT 10 OFFSET 10 * 0;
SELECT * FROM students LIMIT 10 OFFSET 10 * 1;
SELECT * FROM students LIMIT 10 OFFSET 10 * 2;
SELECT * FROM students LIMIT 10 OFFSET 10 * 3;



SELECT * FROM students;


DELETE FROM students 
    where country IN('India', 'Pakistan');


UPDATE students
    set email = 'Not Provided'
    WHERE email IS NULL