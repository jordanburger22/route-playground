const express = require('express')
const Food = require('../models/food')
const foodRouter = express.Router()

// Get All
    // Get requests should return an empty array at first until you build the post request

    // Callback

    foodRouter.get('/', (req, res, next) => {
        Food.find((err, food) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(food)
        })
    })

    // Async & Await

    foodRouter.get('/async', async(req, res, next) => {
        try{
            const food = await Food.find()
            return res.status(200).send(food)
        } catch(err){
            res.status(500)
            return next(err)
        }
    })


// Post a food

    // Callback

    foodRouter.post('/addFood', (req, res, next) => {
        const newFood = new Food(req.body)
        newFood.save((err, savedFood) => {
            //insert your code
        })
    })

    // Async & Await

    foodRouter.post('/addFoodAsync', async(req, res, next) => {
        try{
            const newFood = new Food(req.body)
            const savedFood = await newFood.save()

            //insert your code
        } catch(err){
            // insert your code
        }
    })


// Delete a food

    // Callback
    foodRouter.delete('/:foodID', (req, res, next) => {
        //insert your code
    })



    // Async & Await

    foodRouter.delete('/async/:foodID', async(req, res, next) => {
        try{
            //insert your code
        } catch(err){
            //insert your code
        }
    })

// Edit a food

    // Callback

    // Build a put request using Callbacks here


    // Async & Await

    // Build a put request using Async and Await here

module.exports = foodRouter