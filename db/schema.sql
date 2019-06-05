CREATE DATABASE tacos_db;
USE tacos_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name VARCHAR(50) NOT NULL,
	shell VARCHAR(50) NOT NULL,
    vegatarian BOOLEAN NOT NULL,
    picked_up BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);