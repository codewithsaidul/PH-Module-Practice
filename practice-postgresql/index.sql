-- Active: 1747486928827@@127.0.0.1@5432@ph2@public

CREATE TABLE employees1 (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
);







select * from employees1;

CREATE INDEX idx_employees_name
on employees1 (employee_name);

EXPLAIN ANALYSE 
SELECT * from employees1 where employee_id = 15000;

/*

Indexing Algorithom

1. B-TREE (Default)
2. HASH
3. GIN
4. GIST


 */
SHOW data_directory;