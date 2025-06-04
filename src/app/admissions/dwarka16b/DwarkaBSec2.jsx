// pages/admissions.js
import Head from 'next/head';

export default function Admissions() {
  return (
    <>
      <Head>
        <title>Admissions Criteria Dwarka Sec 16B</title>
      </Head>

      <section className="py-12 px-4 bg-white text-gray-800" id="admissions-criteria">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-6 pb-2">
            ADMISSIONS CRITERIA DWARKA SEC 16B__________
          </h1>

          <section className="space-y-6 text-sm sm:text-base">
            <div>
              <p><strong>Admission Policy for Academic Session 2025-26</strong></p>
              <p>School Id No. 1821236</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">1. Total No. of seats declared: 72 (Pre-School Class)</h2>
              <h3 className="font-semibold text-md mb-1">2. Details of seats:</h3>
              <table className="w-full table-auto border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border">CATEGORY</th>
                    <th className="p-2 border">%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border">TOTAL SEATS</td><td className="p-2 border">72</td></tr>
                  <tr><td className="p-2 border">EWS / DISADVANTAGED GROUP</td><td className="p-2 border">25%</td></tr>
                  <tr><td className="p-2 border">MANAGEMENT QUOTA</td><td className="p-2 border">20%</td></tr>
                  <tr><td className="p-2 border">STAFF QUOTA</td><td className="p-2 border">5%</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold text-md mb-1">3. Admission Criteria:</h3>
              <table className="w-full table-auto border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border">S.No.</th>
                    <th className="p-2 border">Criteria</th>
                    <th className="p-2 border">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border">1</td><td className="p-2 border">Neighborhood</td><td className="p-2 border">50</td></tr>
                  <tr><td className="p-2 border"></td><td className="p-2 border">0 - 10 KM</td><td className="p-2 border">50</td></tr>
                  <tr><td className="p-2 border"></td><td className="p-2 border">10 KM - 15 KM</td><td className="p-2 border">40</td></tr>
                  <tr><td className="p-2 border"></td><td className="p-2 border">Above 15 KM</td><td className="p-2 border">No points</td></tr>
                  <tr><td className="p-2 border">2</td><td className="p-2 border">Sibling</td><td className="p-2 border">40</td></tr>
                  <tr><td className="p-2 border">3</td><td className="p-2 border">Girl child</td><td className="p-2 border">10</td></tr>
                  <tr><td className="p-2 border" colSpan={2}><strong>Total</strong></td><td className="p-2 border"><strong>100</strong></td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold text-md mb-1">4. Documents to be attached at the time of submission of forms:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Recent passport color photograph of child, father & mother.</li>
                <li>Attested photocopy of Municipal Birth Certificate.</li>
                <li>Proof of residence (any one of the listed documents).</li>
                <li>Medical fitness certificate of the child.</li>
                <li>Immunization chart.</li>
                <li>Aadhar Card (if available).</li>
                <li>Copy of valid Passport if any.</li>
                <li>Proof for sibling / staff if applicable.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-md mb-1">SCHEDULE FOR ADMISSION FOR THE SESSION 2025-26</h3>
              <table className="w-full table-auto border border-gray-300 text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border">S.No.</th>
                    <th className="p-2 border">Particulars</th>
                    <th className="p-2 border">Schedule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border">1</td><td className="p-2 border">Commencement of availability of application form for admission</td><td className="p-2 border">21.11.2024 (Thursday)</td></tr>
                  <tr><td className="p-2 border">2</td><td className="p-2 border">Last date of submission of application forms</td><td className="p-2 border">15.12.2024 (Friday)</td></tr>
                  <tr><td className="p-2 border">3</td><td className="p-2 border">Uploading details of children who applied to the school for admission under Open Seats.</td><td className="p-2 border">03.01.2025 (Friday)</td></tr>
                  <tr><td className="p-2 border">4</td><td className="p-2 border">Uploading marks (as per point system) given to each of the children who applied for admission under Open Seats.</td><td className="p-2 border">10.01.2025 (Friday)</td></tr>
                  <tr><td className="p-2 border">5</td><td className="p-2 border">First list of selected candidates</td><td className="p-2 border">17.01.2025 (Friday)</td></tr>
                  <tr><td className="p-2 border">6</td><td className="p-2 border">Resolution of queries of parents regarding allotment of points to their wards in the first list</td><td className="p-2 border">18.01.2025 to 27.01.2025</td></tr>
                  <tr><td className="p-2 border">7</td><td className="p-2 border">Second list of candidates (if any) (including Waiting List)</td><td className="p-2 border">03.02.2025 (Monday)</td></tr>
                  <tr><td className="p-2 border">8</td><td className="p-2 border">Resolution of queries of parents regarding allotment of points to their wards in the second list</td><td className="p-2 border">04.02.2025 to 11.02.2025</td></tr>
                  <tr><td className="p-2 border">9</td><td className="p-2 border">Subsequent list of admission, if any</td><td className="p-2 border">20.02.2025 (Wednesday)</td></tr>
                  <tr><td className="p-2 border">10</td><td className="p-2 border">Closure of Admission process</td><td className="p-2 border">14.03.2025 (Friday)</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <p><strong>Eligibility Criteria:</strong><br />
                As per the Directorate of Education norms:<br />
                Less than 04 years as on 31st March of the year in which the admission is sought.
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md shadow-md transition-all">
                Register Now
              </button>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}
