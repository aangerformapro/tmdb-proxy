import axios from "axios";
import express from "express";
import apicache from "apicache";
import env from "../utils/env.js";
import expressAssetFileCacheMiddleware from "express-asset-file-cache-middleware";

const router = express.Router();
export default router;



// expressAssetFileCacheMiddleware


router.get("/*", async (req, res, next) =>
{

    let pre = req.path.startsWith('/p') ? '/t' : '/t/p';
    res.locals.fetchUrl = `http://image.tmdb.org${pre}${req.path}`;
    next();


}, expressAssetFileCacheMiddleware({ maxSize: 10 * 1024 * 1024 * 1024, logger: console }),
    (req, res) =>
    {

        res.set({
            "Content-Type": res.locals.contentType,
            "Content-Length": res.locals.contentLength
        });
        res.end(res.locals.buffer, "binary");
    }
);