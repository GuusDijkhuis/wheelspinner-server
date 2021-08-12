import express from 'express';

const router = express.Router();

import { 
	getAllWheelSpinners, 
	postWheelSpinner,
	getSingleWheelSpinner
} from '../controller/wheelSpinner.js';

router.post('/', postWheelSpinner);
router.get('/', getAllWheelSpinners);
router.get('/:id', getSingleWheelSpinner);

export default router;