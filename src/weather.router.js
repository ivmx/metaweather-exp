const router = require('express').Router();
const got = require('got');
const { pipeline } = require('stream');
const controller = require('./weather.controller');

router.param('id', controller.getCity);

router.route('/:city').get(controller.getCity).post(controller.getCity);

module.exports = router;
