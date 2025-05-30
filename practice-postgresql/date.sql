-- Active: 1747486928827@@127.0.0.1@5432@ph@public




-- show timezone==============================
SHOW timezone;


-- timestamp ====================
SELECT now();

SELECT * FROM timez;

CREATE TABLE timeZ(ts TIMESTAMP without time zone, tsz TIMESTAMP with time zone);

INSERT INTO timez VALUES('2025-05-18 21:21:12', '2025-05-18 21:21:12');


-- TIME CUSTING
SELECT now()::DATE;
SELECT now()::TIME;



-- custom date & time formate
SELECT to_char(now(), 'ddd');


SELECT CURRENT_DATE - INTERVAL '1 day'


-- calculate age
SELECT age(CURRENT_DATE, '2002-06-25');


SELECT extract(month from '2002-06-25'::DATE)