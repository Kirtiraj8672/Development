CREATE DATABASE college;

# question 1 
CREATE TABLE teacher 
(id INT , 
name varchar (30 ),
subject VARCHAR(20),
salary INT 
);

INSERT INTO teacher 
VALUES
(23, "ajay", "maths",50000),
(47, "bharat", "english",60000),
(18, "chetan", "chemistry",45000),
(9, "divya", "physics",75000);

SELECT * FROM teacher;

SELECT *
FROM teacher 
WHERE salary >55000;


ALTER TABLE teacher
CHANGE COLUMN salary ctc INT ; 

UPDATE teacher 
SET ctc = ctc + 0.25 * ctc ;

ALTER TABLE teacher 
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";

ALTER TABLE teacher 
DROP COLUMN ctc ;


# pratice question 2 

CREATE TABLE student
(
rollno INT PRIMARY KEY ,
name VARCHAR(50),
city VARCHAR(30),
marks INT 
) ;

INSERT INTO student 
VALUES
(110,"adam","Delhi",76),
(108,"bob","Mumbai",65),
(124,"casey","Puna",94),
(112,"duke","Puna",80);

SELECT * FROM student ;

SELECT * FROM student 
WHERE marks >75 ;

SELECT DISTINCT  city FROM student;

SELECT city ,MAX(marks)
FROM student 
GROUP BY city;

SELECT AVG(marks)
FROM student ;

ALTER TABLE student 
ADD grade VARCHAR(10) ;

UPDATE student 
SET grade = " O " WHERE  marks>=80 ;

UPDATE student 
SET grade = " A " WHERE  marks >=70 AND marks < 80  ;

UPDATE student 
SET grade = " B " WHERE  marks >=60 AND marks < 70  ;
