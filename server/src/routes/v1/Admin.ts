import express from 'express'
import { loginAsAdmin, getAdmin, signUpAsAdmin } from '../../controller/Admin';
import { verifyAdmin } from '../../libs/admin/verifyAdmin';


const adminRoutes = express.Router();

adminRoutes.get("/", verifyAdmin, getAdmin);
adminRoutes.post("/login", loginAsAdmin);
if (process.env.ENVIRONMENT == 'development')
adminRoutes.post("/signup", signUpAsAdmin);


export default adminRoutes;