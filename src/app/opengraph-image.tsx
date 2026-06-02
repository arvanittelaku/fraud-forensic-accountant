import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fraud Forensic Accountant UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#1A1A2E",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#4A00E0",
            marginBottom: 16,
          }}
        >
          FraudForensicAccountant.com
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
          Fraud Forensic Accountant UK
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "rgba(255,255,255,0.85)" }}>
          Civil and criminal fraud investigations | POCA | UWOs | DPAs
        </div>
      </div>
    ),
    { ...size }
  );
}
