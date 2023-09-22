const express = require('express')
const app = express()

app.use(express.static('__web__/cost'));

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/__web__/cost/index.html`);
});
    
app.listen(process.env.PORT || 3001, ()=>{
    console.log(`rodando na porta ${process.env.PORT || 3001}`)
})