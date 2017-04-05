### Schema for my sql database

CREATE DATABASE ww2_db;
USE ww2_db;

CREATE TABLE wings
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	hungry BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
