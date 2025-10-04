import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  await sequelize.authenticate();
  console.log('✅ MySQL connected successfully');
} catch (err) {
  console.error('❌ Unable to connect:', err);
}

export default sequelize;
