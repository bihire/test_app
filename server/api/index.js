import app from "../../app";
import authRoutes from "./routes/auth";
import responseMsg from "./heplpers/responseMsg";

app.get("/api/v2", (req, res) => {
    responseMsg.successMsg(res, 200, "initializing successful in v2");
});
// app.use("/api/v2/auth", authRoutes);
app.use((req, res, next) => {
    responseMsg.errorMsg(res, 404, "endpoint URL not found");
});