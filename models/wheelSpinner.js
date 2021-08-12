import mongoose from 'mongoose';

const wheelSpinnerSchema = new mongoose.Schema({
	title: String,
	choices: [{
		type: String
	}]
})

const WheelSpinner = mongoose.model('WheelSpinner', wheelSpinnerSchema);

export default WheelSpinner;
