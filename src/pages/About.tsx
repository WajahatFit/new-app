import React from "react";

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-full p-8 shadow-lg rounded-md">
        <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-gray-100 to-gray-400">
          About Us
        </h1>
        <p className="text-gray-300 mb-6">
          Welcome to [Your E-commerce Name], where your shopping experience is
          our top priority. At [Your E-commerce Name], we strive to provide a
          seamless and enjoyable online shopping platform for our customers.
          With a passion for quality products and exceptional service, we aim to
          redefine the way you shop online.
        </p>
        <p className="text-gray-700 mb-6">
          Our commitment to innovation and customer satisfaction sets us apart.
          We believe in the power of a great shopping experience, and our team
          works tirelessly to bring you the latest trends and timeless classics,
          all in one place. From fashion and electronics to home decor and more,
          [Your E-commerce Name] is your go-to destination for all your needs.
        </p>
        <p className="text-gray-700 mb-6">
          Join us on this exciting journey as we continue to enhance and expand
          our product offerings. Your feedback is invaluable to us, and we are
          dedicated to creating an online space that caters to your unique
          preferences. Thank you for choosing [Your E-commerce Name]. Happy
          shopping!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
