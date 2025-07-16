import { initMongoDB } from './db/initMongoDB.ts';
import { setupServer } from './server.ts';

const bootstrap = async () => {
  await initMongoDB();
  setupServer();
};

bootstrap();
