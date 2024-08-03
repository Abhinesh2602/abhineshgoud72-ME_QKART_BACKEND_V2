const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const ApiError = require("./utils/ApiError");
const port = config.port;
let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

mongoose
  .connect(config.mongoose.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection succesful with mongoose");
    server = app.listen(port, () => {
      console.log(`App Running on the Port ${port}.....`);
    });
  })
  .catch((err) => {
    throw new ApiError("Error Connecting the DataBase");
  });
