"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function SentryInit() {
  useEffect(() => {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
      replaysOnErrorSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      integrations: [Sentry.replayIntegration()],
      debug: false,
    });
  }, []);

  return null;
}
