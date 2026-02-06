"use client";

import { useState, useEffect } from "react";

export default function TestApiPage() {
  const [liste, setListe] = useState<string>("");
  const [un, setUn] = useState<string>("");

  useEffect(() => {
    fetch("/api/vehicles")
      .then((r) => r.json())
      .then((json) => setListe(JSON.stringify(json)));
    fetch("/api/vehicles/1")
      .then((r) => r.json())
      .then((json) => setUn(JSON.stringify(json)));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <p style={{ color: "#ffffff", fontWeight: "bold" }}>/api/vehicles</p>
      <pre style={{ background: "#eee", color: "#222", padding: 12, overflow: "auto", marginBottom: 24 }}>{liste || "..."}</pre>
      <p style={{ color: "#ffffff", fontWeight: "bold" }}>/api/vehicles/1</p>
      <pre style={{ background: "#eee", color: "#222", padding: 12, overflow: "auto" }}>{un || "..."}</pre>
    </div>
  );
}
