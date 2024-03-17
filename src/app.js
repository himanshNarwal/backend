import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // accepting json with size limit of 16kb  -> usually comes when submitting a form
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // parses incoming requests with URL-encoded pyloads
app.use(express.static("public")); // serves static files from the specified directory, which in this case is “Public”. This means that any files like images, CSS, and JavaScript located in the “Public” directory can be accessed directly via the web browser.
app.use(cookieParser());

export { app };
