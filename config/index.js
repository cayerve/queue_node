//Aqui van a estar las variables de configuración (puerto, host donde corre redis, etc.)
exports.config = {
    port: process.env.PORT,
    redis: {
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
        db: process.env.REDIS_DB
    }
}