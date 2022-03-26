const express = require("express")
const { PORT } = require("../customer/config")
const databaseConnection = require("./database/connection")
const expressApp = require("./express-app")

const StartApp = async () => {
    const app = express()
    await databaseConnection()
    await expressApp(app)
    app.listen(PORT, () => { `product app started at ${PORT}` }).on("error", (err) => {
        console.log(err); process.exit();
    })
}
StartApp()