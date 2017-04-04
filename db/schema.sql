### Schema

CREATE DATABASE ww_db;
USE ww_db;

CREATE TABLE ormwings
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
