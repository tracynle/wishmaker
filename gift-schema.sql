-- Drops if it exists currently --
DROP DATABASE IF EXISTS wishmaker_db;
CREATE DATABASE wishmaker_db;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Ngoc513*';

USE wishmaker_db;
SELECT * FROM Users;

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about) 
VALUES ('Peter Parker','spiderman','password', '08/27/1993', now(), now(), 
'I live in New York and love exploring this city.');

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about) 
VALUES ('Barry Allen', 'flash', 'password', '07/29/1993', now(), now(), 'I move faster than the wind.');

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about)
VALUES ('Oliver Queen', 'greenArrow ', 'password', '05/16/1985', now(), now(), 'Green is my favorite color, if you can not tell.');

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about)
VALUES ('Kara Zor-el', 'superGirl', 'password', '09/22/1975', now(), now(), 'Simple girl who prefers to stay indoors, but what is a superhero gonna do?');

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about)
VALUES ('Bruce Wayne', 'batman', 'password', '05/27/1983', now(), now(), 'It is not who I am underneath, but what I do that defines me.');



SELECT * FROM UserLikes;

SELECT * FROM friends;

-- DELETE FROM UserLikes;
