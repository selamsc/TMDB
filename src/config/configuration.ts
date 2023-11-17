import { IConfiguration } from "./configuration.interface";

export default (): IConfiguration => ({
appEnv: process.env.APP_ENV || 'dev',
port: parseInt(process.env.PORT, 10) || 3000,
tmdbBaseUrl: process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3',
tmdbApiKey: process.env.TMDB_API_KEY || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDY2MWM5ZDYwOWU4ZWIwMGFiYWIyZmE5YzQ0NzU1NCIsInN1YiI6IjY1NTNjZDIxOTY1M2Y2MTNmODYzYjM1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PUSxTr98VKrHCAorgXmAO-H3erUhwlLozr4ENl9cidA',
mongoUri: process.env.MONGO_URI || 'mongodb+srv://abdulselamsc:rMflhUqGjSJhpVNF@cluster0.rphocqt.mongodb.net/eteration'
});
