import React from "react";
import { Users, Utensils, Heart } from "lucide-react";

function About() {
  const team = [
    {
      name: "Rohit Sharma",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ananya Verma",
      role: "Head of Operations",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Arjun Patel",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      name: "Sneha Iyer",
      role: "Customer Success Manager",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Welcome to <b>ZaikaBox</b> – your trusted food delivery partner!  
          We connect hungry food lovers with their favorite restaurants,
          delivering happiness one bite at a time.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 bg-orange-50 rounded-xl shadow hover:shadow-md transition">
            <Utensils className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Delicious Food</h3>
            <p className="text-gray-600 text-center mt-2">
              From local favorites to global cuisines, we deliver the best meals
              fresh & hot.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-orange-50 rounded-xl shadow hover:shadow-md transition">
            <Users className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Trusted by Many</h3>
            <p className="text-gray-600 text-center mt-2">
              Thousands of happy customers order with us daily, making mealtime easier.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-orange-50 rounded-xl shadow hover:shadow-md transition">
            <Heart className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Made with Love</h3>
            <p className="text-gray-600 text-center mt-2">
              Every order is handled with care, because food is more than a meal – it’s love ❤️.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At <b>ZaikaBox</b>, our mission is simple – to make food ordering
            seamless, fast, and enjoyable. We believe good food brings people
            together, and we’re here to deliver happiness to your doorstep. 🚀
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Meet Our Team 👨‍👩‍👧‍👦
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, id) => (
              <div
                key={id}
                className="bg-orange-50 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
              >
                <img
                  src={member.img}  
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-orange-200"
                />
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
