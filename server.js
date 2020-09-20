//Here is the app with express
module.exports = (app, port) => {
    app.listen(port, () => {
        console.log("Server on port ", port)
    })
}
