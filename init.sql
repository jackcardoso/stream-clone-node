
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,,
    is_active boolean not null,
    created_date datetime not null,
    name varchar(200)
);

