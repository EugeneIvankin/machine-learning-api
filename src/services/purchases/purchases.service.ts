import { Injectable } from '@nestjs/common';
import brain = require('brain.js');

@Injectable()
export class PurchasesService {

	buyProduct(): any {
		// const trainingData = [
		// 	'Jane saw Doug.',
		// 	'Doug saw Jane.',
		// 	'Spot saw Doug and Jane looking at each other.',
		// 	'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.',
		// ] as brain.RNNTrainingValue[];
		//
		// const lstm = new brain.recurrent.LSTM();
		// const result = lstm.train(trainingData, {
		// 	iterations: 1500,
		// 	errorThresh: 0.011,
		// });
		// const run1 = lstm.run('Jane');
		// const run2 = lstm.run('Doug');
		// const run3 = lstm.run('Spot');
		// const run4 = lstm.run('It');
		//
		// return run1;

		// Возможно скоро понадобятся
		// получить сколько раз были куплины различные товары за последние 30 покупок
		// найти большие вероятности

		// Рекомендуемые товары
		// получить рецепты
		// inputs: ингридиенты
		// output: блюда
		// предлагать товары в зависимоти от возможного блюда

		// Можно приготовить
		// получить рецепты
		// inputs: ингридиенты
		// output: блюда

		// Любимые блюда
		// предлагать новые блюда исходя из ингридиентов любимых блюд

		// получить все покупки в которых есть определеный товар
		// найти среди этих покупок товары с большей вероятностью

		const colors = [
			{ milk: 0.3, eggs: 3, sugar: 0.05 },
			{ milk: 0.5, eggs: 6, sugar: 0.2, flour: 0.3 },
			{ milk: 0.15, cereal: 0.2, sugar: 0.01 },
			{ meat: 2 },
			{ meat: 1, eggs: 2, flour: 0.2},
		];

		const brightnesses = [
			{ casserole: 1 },
			{ pancakes: 1 },
			{ cerealWithMilk: 1 },
			{ barbecue: 1 },
			{ chops: 1 },
		];

		const trainingData = [];

		for (let i = 0; i < colors.length; i++) {
			trainingData.push({
				input: colors[i],
				output: brightnesses[i],
			});
		}

		const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

		net.train(trainingData);

		return net.run({
			meat: 4, eggs: 10, flour: 1,
		});
	}
}
