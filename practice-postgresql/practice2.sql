-- Active: 1747486928827@@127.0.0.1@5432@practicedb@public


CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    std_name VARCHAR(100) NOT NULL,
    department_id INTEGER REFERENCES departments(id) ON DELETE SET DEFAULT NULL,
    last_login DATE
);


CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    std_name VARCHAR(100) NOT NULL,
    department_id INTEGER REFERENCES departments(id) ON DELETE CASCADE,
    last_login DATE
);


CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    dpt_name CHAR(4) NOT NULL
);


CREATE TABLE course (
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(50)
);

DROP Table departments;
DROP Table students;



INSERT INTO students (std_name, department_id, last_login) VALUES
('Alice Johnson', 1, '2025-05-01'),
('Bob Smith', 2, '2025-05-03'),
('Charlie Ray', 3, '2025-04-29'),
('Diana Prince', 1, '2025-05-05'),
('Ethan Hunt', 4, '2025-05-07'),
('Fiona Glen', 5, '2025-05-02'),
('George Blake', 2, '2025-05-02'),
('Hannah West', 3, '2025-05-04'),
('Ivan Lee', 1, '2025-05-06'),
('Julia Park', 5, '2025-05-04'),
('Kevin Stone', 1, '2025-05-01'),
('Lara Miles', 4, '2025-05-08'),
('Mike Dean', 2, '2025-05-03'),
('Nina Rose', 3, '2025-05-01'),
('Oscar Ford', 4, '2025-05-02'),
('Paula Drake', 5, '2025-05-09'),
('Quentin Lake', 2, '2025-05-06'),
('Rita Grant', 3, '2025-05-06'),
('Sam Wells', 1, '2025-05-03'),
('Tina Brooks', 5, '2025-05-05');
 
INSERT INTO students (std_name, last_login) VALUES
('Thomas Shelby', '2020-06-17');

INSERT INTO departments (dpt_name) VALUES
('CSE'),
('EEE'),
('BBA'),
('LLB'),
('ENG'),
('Math')

SELECT * FROM students;
SELECT * FROM departments;



-- 1. Retrieve students who have logged in within the last 30 days.
SELECT * FROM students
    WHERE last_login >= CURRENT_DATE - INTERVAL '30 day';




-- 2. Extract the login month from the last_login and group students by month.

SELECT extract(month from last_login)as login_month, COUNT(id)  FROM students
    GROUP BY login_month;




-- 3. Count how many students logged in per month and show only those months where login count is more than 3.
SELECT extract(month from last_login)as login_month, COUNT(id)  FROM students
    GROUP BY login_month
    HAVING COUNT(id) > 3;



-- 4. Delete a department and see how students are affected using ON DELETE CASCADE and ON DELETE SET NULL.

-- ON DELETE CASCADE 
DELETE FROM departments WHERE id = 6;


-- ON DELETE SET NULL
DELETE FROM departments WHERE id = 5;



-- 7. Join students and departments using INNER JOIN to display each student's department name.

SELECT s.std_name, d.dpt_name FROM students as s
JOIN departments as d ON s.department_id = d.id;



-- 8. Use a LEFT JOIN to show all students including those without a department.

SELECT * FROM students AS s
    LEFT JOIN departments AS d ON s.department_id = d.id;


-- 9. Use a RIGHT JOIN to show all departments including those without students.
SELECT * FROM students AS s
    RIGHT JOIN departments AS d ON s.department_id = d.id;


SELECT * FROM students AS s
    FULL JOIN departments AS d ON s.department_id = d.id;