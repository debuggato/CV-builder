const SERVER_PORT = 5000;
const CLIENT_PORT = 3000;
const SERVER_URL = 'https://cv-builder.stormkit.dev';
const CLIENT_URL = 'https://cv-builder.stormkit.dev';
const RENDER_ENDPOINT = '/render';
const UPLOAD_ENDPOINT = '/upload';
const RENDER_URL = `${SERVER_URL + RENDER_ENDPOINT}`;
const UPLOAD_URL = `${SERVER_URL + UPLOAD_ENDPOINT}`;

interface ConfigModel {
	server_url: string;
	client_url: string;
	render_url: string;
	upload_url: string;
	render_endpoint: string;
	upload_endpoint: string;
	client_port: number;
	server_port: number;
}

const config: ConfigModel = {
	server_url: SERVER_URL,
	client_url: CLIENT_URL,
	render_url: RENDER_URL,
	upload_url: UPLOAD_URL,
	render_endpoint: RENDER_ENDPOINT,
	upload_endpoint: UPLOAD_ENDPOINT,
	client_port: CLIENT_PORT,
	server_port: SERVER_PORT,
};

export default config;