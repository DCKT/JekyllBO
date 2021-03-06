/**
* Index Route
* - /
******************** */

import express from 'express';
import Controller from '../controllers/IndexController';

var router      = express.Router();

router.get('/', Controller.index);

export default router;