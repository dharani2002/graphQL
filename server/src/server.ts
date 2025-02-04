import app from "./app";

async function startServer(){

    app.listen(8000,()=>{
        console.log("server running at http://localhost:8000")
    })
}

startServer();