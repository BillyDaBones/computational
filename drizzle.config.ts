import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { getDbUrl } from 'src/lib/utilities/constants';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
		url: getDbUrl() as string,
		ssl: process.env.NODE_ENV === "production" ? "require" : undefined
  },
  strict: true,
});
