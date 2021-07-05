const db = require("./db");

const getUser = (email) => {
  const stringQuery = `
  SELECT name FROM users
  WHERE email = $1;
  `;
  console.log("Inside getUser line 8");
  return db
    .query(stringQuery, [email])
    .then((data) => data.rows[0])
    .catch((err) => err.message);
};

const createUser = (user) => {
  const { name, email, password } = user;

  getUser(email)
    .then((dbRes) => {
      if (!dbRes) {
        const stringQuery = `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3);
        `;
        return db
          .query(stringQuery, [name, email, password])
          .then((data) => data.rows[0])
          .catch((err) => err.message);
      } else {
        return "Sorry, that email is already taken.";
      }
    })
    .catch((err) => err.message);
};

const validateUser = (email, password) => {
  // console.log(user)
  // const { email, password } = user;
  console.log("email line 30", email);
  console.log("password line 31", password);
  const stringQuery = `
  SELECT * FROM users
  WHERE email = $1
  AND password = $2;
  `;
  return db
    .query(stringQuery, [email, password])
    .then((data) => data.rows[0])
    .catch((err) => err.message);
};

//----------------------------------------

const getTimelinesForUser = (id) => {
  const stringQuery = `
  SELECT * FROM timelines
  WHERE user_id = $1;
  `;

  return db.query(stringQuery, [id]).then((data) => data.rows);
};

const createTimeline = (user_id, name, start_month, end_month) => {
  const stringQuery = `
  INSERT INTO timelines (user_id, name, start_month, end_month)
  VALUES ($1, $2, $3, $4);
  `;
  return db
    .query(queryString, [user_id, name, start_month, end_month])
    .then((data) => data.rows[0])
    .catch((err) => err.message);
};
//----------------------------------------

const getInstancesForTimelines = (id) => {
  const stringQuery = `
  SELECT * FROM instances
  WHERE timeline_id = $1;
  `;

  return db.query(stringQuery, [id]).then((data) => data.rows);
};

const createInstance = (
  timeline_id,
  instance_colour_id,
  name,
  description,
  date,
  image
) => {
  const stringQuery = `
INSERT INTO instances (timeline_id, instance_colour_id, name, description, date, image)
VALUES ($1, $2, $3, $4, $5, $6);
`;
  return db
    .query(queryString, [
      timeline_id,
      instance_colour_id,
      name,
      description,
      date,
      image,
    ])
    .then((date) => data.row[0])
    .catch((err) => err.message);
};
//----------------------------------------

const getColoursForInstances = (id) => {
  const stringQuery = `
  SELECT colour FROM instance_colours
  WHERE id = $1;
  `;

  return db.query(stringQuery, [id]).then((data) => data.rows);
};

module.exports = {
  getUser,
  createUser,
  getTimelinesForUser,
  getInstancesForTimelines,
  getColoursForInstances,
  createInstance,
  validateUser,
};
