const http=require('http')
const serve=http.createServer((req,res)=>{
res.statusCode=200
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World');
});

serve.listen(3000,()=>{
    console.log(`Servidor em execução em http://localhost:3000/`)
})