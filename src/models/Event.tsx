export interface EventInterface {
	id: string;
	image_url: string;
	name: string;
	description: string;
	city: {
		name: string;
		state: string;
	};
}