const db = require("./db");

const getUserByEmail = (email) => {
  const stringQuery = `
  SELECT * FROM users
  WHERE email = $1;
  `;
  return db
    .query(stringQuery, [email])
    .then((data) => data.rows[0])
    .catch((err) => err.message);
};

const createUser = (user) => {
  const { name, email, password } = user;

  const stringQuery = `
    INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3);
       `;
  return db
    .query(stringQuery, [name, email, password])
    .then((data) => getUserByEmail(email));
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

const getTimelineByNameForUser = (name, user_id) => {
  const stringQuery = `
  SELECT * FROM timelines
  WHERE name = $1
  AND user_id = $2;
  `;
  return db.query(stringQuery, [name, user_id]).then((data) => data.rows[0]);
};

const createTimeline = (timeline) => {
  const { user_id, name, start_month, end_month } = timeline;
  const stringQuery = `
  INSERT INTO timelines (user_id, name, start_month, end_month)
  VALUES ($1, $2, $3, $4);
  `;
  return db
    .query(stringQuery, [user_id, name, start_month, end_month])
    .then(() => getTimelineByNameForUser(name, user_id))
    .catch((err) => err.message);
};

const deleteTimeline = (timeline) => {
  const stringQuery = `
  DELETE FROM timelines WHERE id = $1;
  `;
  return db
    .query(stringQuery, [timeline])
    .then((data) => data.rows)
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

const getInstanceByName = (name) => {
  const stringQuery = `
  SELECT * FROM instances
  WHERE name = $1
  LIMIT 1;
  `;
  return db.query(stringQuery, [name]).then((data) => data.rows);
};

const createInstance = (newInstance) => {
  const {
    timeline_id,
    name,
    instance_colour_id,
    description,
    month,
    day,
    image,
  } = newInstance;

  const stringQuery = `
    INSERT INTO instances (timeline_id, instance_colour_id, name, description, month, day, image)
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;
  return db
    .query(stringQuery, [
      timeline_id,
      instance_colour_id,
      name,
      description,
      month,
      day,
      image,
    ])
    .then((data) => getInstanceByName(name))
    .catch((err) => err.message);
};

const deleteInstance = (instanceId) => {
  console.log(instanceId);
  const stringQuery = `
    DELETE FROM instances WHERE id = $1;
  `;
  return db
    .query(stringQuery, [instanceId])
    .then((data) => data.rows)
    .catch((err) => err.message);
};

const editInstance = (instanceData) => {
  console.log("inside dbHelpers");
  const {
    timeline_id,
    instance_id,
    instance_colour_id,
    name,
    description,
    image,
    month,
    day,
  } = instanceData;
  const stringQuery = `
    UPDATE instances 
    SET name = $1, description = $2, month = $3, day = $4, image = $5 
    WHERE id = $6
  `;
  return db
    .query(stringQuery, [name, description, month, day, image, instance_id])
    .then((data) => getInstanceByName(name))
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
  getUserByEmail,
  createUser,
  getTimelinesForUser,
  getInstancesForTimelines,
  getColoursForInstances,
  createInstance,
  validateUser,
  getInstanceByName,
  createTimeline,
  getTimelineByNameForUser,
  deleteTimeline,
  deleteInstance,
  editInstance,
};
