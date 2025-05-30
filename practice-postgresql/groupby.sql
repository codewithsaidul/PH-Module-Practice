-- Active: 1747486928827@@127.0.0.1@5432@ph@public


SELECT department, COUNT(*) FROM students
    GROUP BY department
    HAVING COUNT(*) > 13;


SELECT * from students


SELECT extract(year from dob::DATE) as dateOfBirth, COUNT(dob) from students
    GROUP BY dob

