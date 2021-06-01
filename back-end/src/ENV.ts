export const ENV = {
	port: 3000,

	API_PREFIX: "/api/v1/",
	API_TITLE: "iShop",
	API_DESC: "iShop Api V1",
	API_VERSION: 1.0,
	API_DOCS_URL: "/api/v1/" + "docs",

	jwtSecret: "topSecret51",
	slatRound: 10,

	MAIL_HOST: "smtp.gmail.com",
	MAIL_PORT: 465,
	MAIL_SECURE: true,
	MAIL_USER: "searchsparrow@gmail.com",
	MAIL_PASSWORD: "ZKZ78S98VK@h1",
	MAIL_FROM: "PSL <JOBAYER@gmail.com>",
}
export const ormConfig = {
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "root",
	password: "root",
	database: "ishop",
	synchronize: true,
	logging: false,
	entities: [__dirname + "/app/@modules/**/**/*.entity{.ts,.js}"],
}
// "heroku-postbuild": "cd back-end && npm install && npm start"
