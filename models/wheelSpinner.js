import mongoose from 'mongoose';

const wheelSpinnerSchema = new mongoose.Schema({
	title: String,
	choices: [{
		type: String
	}],
	color: String
})

const WheelSpinner = mongoose.model('WheelSpinner', wheelSpinnerSchema);

export default WheelSpinner;
