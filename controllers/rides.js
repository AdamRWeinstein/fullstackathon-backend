const express = require('express')
const { Ride } = require('../models')

async function index(req, res, next) {
    try {
        res.json(await Ride.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};

async function create(req, res, next) {
    try {
        res.json(await Ride.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
};

async function show(req, res, next) {
    try {
        res.json(await Ride.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

async function destroy(req, res, next) {
    try {
        res.json(await Ride.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

async function update(req, res, next) {
    try {
        res.json(
            await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

// EXPORT controller actions
module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update
}