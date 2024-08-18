const express = require("express")
const app = express();
const first_route = require("./routes/route1")
const welcomecontroller = require("./controllers/route_controller_1")
app.use(express.static("public"));
app.use("/route1",first_route )
app.listen(3005, () =>{
    console.log("server.js running ");
})


