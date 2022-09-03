import express from 'express';
import fs from 'fs';
import path from 'path';
import { User } from '#model/user.js';

const router = express.Router();

router.get('/', (req, res, next) => 
{
    return fs.readFile(path.resolve() + '/view/Main.html', (err, html) =>
    {
        if(err) return next(err);
        return res.end(html);
    });
});

export default router;