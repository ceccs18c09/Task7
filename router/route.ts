import express from 'express'

import {Insert,Getall,DeleteEmploy,Getid, UpdateEmploy} from '../controller/user';

const router = express.Router();

router.post('/api/employee', Insert)

router.get('/api/employee', Getall);

router.delete('/api/employee/:id', DeleteEmploy);

router.get('/api/employee/:id', Getid);

router.put('/api/employee/:id',UpdateEmploy);

export {
    router
}



