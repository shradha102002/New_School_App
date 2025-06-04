// components/AdmissionsCriteria.tsx

export default function DwarkaSec2() {
  return (
    <section className="py-12 px-4 bg-white text-gray-800" id="admissions-criteria">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
          ADMISSIONS CRITERIA DWARKA SEC 22_______
        </h2>
        <p className="mb-6">
          <strong>Admission Policy for Academic Session 2025-26</strong><br />
          School No. 1821276
        </p>

        {/* Table: No. of seats */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2 text-left">Total Seats</th>
                <th className="border px-3 py-2">100</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-3 py-2">EWS / Disadvantaged Group</td><td className="border px-3 py-2">25%</td></tr>
              <tr><td className="border px-3 py-2">Management Quota</td><td className="border px-3 py-2">20%</td></tr>
              <tr><td className="border px-3 py-2">Staff Quota</td><td className="border px-3 py-2">5%</td></tr>
            </tbody>
          </table>
        </div>

        {/* Admission Criteria Table */}
        <h3 className="text-lg font-semibold mb-2">Admission Criteria:</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">S.No.</th>
                <th className="border px-3 py-2">Criteria</th>
                <th className="border px-3 py-2">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-3 py-2">1</td><td className="border px-3 py-2">Neighborhood 0–10 KM</td><td className="border px-3 py-2">50</td></tr>
              <tr><td className="border px-3 py-2"></td><td className="border px-3 py-2">Neighborhood 10–15 KM</td><td className="border px-3 py-2">40</td></tr>
              <tr><td className="border px-3 py-2"></td><td className="border px-3 py-2">Neighborhood 15–20 KM</td><td className="border px-3 py-2">30</td></tr>
              <tr><td className="border px-3 py-2"></td><td className="border px-3 py-2">Above 20 KM</td><td className="border px-3 py-2">No Points</td></tr>
              <tr><td className="border px-3 py-2">2</td><td className="border px-3 py-2">Sibling</td><td className="border px-3 py-2">40</td></tr>
              <tr><td className="border px-3 py-2">3</td><td className="border px-3 py-2">Girl Child</td><td className="border px-3 py-2">10</td></tr>
              <tr><td className="border px-3 py-2"></td><td className="border px-3 py-2 font-bold">Total</td><td className="border px-3 py-2 font-bold">100</td></tr>
            </tbody>
          </table>
        </div>

        {/* Document List */}
        <h3 className="text-lg font-semibold mb-2">
          Documents to be attached at the time of submission of form:
        </h3>
        <ul className="list-disc pl-6 text-sm mb-6 space-y-2">
          <li>Recent passport size color photo of child and both parents</li>
          <li>Attested photocopy of Municipal Birth Certificate</li>
          <li>Address proof in the name of parents (electricity bill, Aadhar, etc.)</li>
          <li>Vaccination record</li>
          <li>ID proofs (PAN, Aadhar, Voter ID)</li>
          <li>Parent passport/visa if applicable</li>
          <li>Category certificates (SC/ST/OBC/EWS)</li>
          <li>Other documents as applicable</li>
        </ul>

        {/* Schedule Table */}
        <h3 className="text-lg font-semibold mb-2">
          Schedule for Admission for the Session 2025-26
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">S.No.</th>
                <th className="border px-3 py-2">Particulars</th>
                <th className="border px-3 py-2">Schedule</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-3 py-2">1</td><td className="border px-3 py-2">Commencement of availability of forms</td><td className="border px-3 py-2">29.11.2024</td></tr>
              <tr><td className="border px-3 py-2">2</td><td className="border px-3 py-2">Last date for submission</td><td className="border px-3 py-2">15.12.2024</td></tr>
              <tr><td className="border px-3 py-2">3</td><td className="border px-3 py-2">Uploading student details</td><td className="border px-3 py-2">01.01.2025</td></tr>
              <tr><td className="border px-3 py-2">4</td><td className="border px-3 py-2">Uploading marks</td><td className="border px-3 py-2">13.01.2025</td></tr>
              <tr><td className="border px-3 py-2">5</td><td className="border px-3 py-2">Display of 1st list</td><td className="border px-3 py-2">17.01.2025</td></tr>
              <tr><td className="border px-3 py-2">6</td><td className="border px-3 py-2">Resolution of queries (1st list)</td><td className="border px-3 py-2">18.01.2025 - 24.01.2025</td></tr>
              <tr><td className="border px-3 py-2">7</td><td className="border px-3 py-2">2nd list display</td><td className="border px-3 py-2">31.01.2025</td></tr>
              <tr><td className="border px-3 py-2">8</td><td className="border px-3 py-2">Resolution of queries (2nd list)</td><td className="border px-3 py-2">03.02.2025 - 07.02.2025</td></tr>
              <tr><td className="border px-3 py-2">9</td><td className="border px-3 py-2">Subsequent list if any</td><td className="border px-3 py-2">21.02.2025</td></tr>
              <tr><td className="border px-3 py-2">10</td><td className="border px-3 py-2">Closure of admission process</td><td className="border px-3 py-2">14.03.2025</td></tr>
            </tbody>
          </table>
        </div>

        {/* Eligibility */}
        <h3 className="text-lg font-semibold mb-2">Eligibility Criteria</h3>
        <p className="text-sm">
          Less than 6 years as on 31st March of the year in which the admission is sought.
        </p>

        {/* Register Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-sm shadow">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
