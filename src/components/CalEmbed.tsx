"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalEmbed({ calLink }: { calLink: string }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#7C3AED" },
          light: { "cal-brand": "#7C3AED" },
        },
      });
    })();
  }, []);

  return (
    <Cal
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "auto" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
