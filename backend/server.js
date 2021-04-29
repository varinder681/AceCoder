import express from 'express';
import path from 'path'
import dotenv from 'dotenv'
import {dbConnect} from './db/db.js';

import codeExecutionRoutes from './routes/codeExecutionRoutes/codeExecutionRoutes.js' 

dotenv.config();

dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/code',codeExecutionRoutes)


const __dirname = path.resolve();

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })

} else {
    app.get('/',(req,res)=>{
        res.status(200).json({msg:"app is running at port 5000"});
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running at port 5000')
})