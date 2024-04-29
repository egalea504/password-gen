-- -- is called when db is reset with command npm run reset

-- -- Insert data into the users table
-- INSERT INTO users (first_name, last_name, email, password, created_at)
-- VALUES
--   ('Alice', 'Bo', 'alice@example.com', 'StrongP@ss1', '2024-04-24 10:00:00'),
--   ('Bobert', 'Gym', 'bob@example.com', 'R3s!lient_2', '2024-04-24 11:00:00'),
--   ('Carol', 'Dunley', 'carol@example.com', 'S@feC0de3', '2024-04-24 12:00:00'),
--   ('Dave', 'Day', 'dave@example.com', 'S3cur!ty#4', '2024-04-24 13:00:00'),
--   ('Eve', 'Jane', 'eve@example.com', 'L0ckD0wn_5', '2024-04-24 14:00:00');

-- -- Insert passwords for each user, ensuring each has at least 5 passwords
-- INSERT INTO passwords (password, title, user_id)
-- VALUES
--   -- Passwords for Alice
--   ('Admin@123', 'Admin account', 1),
--   ('SecureP@ss!', 'Email password', 1),
--   ('SocMedia#321', 'Social Media', 1),
--   ('B@nk0fAlice', 'Bank account', 1),
--   ('Laptop@Alice', 'Laptop login', 1),

--   -- Passwords for Bob
--   ('PassBob1!', 'Email password', 2),
--   ('SecureB0b!', 'VPN', 2),
--   ('Games@Bob', 'Game login', 2),
--   ('BobSocial$', 'Social Media', 2),
--   ('B0bData!', 'Cloud storage', 2),

--   -- Passwords for Carol
--   ('Email!Carol', 'Email password', 3),
--   ('SpotifyC@rol', 'Music account', 3),
--   ('GameC@rol!', 'Game login', 3),
--   ('C@rolCloud', 'Cloud storage', 3),
--   ('Encry!pt123', 'Encrypted data', 3),

--   -- Passwords for Dave
--   ('D@veVPN!', 'VPN', 4),
--   ('SecureEmail@D', 'Email', 4),
--   ('Games@Dave', 'Game account', 4),
--   ('D@veLaptop', 'Laptop login', 4),
--   ('Bank@Dave', 'Bank account', 4),

--   -- Passwords for Eve
--   ('Email!Eve', 'Email account', 5),
--   ('Gym@Eve', 'Gym membership', 5),
--   ('CloudEve!', 'Cloud storage', 5),
--   ('Games@Eve', 'Gaming platform', 5),
--   ('Home@Eve', 'Home Wi-Fi', 5);