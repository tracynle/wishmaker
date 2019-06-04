-- Drops if it exists currently --
DROP DATABASE IF EXISTS wishmaker_db;
CREATE DATABASE wishmaker_db;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Ngoc513*';

USE wishmaker_db;

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about, image) 
VALUES ('Peter Parker','spiderman','password', '08/27/1993', now(), now(), 
'I live in New York and love exploring this city.');

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about, image) 
VALUES ('Barry Allen', 'flash', 'password', '07/29/1993', now(), now(), 'I move faster than the wind.');

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about, image)
VALUES ('Oliver Queen', 'greenArrow ', 'password', '05/16/1985', now(), now(), 'Green is my favorite color, if you can not tell.');

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about, image)
VALUES ('Kara Zor-el', 'superGirl', 'password', '09/22/1975', now(), now(), 'Simple girl who prefers to stay indoors, but what is a superhero gonna do?');

INSERT  INTO Users
(name, userName, password, birthday, createdAt, updatedAt, about, image)
VALUES ('Bruce Wayne', 'batman', 'password', '05/27/1983', now(), now(), 'It is not who I am underneath, but what I do that defines me.');


SELECT * FROM Users;

SELECT * FROM UserLikes;

SELECT * FROM friends;

DELETE FROM friends;
DELETE FROM UserLikes;

UPDATE Users set image = 'http://www.hdwallpapers.in/download/spiderman_artwork_4k-wide.jpg' WHERE id = 11;
UPDATE Users set image = 'http://static.next-episode.net/tv-shows-images/huge/the-flash.jpg' WHERE id = 12;
UPDATE Users set image = 'https://andrewpinkham.files.wordpress.com/2015/02/arrow-arrow-cw-35030076-1920-1200.jpg' WHERE id = 13;
UPDATE Users set image = 'https://art-s.nflximg.net/6f16c/9ad779b7e89aaa1fdc7c7f7c59ba684d04a6f16c.jpg' WHERE id = 14;
UPDATE Users set image = 'http://www.hdwallpapers.in/download/batman_in_the_dark_knight_rises-1366x768.jpg' WHERE id = 16;

