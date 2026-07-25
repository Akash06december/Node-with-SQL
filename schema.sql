
CREATE TABLE user(
    id varchar(50) PRIMARY KEY,
    username varchar(50) unique,
    email_id varchar(50) UNIQUE NOT NULL,
    password varchar(50) NOT NULL
);

ALTER TABLE user
MODIFY username VARCHAR(100),
MODIFY email_id VARCHAR(100),
MODIFY password VARCHAR(100);