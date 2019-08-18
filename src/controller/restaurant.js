import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default({ config, db}) => {
    const api = Router();

    // CRUD - Create Read Update Delete

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

    // '/v1/restaurant - Read'
    api.get('/', (req, res) => {
        Restaurant.find({

        }, (err, restaurants) => {
            if (err) {
                res.send(err)
            }
            res.json(restaurants)
        })
    })

    // '/v1/restaurant/:id - Read 2'
    api.get('/:id', (req, res) => {
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err)
            }
            res.json(restaurant)
        })
    })

    // '/v1/restaurant/:id - Update'
    api.put('/:id', (req, res) => {
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err);
            }
            restaurant.name = req.body.name;
            restaurant.save(err => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: "Restaurant info updated"});
            });
        });
    });

    api.delete('/:id', (req, res) => {
        Restaurant.remove({
            _id: req.params.id
        }, (err, restaurant) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Restaurant Successfully Removed!"}); 
        });

    })

    return api;
}