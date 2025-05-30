-- Active: 1747424605971@@127.0.0.1@5432@ph
SELECT * FROM enrollment;

ALTER TABLE enrollment
    ADD COLUMN courseName VARCHAR(50) NOT NULL;

INSERT INTO enrollment VALUES (5, 'saidul', 'Saidul Islam', 'exam@gmail.com', 23, 'TypeScript Technocrat');

ALTER TABLE enrollment
    DROP COLUMN courseName;

ALTER TABLE enrollment
    RENAME COLUMN age to user_age;


ALTER TABLE enrollment
    ADD COLUMN courseName VARCHAR(5);


ALTER TABLE enrollment
    alter COLUMN courseName type VARCHAR(50);


ALTER TABLE enrollment
    alter COLUMN courseName set DEFAULT 'PH';


ALTER TABLE enrollment
    alter COLUMN courseName drop DEFAULT;


ALTER TABLE enrollment
    ADD constraint uniue_enrolllment_id UNIQUE(id);


ALTER TABLE enrollment
    drop constraint uniue_enrolllment_id;

TRUNCATE TABLE enrollment;