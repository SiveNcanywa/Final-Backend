module.exports = {
    HOST: "localhost",
    USER: "sive02",
    PASSWORD: "Sive2022!",
    DB: "FinalDB",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };