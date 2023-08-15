import express from 'express';
import path from 'path'
const app = express();
console.log(process.cwd());
app.use(express.static('./public'))
const __dirname = path.resolve(path.dirname(''))
console.log(__dirname.split(/[\\\/]/));

app.use('/', (req, res) => {
    const dir = __dirname.split(/[\\\/]/)
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(7310, _ => {
    console.log("escutando na 7310");
});