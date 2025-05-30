-- Active: 1747486928827@@127.0.0.1@5432@ph@public


SELECT * from employees1;

CREATE VIEW dept_avg_salary
AS
SELECT department_name, AVG(salary) FROM employees1 GROUP BY department_name;


SELECT * FROM dept_avg_salary;




CREATE view test_view
AS
SELECT employee_name, salary, department_name 
FROM employees1
WHERE department_name in 
(SELECT department_name FROM employees1 WHERE department_name LIKE '%R%');