import dotenv from "dotenv";

//user import
import app from "./app.js";
import dbConnect from "./db/dbConnect.js";

// Load environment variables
dotenv.config();

// Connect to the database
dbConnect();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
