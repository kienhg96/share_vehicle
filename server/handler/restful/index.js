const { Router } = require('express');
const router = Router();
const driver = require('./driver');
const customer = require('./customer');

router.post('/api/driver/login', driver.login);
router.post('/api/driver/signup', driver.signup);
router.get('/api/driver/info', driver.info);
router.get('/api/driver/logout', driver.logout);

router.post('/api/customer/login', customer.login);
router.post('/api/customer/signup', customer.signup);
router.get('/api/customer/info', customer.info);
router.get('/api/customer/logout', customer.logout);

module.exports = router;
