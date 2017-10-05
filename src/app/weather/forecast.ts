export class Forecast {
    constructor(
        public cityName: string,
        public country: string,
        public icon: string,
        public day: string,
        public tempMax: string,
        public tempMin: string,
        public desc: string,
        public wind: string
    ) {}
}