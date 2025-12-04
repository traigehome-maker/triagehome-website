import React from "react";

const WaitList = () => {
  return (
    <section className="bg-[#02385A] py-16">
      <div className="grid items-center text-center">
        <h3 className="text-2xl md:text-5xl text-[#D9D9D9] font-semibold">
          Secure Your Spot, Join the Waitlist Now
        </h3>
        <p className="text-white text-xl my-6">
          Get exclusive access and be the first to know when we launch
        </p>
        <div className="w-5/12 mx-auto flex flex-col md:flex-row items-center gap-2">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter email address"
            className="flex-1 text-center bg-white rounded-lg px-4 py-3"
          />
          <button
            type="button"
            className="text-xl font-medium px-4 py-3 text-white bg-[#AA7130] rounded-lg"
          >
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WaitList;
