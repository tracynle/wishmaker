-- Drops if it exists currently --
-- DROP DATABASE IF EXISTS react_project_db;
CREATE DATABASE react_project_db;

USE react_project_db;
SELECT * FROM Users;

INSERT  INTO Users
(userName, password, email, birthday, createdAt, updatedAt) 

VALUES ('Peter Parker', 'webmaster', 'weby@email.com', '05/26/2019',now(), now());

SELECT * FROM UserLikes;

SELECT * FROM friends;

-- DELETE FROM UserLikes;
