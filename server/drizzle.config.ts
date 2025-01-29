import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema:"./drizzle/schema.ts",
  dbCredentials: {
    url: "mysql://root:1234@localhost:3306/employees",
  },
});
