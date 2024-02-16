import express from "express";
import routes from "./routers";
const app = express();

app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});
