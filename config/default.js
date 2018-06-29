module.exports = {
    adapter: process.env.DB_ADAPTER || 'ram',
    mysql: process.env.MYSQL_URI || 'mysql://root:parola@192.168.99.100:3306/taskDb',
    mongo: process.env.MONGO_URI ||'mongodb://192.168.99.100:27017/taskDb',
    port: process.env.PORT || 8080,
  }
  