
import axios from "axios";
import express from "express";
import apicache from "apicache";
import env from "../utils/env.js";

const router = express.Router();
export default router;



router.all('/*', apicache.middleware("15 minutes"), async (req, res, next) =>
{

    try
    {
        const
            query = req.query || {},
            { path, method } = req,
            params = {
                ...query,
            }, headers = {
                accept: "application/json",
            };

        // if already using one
        if (env.apiKey)
        {
            params.api_key ??= env.apiKey;
        }

        if (env.token && !params.api_key)
        {
            headers.Authorization = env.token;
        }
        const resp = await axios.request(path, {
            method,
            baseURL: env.baseUrl + '/3',
            headers,
            params,
        });

        return res.status(resp.status).send(resp.data);

    } catch (error)
    {
        console.error(error.message);
        const { response } = error;
        return res.status(response.status).send(response.data);
    }


});



















