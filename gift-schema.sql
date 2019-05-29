-- Drops if it exists currently --
DROP DATABASE IF EXISTS wishmaker_db;
CREATE DATABASE wishmaker_db;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MattPassword';

USE wishmaker_db;
SELECT * FROM Users;

INSERT  INTO Users
(userName, password, email, birthday, createdAt, updatedAt) 

VALUES ('Peter Parker', 'webmaster', 'weby@email.com', '05/26/2019',now(), now());

SELECT * FROM UserLikes;

SELECT * FROM friends;

-- DELETE FROM UserLikes;
