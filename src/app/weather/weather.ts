export class Weather {
	constructor(
		public cityName: string,
		public country: string,
		public img: string,
		public temp: string,
		public description: string,
		public humidity: string,
		public pressure: string,
		public wspeed: string,
		public minTemp: string,
		public maxTemp: string,
		public cloud: string
	) {}
} 