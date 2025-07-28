const express = require("express");
const connectDB = require("./config/DB");
const menuItemRouter = require("./router/menuitem");
const staffRouter = require("./router/staff");
const paymentRouter = require("./router/payment");
const orderRouter = require("./router/order");
const tableRouter = require("./router/table");
const userRouter = require("./router/user");
const bookRouter = require("./router/book");
const { config } = require("dotenv");
config();
const PORT = process.env.PORT || 8090;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/generate-qr/:id', async (req, res) => {
  const url = `https://yourapp.com/table/${req.params.id}`;
  const qrImage = await QRCode.toDataURL(url);
  res.send(`<img src="${qrImage}" />`);
});
app.use('/api/menuitems', menuItemRouter);
app.use('/api/staff', staffRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/orders', orderRouter);
app.use('/api/tables', tableRouter);
app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);

const port = 8090 || process.env.PORT
app.listen(port, ()=> {
    console.log("server are runing")
    connectDB()
});