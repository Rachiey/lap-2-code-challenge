INSERT INTO authors (pseudonym)
VALUES
('Jim McBob'),
('Garthrax');

INSERT INTO posts (title, body, date, author_id)
VALUES
(
    'test post 1',
    'This is a test post',
    '20th October 2021',
    1
),
(
    'Test post 2',
    'Yet another test post',
    '20th October 2021',
    2
);