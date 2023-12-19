import { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignPad = ({ setUrl }) => {
  const [sign, setSign] = useState();

  const handleClear = () => {
    sign.clear();
    setUrl("");
  };

  const handleGenerate = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
  };

  return (
    <>
      <div>
        <div style={{ border: "2px solid black", background: "#f6ede8" }}>
          <SignatureCanvas
            canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
            ref={(data) => setSign(data)}
          />
        </div>

        <button
          type="button"
          className="btn btn-danger my-3"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleGenerate}
        >
          Save changes
        </button>
      </div>
    </>
  );
};

export default SignPad;
