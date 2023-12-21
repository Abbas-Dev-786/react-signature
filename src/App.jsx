import { useState } from "react";
import html2pdf from "html2pdf.js";
import Modal from "./components/Modal";
import { getHTML } from "./markup";
import Document from "./components/Document";
function App() {
  const [url, setUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleRemoveSignature = () => {
    setUrl("");
  };

  const generatePDF = () => {
    if (!url) return;

    setLoading(true);

    const opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "pc",
        format: "letter",
        orientation: "portrait",
        precision: 100,
      },
    };

    html2pdf().from(getHTML(url)).set(opt).save();

    setLoading(false);
  };

  return (
    <div className="wrapper">
      <div className="document">
        <Document url={url} />
      </div>
      <Modal setUrl={setUrl} />
      <div className="nav">
        <button
          className="btn btn-primary btn-sm me-3"
          disabled={isLoading || !url}
          onClick={generatePDF}
        >
          Download
        </button>{" "}
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveSignature}
        >
          Remove Signature
        </button>{" "}
      </div>
    </div>
  );
}

export default App;
