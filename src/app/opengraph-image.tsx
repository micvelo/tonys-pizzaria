import { ImageResponse } from "next/og";
import { SITE_TAGLINE } from "@/lib/constants";

export const alt = "Tony's Pizzaria — Every Pizza is a Masterpizza!";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#171a1c",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(63,184,173,0.55) 0%, transparent 40%), radial-gradient(circle at 80% 10%, rgba(254,221,2,0.35) 0%, transparent 35%)",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: 8,
            color: "#3fb8ad",
            marginBottom: 24,
          }}
        >
          SURFER&apos;S POINT · VENTURA, CA · SINCE 1959
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#fedd02",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div style={{ fontSize: 34, color: "#fffaf0", marginTop: 32 }}>
          Tony&apos;s Pizzaria
        </div>
      </div>
    ),
    { ...size }
  );
}
