const Document = ({ url }) => {
  return (
    <div className="letter-container">
      <div className="letterhead">
        <img src="./vite.svg" alt="Company Logo" />
        <h4>Company Name</h4>
        <p>123 Main Street, Cityville, State, 12345</p>
        <p>Email: info@company.com | Phone: (555) 555-5555</p>
      </div>

      <div className="letter-content">
        <h2>Letter of Purchase</h2>
        <p>Date: January 1, 2023</p>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>

        <p>Total amount: $XXXXX</p>

        <p>
          Payment will be made according to the agreed-upon terms. We appreciate
          your prompt attention to this matter.
        </p>

        <p>Thank you for your continued partnership.</p>

        <div className="signature">
          <p>Sincerely,</p>
          <p>John Doe</p>
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
    </div>
  );
};

export default Document;
