DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS timelines CASCADE;
DROP TABLE IF EXISTS instance_colours CASCADE;
DROP TABLE IF EXISTS instances CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE timelines (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  start_month INTEGER NOT NULL,
  end_month INTEGER NOT NULL
);

CREATE TABLE instance_colours (
  id SERIAL PRIMARY KEY NOT NULL,
  colour VARCHAR(50) NOT NULL
);

CREATE TABLE instances (
  id SERIAL PRIMARY KEY NOT NULL,
  timeline_id INTEGER REFERENCES timelines(id) ON DELETE CASCADE,
  instance_colour_id INTEGER REFERENCES instance_colours(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  image VARCHAR(255) 
);


GRANT SELECT ON users TO PUBLIC;
GRANT SELECT ON timelines TO PUBLIC;
GRANT SELECT ON instance_colours TO PUBLIC;
GRANT SELECT ON instances TO PUBLIC;
GRANT DELETE ON ALL TABLES IN SCHEMA public TO PUBLIC;

GRANT ALL ON users_id_seq to development;
GRANT ALL ON timelines_id_seq to devlopment;
GRANT ALL ON instance_colours_id_seq to development;
GRANT ALL ON instances_id_seq to development;
