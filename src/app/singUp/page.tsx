import Link from "next/link";

export default function SingUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl shadow-lg transition-all duration-200 transform hover:shadow-xl">
              <div className="bg-gray-800 p-6 rounded-b-lg transition-all duration-200 transform hover:scale-95 hover:rounded-lg">
                <form className="space-y-4">
                  <p className="text-center text-white text-xl font-semibold mb-6">
                    Register
                  </p>
                  <div className="flex items-center bg-gray-800 rounded-full p-3 shadow-inner">
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-5 w-5 text-white"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4-3a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 10a5.506 5.506 0 0 0-4.687 2.484 7.499 7.499 0 0 0 9.374 0A5.506 5.506 0 0 0 8 10zm3.516 3.635a6.5 6.5 0 0 1-7.032 0 4.506 4.506 0 0 1 7.032 0z" />
                    </svg>
                    <input
                      type="text"
                      className="bg-transparent border-none outline-none w-full text-gray-300 ml-3"
                      placeholder="Name"
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex items-center bg-gray-800 rounded-full p-3 shadow-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-at"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914" />
                    </svg>

                    <input
                      type="email"
                      className="bg-transparent border-none outline-none w-full text-gray-300 ml-3"
                      placeholder="Email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex items-center bg-gray-800 rounded-full p-3 shadow-inner">
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-5 w-5 text-white"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                    </svg>
                    <input
                      type="password"
                      className="bg-transparent border-none outline-none w-full text-gray-300 ml-3"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex items-center bg-gray-800 rounded-full p-3 shadow-inner">
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-5 w-5 text-white"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                    </svg>
                    <input
                      type="password"
                      className="bg-transparent border-none outline-none w-full text-gray-300 ml-3"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="flex justify-center mt-6 space-x-3">
                    <button className="bg-gray-700 hover:bg-black text-white font-semibold py-2 px-4 rounded transition duration-200">
                      Register
                    </button>
                    <Link href="/" legacyBehavior>
                    <button className="bg-gray-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                      Cancel
                    </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
