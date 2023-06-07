import 'dotenv/config';


// export default 

const env = {
    port: Number(process.env.API_PORT || 3000),
    baseUrl: String(process.env.API_BASE_URL || ''),
    apiKey: String(process.env.API_KEY || ''),
    token: String(process.env.API_TOKEN || ''),
};


export default env;