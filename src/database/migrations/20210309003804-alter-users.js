module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'password_hash', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('users', 'password_hash');
  },
};
