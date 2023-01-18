import express from 'express';
import path from 'path'
const app = express();
console.log(process.cwd());
app.use(express.static('./front/public'))
const __dirname = path.resolve(path.dirname(''))
console.log(__dirname.split(/[\\\/]/));

app.use('/', (req, res) => {
    const dir = __dirname.split(/[\\\/]/)
    res.sendFile(`${__dirname}/front/public/index.html`);
});

app.listen(5000, _ => {
    console.log("escutando na 5000");
});