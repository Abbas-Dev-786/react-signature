export const getHTML = (img) => {
  return `
    <div class="pdf">
        <div class="header">
          <h1>Service Agreement</h1>
        </div>

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

          <p>
            <strong>6. Governing Law:</strong>
          </p>
          <p>
            This Agreement shall be governed by and construed in accordance with
            the laws of [Jurisdiction].
          </p>
        </main>

        <div class="footer">
          <p>
            This Agreement constitutes the entire understanding between the
            parties and supersedes all prior agreements and understandings,
            whether oral or written.
          </p>
          <p>Executed on [Date].</p>
          <br />
          <img src=${img} alt="sign-img" />
          <p>Chairperson Sign</p>
        </div>
      </div>
    
    `;
};
