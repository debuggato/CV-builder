const SERVER_PORT: number = 5000;
const CLIENT_PORT: number = 3000;
const SERVER_URL: string = `http://localhost:${SERVER_PORT}`;
const CLIENT_URL: string = `http://localhost:${CLIENT_PORT}`;
const RENDER_PDF_URL: string = `${SERVER_URL}/render`;

interface ConfigModel {
  server_url: string;
  client_url: string;
  render_pdf_url: string;
  client_port: number;
  server_port: number;
}

const config: ConfigModel = {
  server_url: SERVER_URL,
  client_url: CLIENT_URL,
  render_pdf_url: RENDER_PDF_URL,
  client_port: CLIENT_PORT,
  server_port: SERVER_PORT,
};

export default config;