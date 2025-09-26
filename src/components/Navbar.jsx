const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 ">
        <div className="flex justify-between h-16 items-center">

          <div className="flex-shrink-0">
            <h1 className="font-bold text-lg">CS — Ticket System</h1>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-black hover:bg-purple-500 hover:text-white rounded p-1">
              Home
            </a>
            <a href="#" className="text-black hover:bg-purple-500 hover:text-white rounded p-1">
              FAQ
            </a>
            <a href="#" className="text-black hover:bg-purple-500 hover:text-white rounded p-1">
              Changelog
            </a>
            <a href="#" className="text-black hover:bg-purple-500 hover:text-white rounded p-1">
              Blog
            </a>
            <a href="#" className="text-black hover:bg-purple-500 hover:text-white rounded p-1">
              Download
            </a>
            <a href="#" className="text-black hover:bg-purple-500 hover:text-white rounded p-1">
              Contact
            </a>
             <button className="bg-gradient-to-br from-purple-800/90 to-violet-400/90 text-white px-4 py-2 font-semibold rounded">
              + New Ticket
            </button>
          </div>


          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
