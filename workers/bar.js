module.exports = (job,done) => {
    try {
        job.progress(100)   //Esto es para ver el progreso en arena
        done(null, job.data)
    } catch (error) {
        done(error)
    }
}