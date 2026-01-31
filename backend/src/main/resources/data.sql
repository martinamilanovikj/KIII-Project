INSERT INTO countries (name, continent) VALUES
                                            ('Country1', 'Continent1'),
                                            ('Country2', 'Continent2'),
                                            ('Country3', 'Continent3');

INSERT INTO authors (name, surname, country_id) VALUES
                                                    ('Name1', 'Surname1', 2),
                                                    ('Name2', 'Surname2', 3),
                                                    ('Name3', 'Surname3', 1);

INSERT INTO books (name, category, author_id, date, available_copies) VALUES
                                                                          ('Book1',  'DRAMA',  2, '2020-05-08', 3),
                                                                          ('Book2',  'NOVEL',  3, '2024-03-02', 6),
                                                                          ('Book3',  'BIOGRAPHY', 1, '2025-03-04', 2),
                                                                          ('Book4',  'BIOGRAPHY', 1, '2025-03-04', 2),
                                                                          ('Book5',  'BIOGRAPHY', 1, '2025-03-04', 2),
                                                                          ('Book6',  'BIOGRAPHY', 1, '2025-03-04', 2),
                                                                          ('Book7',  'BIOGRAPHY', 1, '2025-03-04', 2),
                                                                          ('Book8',  'BIOGRAPHY', 1, '2025-03-04', 2),
                                                                          ('Book9',  'BIOGRAPHY', 1, '2025-03-04', 2),
                                                                          ('Book10', 'BIOGRAPHY', 1, '2025-03-04', 2),
                                                                          ('Book11', 'BIOGRAPHY', 1, '2025-03-04', 2);
INSERT INTO users (
    username,
    password,
    name,
    surname,
    role,
    is_account_non_expired,
    is_account_non_locked,
    is_credentials_non_expired,
    is_enabled
) VALUES
      ('at',   'passwordHashForAt',   'Ana',  'Todorovska', 'ROLE_LIBRARIAN', true, true, true, true),
      ('user', 'passwordHashForUser', 'User', 'User',       'ROLE_USER',      true, true, true, true);
