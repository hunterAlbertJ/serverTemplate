DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS companies;

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    location text
);  
INSERT INTO companies (name, location) VALUES ('Microsoft', 'Washington');
INSERT INTO companies (name, location) VALUES ('Apple', 'California');
INSERT INTO companies (name, location) VALUES ('Google', 'California');

CREATE TABLE users (
    id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name text NOT NULL,
    address text,
    phone int
    
);  
INSERT INTO users (name, address, phone ) VALUES ('Micheal', '123 whatever st', 1234453);
INSERT INTO users (name, address, phone ) VALUES ('Alphonse', '456 dont like this street', 22342234);
INSERT INTO users (name, address, phone ) VALUES ('Kelly', '789 Go away ave', 32342342);
INSERT INTO users (name, address, phone ) VALUES ('Carlson', '1969 Moon Man', 32342342);
INSERT INTO users (name, address, phone ) VALUES ('Bruno', '789 Go away ave', 32342342);
INSERT INTO users (name, address, phone ) VALUES ('Micky', '556 pew pew st', 32342342);




-- CREATE TABLE people (
--     id SERIAL PRIMARY KEY,
--     first_name text NOT NULL,
--     location text NOT NULL,
--     company_id integer,
--     CONSTRAINT fk_companies FOREIGN KEY(company_id) REFERENCES companies(id)
-- )
-- INSERT INTO companies (name, location) VALUES ('Microsoft', 'Washington');
-- INSERT INTO companies (name, location) VALUES ('Apple', 'California');
-- INSERT INTO companies (name, location) VALUES ('Google', 'California');
-- INSERT INTO people (first_name, location, company_id, ) VALUES ('Micheal', 'Washington', 1);
-- INSERT INTO people (first_name, location, company_id, ) VALUES ('Micky', 'California', 2);
-- INSERT INTO people (first_name, location, company_id, ) VALUES ('Mitch', 'California', 3);