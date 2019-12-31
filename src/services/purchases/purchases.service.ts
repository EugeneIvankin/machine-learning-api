import { Injectable } from '@nestjs/common';
import brain = require('brain.js');

@Injectable()
export class PurchasesService {

	buyProduct(): any {
		const trainingData = [
			'Jane saw Doug.',
			'Doug saw Jane.',
			'Spot saw Doug and Jane looking at each other.',
			'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
		] as brain.RNNTrainingValue[];

		const lstm = new brain.recurrent.LSTM();
		const result = lstm.train(trainingData, {
			iterations: 1500,
			errorThresh: 0.011,
		});
		const run1 = lstm.run('Jane');
		const run2 = lstm.run('Doug');
		const run3 = lstm.run('Spot');
		const run4 = lstm.run('It');

		return run1;
	}
}
