import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default({ config, db}) => {
    const api = Router();

    // '/v1/restaurant/add'
    api.post('/add', (req, res) => {
        const newRest = new Restaurant();
        newRest.name = req.body.name;

        newRest.save(err => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Restaurant saved sucessfuly'});
        }); 
    });

    return api;
}