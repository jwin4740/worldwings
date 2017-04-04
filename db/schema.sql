### Schema

CREATE DATABASE ww_db;
USE ww_db;

CREATE TABLE ormwings
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	wing_flavor varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
