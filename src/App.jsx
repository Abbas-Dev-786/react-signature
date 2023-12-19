import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { pdfFromReact } from "generate-pdf-from-react-html";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import Modal from "./components/Modal";
import { getHTML } from "./markup";
// import PDFViewer from "./components/PDFViewer";

function App() {
  const pdfRef = useRef();
  const [url, setUrl] = useState("");

  const [isLoading, setLoading] = useState(false);

  const handleRemoveSignature = () => {
    setUrl("");
  };

  const generatePDF = () => {
    if (!url) return;

    setLoading(true);

    // const pdfContainer = pdfRef.current;
    const opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: {
        unit: "in",
        format: "letter",
        orientation: "portrait",
        precision: 100,
      },
    };

    html2pdf().from(getHTML(url)).set(opt).save();
    // html2canvas(pdfContainer).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF();
    //   pdf.addImage(imgData, "JPEG", 0, 0);
    //   pdf.save(`contra.pdf`);
    // });

    setLoading(false);
  };

  return (
    <div className="wrapper">
      <div className="pdf" ref={pdfRef}>
        <header className="header">
          <h1>Service Agreement</h1>
        </header>

        <main>
          <p>This Agreement is entered into as of [Date], by and between:</p>

          <p>
            <strong>Party A:</strong> [Legal Name and Address]
          </p>
          <p>
            <strong>Party B:</strong> [Legal Name and Address]
          </p>

          <p>
            <strong>1. Purpose:</strong>
          </p>
          <p>
            The purpose of this Agreement is to outline the terms and conditions
            under which Party A agrees to provide services to Party B.
          </p>

          <p>
            <strong>2. Scope of Services:</strong>
          </p>
          <p>
            Party A agrees to provide the following services to Party B [details
            of services].
          </p>

          <p>
            <strong>3. Payment:</strong>
          </p>
          <p>
            Party B agrees to pay Party A the agreed-upon amount for the
            services as follows [payment terms].
          </p>

          <p>
            <strong>4. Term and Termination:</strong>
          </p>
          <p>
            This Agreement shall commence on [start date] and continue until
            [end date]. Either party may terminate this Agreement with written
            notice if the other party breaches any material term of this
            Agreement.
          </p>

          <p>
            <strong>5. Confidentiality:</strong>
          </p>
          <p>
            Both parties agree to keep confidential any proprietary or sensitive
            information obtained during the term of this Agreement.
          </p>
        </main>

        <div className="footer">
          <p>
            This Agreement constitutes the entire understanding between the
            parties and supersedes all prior agreements and understandings,
            whether oral or written.
          </p>
          {url && <img src={url} alt="sign-img" />}
          {!url && (
            <button
              className="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Signature
            </button>
          )}
        </div>
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
      {/* <button
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Signature
      </button>{" "}
      <Modal setUrl={setUrl} />
      {url && <img src={url} alt="sign-img" />} */}
    </div>
  );
}

export default App;
