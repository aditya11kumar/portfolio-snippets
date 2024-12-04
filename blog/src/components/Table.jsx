import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import "./table.css";

export default function Table({ data }) {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="custom-accordion">
      <Accordion flush>
        {data.features.map((feature, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className="custom-accordion-item"
          >
            <Accordion.Header className="custom-accordion-header">
              {feature.title}
            </Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
              <p>{feature.description}</p>
              <div style={{ position: "relative" }}>
                <pre>
                  <code>{feature.example}</code>
                </pre>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => copyToClipboard(feature.example)}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-copy"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                    />
                  </svg>
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
