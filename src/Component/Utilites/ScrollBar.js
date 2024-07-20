
import { useEffect, useState } from "react";

const Info = [
  {
    title: "Secondhand Book Bazaar",
    content:
      "Buy and Sell Your Books with Ease, Your Ultimate Book Marketplace!",

    cssP: "text-6xl font-bold mdx:text-4xl",
    cssDiv:
      "m-2 h-80 bg-gradient-to-r from-green-950 to-violet-100 text-center flex justify-center text-yellow-300 font-serif m-1 p-1 ",
    css1Div: "w-6/12 h-80 bg-back bg-no-repeat bg-half mdx:hidden mdy:bg-mhalf",
  },
  {
    title: "Knowledge is Power;",
    content: " Books are the Source.",

    cssP: "text-4xl ",
    cssDiv:
      "m-2  h-80 bg-gradient-to-r from-lime-900 to-white text-center flex justify-center text-yellow-300 font-serif m-1 p-1 ",
    css1Div:
      "bg-back5 bg-no-repeat bg-half w-6/12 flex justify-end  items-end mdx:hidden mdy:bg-mhalf",
    Span: "w-3/4 h-24 bg-back2 bg-half1 bg-no-repeat",
    btn: "Buy Now",
    btncss:
      "bg-green-500 p-2 m-2 rounded-full h-24 w-60  mdx:h-16 text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300",
  },
  {
    title: "No one has ever become poor by Giving",
    content: "Donation",

    cssP: "text-4xl",
    cssDiv:
      "m-2  h-80 bg-gradient-to-r from-cyan-700 to-orange-50 text-center flex justify-center text-yellow-300 font-serif m-1 p-1 ",
    css1Div:
      "bg-back4 bg-no-repeat bg-half2 w-6/12 flex justify-end  items-end mdx:hidden mdy:bg-mhalf",
    btn: "Donate Now",
    Span: "",
    btncss:
      "bg-green-500 p-2 m-2 rounded-full h-24 w-60 mdx:h-16 text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300",
  },
  {
    title: "Books choose their readers.",
    content: "Sell Now",

    cssP: "text-4xl",
    cssDiv:
      "m-2 h-80 bg-gradient-to-r from-green-800 to-yellow-200 text-center flex justify-center text-yellow-300 font-serif m-1 p-1 ",
    Span: "",
    css1Div:
      "bg-back3 bg-no-repeat bg-half2 w-6/12 flex justify-end  items-end mdx:hidden mdy:bg-mhalf",
    btn: "Sell Now",
    btncss:
      "bg-green-500 p-2 m-2 rounded-full h-24 w-60 text-4xl  mdx:h-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300",
  },
];

const ScrollBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Info.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    
      {Info[currentIndex].title && (
        <div className={Info[currentIndex].cssDiv}>
       
          <div className="m-1 h-80 w-6/12 flex flex-col justify-center items-center">
          
            <p className={Info[currentIndex].cssP}>
              {Info[currentIndex].title}
            </p>
            <p className="text-3xl mdx:text-2xl">
              {Info[currentIndex].content}
            </p>
            
            {Info[currentIndex].btn && (
              <button className={Info[currentIndex].btncss}>
                {Info[currentIndex].btn}
              </button>
            )}
           
          </div>
          
          <div className={Info[currentIndex].css1Div}></div>
        </div>
      )}
      
    </>
  );
};

export default ScrollBar;
