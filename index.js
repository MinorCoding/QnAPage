import express from 'express';
import router from './router/router.js';

const app = express();
app.use('/', router);
app.use(express.static('public'));

app.use((err, req, res, next) => 
{
    console.log(err);
    res.status(500).send('500 Server Internal Error');
});

app.listen(3000);

// 지금까지 이런 페이지는 없었다. 이것은 네이버 지식인인가 스택 오버 플로우인가? SGG_Team Assemble!