
CREATE TABLE UserTable(
id INT IDENTITY,
email VARCHAR(200) UNIQUE,
username VARCHAR(200),
password VARCHAR(200),
isSent INT DEFAULT 0
 )

USE Training
DROP TABLE UserTable

SELECT * FROM UserTable
UPDATE UserTable SET isSent=0

CREATE PROCEDURE getUsersToSentEmail
AS
BEGIN

SELECT id, email, username, isSent FROM UserTable WHERE isSent =0

END


EXEC getUsersToSentEmail



CREATE OR ALTER PROCEDURE updateSent(@id INT )
AS
BEGIN

UPDATE UserTable SET isSent=1 WHERE id =@id

END

