import pg from 'pg';
import config from '../config/default.json';

const connectionString = `postgres://${config.pg.host}:${config.pg.port}/${config.pg.database}?user=${config.pg.user}&password=${config.pg.password}`;

export default () => {
  const getUsers = () => {
    const pgClient = new pg.Client(connectionString);
    pgClient.connect();
    return pgClient.query('SELECT id, first_name, last_name FROM mystical_box.users;')
      .then((result) => result.rows)
      .catch(e => console.error(e.stack))
      .then((data) => {
        pgClient.end();
        return data;
      });
  };
  return {
    getUsers,
  };
};
