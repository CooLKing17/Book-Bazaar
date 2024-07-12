

const ContactUs = () => {
    return (
      <div key={"1"} className="p-6 pt-16 mt-12  max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us...</h1>
        <p className="mb-6 text-lg">
          Have questions, suggestions, or feedback? We'd love to hear from you!
          Get in touch with us using the information below:
        </p>
        <div key={"2"} className="space-y-4 mb-6">
          <input 
            key={"1"} 
            placeholder="Name" 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input 
            key={"2"} 
            placeholder="Email" 
            type="email" 
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input 
            key={"3"} 
            placeholder="Phone" 
            type="number" 
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input 
            key={"4"} 
            placeholder="Feedback" 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
        <p className="text-lg">
          Thank you for contacting us. We appreciate your interest and look forward to assisting you!
        </p>
      </div>
    );
  };
  
  export default ContactUs;
