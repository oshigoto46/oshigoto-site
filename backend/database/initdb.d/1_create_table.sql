USE photos;

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT NOT NULL
);

