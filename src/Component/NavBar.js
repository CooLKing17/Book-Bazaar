
const NavBar = () => {
  return (
    
      <div className="bg-slate-800 smm:text-sm   flex  justify-center m-2 px-2">
        <div className="py-3">
          <img
            alt="Logo"
            className="w-20 smm:w-16 "
            src="https://png.pngtree.com/png-vector/20221030/ourmid/pngtree-book-logo-template-vector-illustration-studying-sign-page-vector-png-image_39898376.png"
          />
        </div>
        <div className="flex flex-wrap smm:text-red-400 px-3 py-6">
            <input type="text" className="rounded-s-full"/>
          <button className="text-white bg-blue-600 rounded-e-full text-2xl font-serif font-bold">Search</button>
        </div>
        <div className="space-x-6 space-y-2 py-6 smm:text-red-400  text-2xl font-serif px-3  ">
          <a href="/" class="text-white hover:underline">
            About us
          </a>
          <a href="/" className="text-white hover:underline ">
            Contact us
          </a>
          <a href="/" className="text-white hover:underline">
            Login
          </a>
          <a href="/" className="text-white hover:underline">
            Cart
          </a>
        </div>
      </div>
    
  );
};

export default NavBar;
