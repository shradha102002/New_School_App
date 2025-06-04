import Image from "next/image";

export default function PrudenceLoginPage() {
  return (
    <div className="min-h-screen bg-[#005eb8] flex flex-col items-center justify-start">
      {/* Header Section with Logo */}
      <header className="w-full bg-white shadow-md py-2 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="Prudence School Logo"
            width={120}
            height={120}
          />
         
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
          For Online Payment Click here
        </button>
      </header>

     {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow w-full px-4 py-10 space-y-10 md:space-y-0 md:space-x-10">
        {/* Left Logo Image */}
       
      

        {/* Login Form */}
        <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
              <input
                type="text"
                id="userId"
                className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between text-sm text-blue-700">
              <a href="#" className="hover:underline">Forgot password?</a>
              <a href="#" className="hover:underline">Forgot UserID?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>© 2019-20 <span className="font-semibold text-blue-700">Sonet Microsystems Pvt. Ltd.</span> All Rights Reserved</p>
            <p className="text-blue-700 mt-1 font-semibold">Best School ERP Software</p>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <Image src="/gpay.jpg" alt="Google Play" width={100} height={30} />
            <Image src="/appstore.jpg" alt="App Store" width={100} height={30} />
          </div>
        </div>
      </main>
    </div>
  );
}
