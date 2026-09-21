CREATE DATABASE College;

USE College;

-- CREATE TABLE student (
-- 	rollno  INT ,
--     name VARCHAR(30),
--     age INT
-- );

-- INSERT INTO student 
-- VALUES
-- (101,"adam",12),
-- (102,"bob",14);


-- SELECT * FROM student;


CREATE DATABASE IF NOT EXISTS College;

DROP DATABASE IF EXISTS instagram ;

SHOW DATABASES;

SHOW TABLES ;

CREATE TABLE user (
id INT ,
age INT ,
name VARCHAR(30) NOT NULL ,
email VARCHAR(50) UNIQUE ,
follower INT DEFAULT 0 ,  
following INT ,
CONSTRAINT CHECK (age >= 13),
PRIMARY KEY(id) 
);

INSERT INTO user
 (id ,age , name , email , follower , following )
 VALUES
 (1 , 14 , "adam", "adam@yahoo.in", 123 , 145),
 (2 , 15 , "bob", "bob12@gamil.com", 200 , 200),
 (3 , 16 , "casey", "casey@email.com", 300 , 306),
 (4 , 17 , "donald", "donald@gamil.com", 200 , 105);
 
INSERT INTO user 
(id, age, name, email, follower, following)
VALUES
(5, 14, 'eve', 'eve@yahoo.in', 400, 145),
(6, 16, 'farah', 'farah@gamil.com', 10000, 1000);

SELECT * FROM user;
 
 ALTER TABLE user 
 ADD column city VARCHAR(50) 
 default "delhi";
 
 ALTER TABLE user
 DROP COLUMN age;
 
ALTER TABLE user 
RENAME TO instaUser;

ALTER TABLE instaUser 
RENAME TO user;
 
SELECT id , name  ,email FROM user;

SELECT * FROM user ; 

ALTER TABLE user 
MODIFY subs INT DEFAULT 5 ;

TRUNCATE table user ;

SELECT * FROM user ;

DROP TABLE user ;

ALTER TABLE user 
CHANGE COLUMN follower subs INT DEFAULT 0 ;

 
SELECT * 
FROM user 
WHERE follower >=200; 

SELECT  age ,name
FROM user 
WHERE age +1 = 18; 

SELECT name ,age , follower
FROM user 
WHERE age > 15 AND follower > 200;

SELECT name ,age , follower
FROM user 
WHERE age > 15 OR  follower > 200;

SELECT name ,age , follower
FROM user 
WHERE age BETWEEN 15 AND 17 ; 
 
SELECT name ,age , follower
FROM user 
WHERE email IN ("adam@yahoo.in" , "bob12@gamil.com",  "abc@gamil.com");

SELECT name , age , email 
FROM user 
WHERE age >14 
LIMIT 2;

SELECT MAX(follower)
FROM user;

SELECT age ,count(id)
FROM user 
GROUP BY age ; 

SELECT age ,MAX(follower)
FROM user 
GROUP BY age ; 

SELECT age ,MAX(follower)
FROM user 
GROUP BY age 
HAVING MAX(follower)>200; 

UPDATE user 
SET follower= 600
WHERE age = 16 ;

SELECT * FROM user ;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM user 
WHERE age = 14 ;

CREATE TABLE posts (
	id INT PRIMARY KEY ,
    content VARCHAR(100),
    user_id INT ,
    FOREIGN KEY (user_id) REFERENCES user(id)
    );
    
DROP TABLE posts ;
