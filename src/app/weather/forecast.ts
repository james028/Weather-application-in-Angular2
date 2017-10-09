export class Forecast {
    constructor(
        public cnt: string,
        public day: string,
        public country: string,
        public icon: string,
        public cityName: string,
        public tempMax: string,
        public tempMin: string,
        public desc: string,
        public wind: string
    ) {}
}