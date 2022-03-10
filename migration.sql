DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name text NOT NULL
);  
INSERT INTO users (name) VALUES ('James');
INSERT INTO users (name) VALUES ('Jamie');
INSERT INTO users (name) VALUES ('Jimmy');