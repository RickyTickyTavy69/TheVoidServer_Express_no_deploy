import {Router} from "express";
import BlogController from "../Controllers/Blog.controller.js";
import multer from "multer";

const upload = multer({dest: './public'});
/*,*/

const router = Router();

router.post("/create", upload.single('image'), BlogController.create);

router.get("/getAll", BlogController.getAll);

router.get("/", (req, res) => {
    res.status(200).json({message: "hallo hallo hallo lololo lololo"});
});

export default router;