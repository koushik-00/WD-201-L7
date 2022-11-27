const app = require("./app");
const port = process.env.PORT || 8432;
app.listen(port, () => {
  console.log(`server listening at port - ${port}`);
});
