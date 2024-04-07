import express from 'express'
import Hello from "./Hello.js"
import Lab5 from './Labs/Lab5.js'
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import cors from 'cors'
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()
app.use(cors())
app.use(express.json());
AssignmentRoutes(app)
ModuleRoutes(app)
CourseRoutes(app)
Lab5(app)
Hello(app)
UserRoutes(app);
app.listen(process.env.PORT || 4000)