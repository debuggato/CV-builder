
const isDev = process.env.NODE_ENV === 'development';
const CLIENT_PORT = 8080;
const SERVER_PORT = 5000;
const SERVER_URL = isDev ? `http://localhost:${SERVER_PORT}` : 'https://cv-builder-three.vercel.app';
const CLIENT_URL = isDev ? `http://localhost:${CLIENT_PORT}` : 'https://cv-builder-three.vercel.app';
const RENDER_ENDPOINT = '/api/render';
const RENDER_URL = `${SERVER_URL + RENDER_ENDPOINT}`;

interface ConfigModel {
	server_url: string;
	client_url: string;
	render_url: string;
	render_endpoint: string;
	client_port: number;
}

const config: ConfigModel = {
	server_url: SERVER_URL,
	client_url: CLIENT_URL,
	render_url: RENDER_URL,
	render_endpoint: RENDER_ENDPOINT,
	client_port: CLIENT_PORT
};

export default config;