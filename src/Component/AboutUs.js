import React, { useState, useEffect } from 'react';

const aboutInfo = [
  {
    title: "About Us",
    content: "Welcome to Book Bazaar, your ultimate destination for discovering, ordering, and enjoying the best second-hand books from around the world. Our mission is to connect you with a universe of pre-loved literary treasures, bringing the finest stories and freshest perspectives right to your doorstep.",
    css: "text-4xl font-bold mb-4",
    css1: "mb-6 text-lg font-bold"
  },
  {
    title: "Our Store",
    content: "Founded in 2023, Book Bazaar was born out of a passion for great literature and a desire to make reading a sustainable and enjoyable experience for everyone. Whether you're a bookworm exploring new genres, a busy professional seeking affordable reads, or a family planning a cozy reading night at home, we have something for everyone.",
    css: "text-2xl font-semibold mb-3",
    css1: "mb-6 text-lg"
  },
  {
    title: "Our Vision",
    content: "At Book Bazaar, we believe in the power of books to bring people together and create memorable experiences. We are committed to supporting the circular economy, promoting sustainable reading habits, and continuously enhancing our platform to better serve you.",
    css: "text-xl font-semibold mb-3",  
    css1: "mb-6 text-lg"     
  },
  {
    title: "Join Our Community",
    content: "Be part of a growing community of book lovers who trust Book Bazaar for their reading needs. Follow us on social media, share your literary adventures, and stay connected with the latest updates and trends in the second-hand book world.",
    css: "text-xl font-semibold mb-3",
    css1: "mb-6 text-lg"
  },
  {
    title: "Join Our Community", 
    content: "Thank you for choosing Book Bazaar. Your satisfaction is our top priority, and we are dedicated to making every book a delightful and enjoyable experience.",
    css: "text-xl font-semibold mb-3",  
    css1: "mb-6  text-lg"
  }
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutInfo.length);
    }, 3000); // Change item every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex">
      <div className="flex mdy:hidden">
        <img alt="img" src="https://img.freepik.com/premium-vector/confident-businessman-coach-wearing-glasses-looking-camera-talking_108231-755.jpg" />
      </div>
      <div className=" p-6 pt-24 mt-12 max-w-4xl mx-auto">
        <div className="text-center">
          {aboutInfo[currentIndex].title && <h1 className={aboutInfo[currentIndex].css}>{aboutInfo[currentIndex].title}</h1>}
          <p className={aboutInfo[currentIndex].css1}>{aboutInfo[currentIndex].content}</p>
        </div>
        <h2 className="text-2xl text-end font-semibold m-2 mb-2">Avinash Nalwade</h2>
        <h2 className="text-2xl text-end font-semibold m-2 ">Thank You Visit Again :)</h2>
      </div>
    </div>
  );
};

export default AboutUs;
