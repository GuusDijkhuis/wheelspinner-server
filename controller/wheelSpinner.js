import WheelSpinner from '../models/wheelSpinner.js';

export const getAllWheelSpinners = async (req, res) => {
	try {
		const wheelSpinnerData = await WheelSpinner.find();
		res.status(200).json(wheelSpinnerData);
	} catch(err) {
		console.log(err)
	}
}

export const postWheelSpinner = async (req, res) => {
	const wheelSpinnerData = {
		title: req.body.title,
		choices: req.body.choices
	}
	const newWheelSpinner = new WheelSpinner(wheelSpinnerData);
	try {
		await newWheelSpinner.save();
	} catch(err) {
		console.log(err);
	}
}

export const getSingleWheelSpinner = async (req, res) => {
	try {
		const wheelSpinnerData = await WheelSpinner.find({ _id: req.params.id});
		res.status(200).json(wheelSpinnerData);
	} catch(err) {

	}
}