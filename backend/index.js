import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import contactRoutes from "./routes/message.route.js"
import session from "express-session";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

connectDB();

app.use(
  session({
    secret: "iahfeaufhdnaf",
    name: "Session",
    resave: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day in milliseconds
      httpOnly: true, // Cookie cannot be accessed via client-side JS
      secure: false, // Set to true if using HTTPS
      sameSite: "lax", // Helps prevent CSRF attacks
    },
  }),
);

app.use("/auth", authRoutes);
app.use("/contact",contactRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port now 🥰");
});
