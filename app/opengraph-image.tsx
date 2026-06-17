import { ImageResponse } from "next/og";

export const alt =
  "Sadhana Eye Care — Dr. Dipti Shah, Ophthalmologist in Marine Lines, Mumbai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1b3f58 0%, #102230 100%)",
          color: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "#235980",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "999px",
                background: "#ffffff",
              }}
            />
          </div>
          <div style={{ fontSize: "34px", fontWeight: 600, letterSpacing: "-0.5px" }}>
            Sadhana Eye Care
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Your Vision is Our Mission
          </div>
          <div style={{ fontSize: "32px", color: "#b0cee3" }}>
            Dr. Dipti Shah · Ophthalmologist · Marine Lines, Mumbai
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "48px",
            fontSize: "26px",
            color: "#7faecf",
          }}
        >
          <div style={{ display: "flex" }}>28+ years experience</div>
          <div style={{ display: "flex" }}>Rated 4.7 on Google</div>
          <div style={{ display: "flex" }}>98% recommended on Practo</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
