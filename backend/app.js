import express from "express";
import * as Sentry from "@sentry/node"; // ✅ Correct import for ESM
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Initialize Sentry (E
Sentry.init({
  dsn: process.env.SENTRY_DSN || "https://5af50d933a6f143f4f379c2f1db7d96d@o4509034787045376.ingest.us.sentry.io/4509034836983808", // Must be a valid DSN
  tracesSampleRate: 1.0,
});

onsole.log("Sentry Handlers:", Sentry.Handlers); // Debugging log

// ✅ Check if `requestHandler` is available
if (!Sentry.Handlers || !Sentry.Handlers.requestHandler) {
  console.error("❌ Error: Sentry requestHandler is undefined!");
  process.exit(1); // Stop the server if this happens
}

// ✅ Apply Sentry Middleware
app.use(Sentry.Handlers.requestHandler());

export default app;
