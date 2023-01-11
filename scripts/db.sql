CREATE DATABASE IF NOT EXISTS taskdb;

USE taskdb;

CREATE TABLE IF NOT EXISTS task(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO task (title, description) VALUES
('task 1', 'Somer descriptions task one'),
('task 2', 'Somer descriptions task two'),
('task 3', 'Somer descriptions task three');