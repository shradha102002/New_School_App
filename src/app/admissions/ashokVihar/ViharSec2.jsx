'use client';

const ViharSec2 = () => {
  return (
    <section className="py-12 px-4 bg-white text-gray-800" id="admissions-criteria">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-4xl">
      Admissions Criteria Ashok Vihar_________
      </h2>

        <p className="mb-6 font-medium">
          Admission Policy for Academic Session 2025-26 School Id No. 1411252
        </p>

        {/* 1. Division of Seats */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">1. Total No. of seats available: 120 (Pre-School Class)</h3>
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">TOTAL SEATS</th>
                <th className="p-2 border">EWS/DG/GOVT. GROUP</th>
                <th className="p-2 border">MANAGEMENT QUOTA</th>
                <th className="p-2 border">STAFF QUOTA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="p-2 border">120</td>
                <td className="p-2 border">25%</td>
                <td className="p-2 border">20%</td>
                <td className="p-2 border">5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. Admission Criteria */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">3. Admission Criteria:</h3>
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">S. No.</th>
                <th className="p-2 border">Criteria</th>
                <th className="p-2 border">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border">1</td><td className="p-2 border">Neighborhood (0–1 KM)</td><td className="p-2 border">60</td></tr>
              <tr><td className="p-2 border"></td><td className="p-2 border">1–3 KM</td><td className="p-2 border">50</td></tr>
              <tr><td className="p-2 border"></td><td className="p-2 border">3–6 KM</td><td className="p-2 border">40</td></tr>
              <tr><td className="p-2 border"></td><td className="p-2 border">Above 6 KM</td><td className="p-2 border">No points</td></tr>
              <tr><td className="p-2 border">2</td><td className="p-2 border">Sibling</td><td className="p-2 border">40</td></tr>
              <tr><td className="p-2 border">3</td><td className="p-2 border">Girl Child</td><td className="p-2 border">10</td></tr>
              <tr><td className="p-2 border font-bold"></td><td className="p-2 border font-bold">Total</td><td className="p-2 border font-bold">100</td></tr>
            </tbody>
          </table>
        </div>

        {/* 4. Document Info */}
        <div className="mb-10 text-sm md:text-base">
          <h3 className="text-xl font-semibold mb-2">4. Documents to be attached at the time of submission of form:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Recent passport size color photograph of the child, mother, and father</li>
            <li>Attested photocopy of Municipal Birth Certificate</li>
            <li>Attested photocopy of Aadhar Card (child + parents)</li>
            <li>Proof of residence (any one): Voter ID / Passport / Electricity Bill / MTNL Bill / Rent agreement / Aadhaar card</li>
            <li>Sibling proof (if applicable)</li>
            <li>Alumni proof (if applicable)</li>
            <li>Caste certificate (for EWS / SC / ST / OBC)</li>
          </ul>
        </div>

        {/* 5. Schedule */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">SCHEDULE FOR ADMISSION FOR THE SESSION 2025-26</h3>
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">S. No.</th>
                <th className="p-2 border">Particulars</th>
                <th className="p-2 border">Schedule</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border">1</td><td className="p-2 border">Availability of application forms</td><td className="p-2 border">23.11.2024 (Thursday)</td></tr>
              <tr><td className="p-2 border">2</td><td className="p-2 border">Last date of submission</td><td className="p-2 border">15.12.2024 (Friday)</td></tr>
              <tr><td className="p-2 border">3</td><td className="p-2 border">Uploading student details</td><td className="p-2 border">29.12.2024 (Friday)</td></tr>
              <tr><td className="p-2 border">4</td><td className="p-2 border">Uploading marks of admitted children</td><td className="p-2 border">05.01.2025 (Friday)</td></tr>
              <tr><td className="p-2 border">5</td><td className="p-2 border">First list with marks</td><td className="p-2 border">12.01.2025 (Friday)</td></tr>
              <tr><td className="p-2 border">6</td><td className="p-2 border">Resolution of queries (1st list)</td><td className="p-2 border">13–22 Jan 2025</td></tr>
              <tr><td className="p-2 border">7</td><td className="p-2 border">Second list with marks</td><td className="p-2 border">29.01.2025 (Monday)</td></tr>
              <tr><td className="p-2 border">8</td><td className="p-2 border">Resolution of queries (2nd list)</td><td className="p-2 border">30 Jan – 6 Feb 2025</td></tr>
              <tr><td className="p-2 border">9</td><td className="p-2 border">Subsequent list</td><td className="p-2 border">21.02.2025 (Wednesday)</td></tr>
              <tr><td className="p-2 border">10</td><td className="p-2 border">Admission closure</td><td className="p-2 border">14.03.2025 (Friday)</td></tr>
            </tbody>
          </table>
        </div>

        {/* Eligibility and Note */}
        <div className="text-sm text-gray-700">
          <p className="mb-2">
            Admission Forms will be available from 9:00 am to 12:00 pm. 
            Forms received after 02:00 pm on 23 December 2024 will not be accepted.
          </p>
          <p>
            * Criteria for EWS/DG category admission shall be as per RTE Act and Directions of Directorate of Education.
          </p>
          <p className="mt-4 font-medium">Eligibility Criteria:</p>
          <ul className="list-disc list-inside">
            <li>For Pre-School – Age: 3 years as on 31st March of the year in which admission is sought.</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow font-semibold transition">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ViharSec2;
