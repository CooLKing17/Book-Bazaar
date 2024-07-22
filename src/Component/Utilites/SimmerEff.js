const SimmerEff = () => {
    const Simmer = Array.from({ length: 10 }, (_, index) => (
      <div key={index} className="border border-blue-300 shadow p-3 max-w-sm w-60 m-2 rounded-xl">
        <div className="animate-pulse space-x-4">
          <div className="flex justify-center items-center mb-3">
            <div className="rounded-lg bg-slate-200 h-52 w-40"></div>
          </div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <button
                type="button"
                className="flex items-center bg-indigo-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                disabled
              >
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 12h4z"
                  ></path>
                </svg>
                Loading ...
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  
    return (
        <>
        {Simmer}
      </>
    );
  };
  
  export default SimmerEff;
  