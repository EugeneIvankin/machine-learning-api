import { Nutrient } from './nutrient';

export interface Product {
	id: string;
	name: string;
	packing: string;
	country: string;
	weight: string;
	cost: string;
	nutritionalValue: Nutrient[];
	description: string;
	pop: string;
	image: string;
}
