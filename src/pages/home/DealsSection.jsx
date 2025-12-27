import React from "react";
import dealImg from "../../assets/deals.png";

const DealsSection = () => {
  return (
    <section className="max-w-11/12 mx-auto pt-4 bg-red-100 rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={dealImg}
            alt="Deals"
            className="w-full max-w-sm lg:max-w-md object-contain"
          />
        </div>

        {/* Content */}
        <div className="max-w-xl mx-auto text-center lg:text-left p-4">
          <h5 className="mb-3 text-lg sm:text-xl font-semibold text-rose-600 uppercase">
            Get Up to 20% Discount
          </h5>

          <h4 className="mb-3 text-3xl sm:text-4xl font-extrabold">
            Deals of This Month
          </h4>

          <p className="mb-6 text-gray-900 text-sm sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            odit placeat sequi, recusandae in amet et delectus ducimus quia
            rerum possimus iure.
          </p>

          {/* Timer */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {[
              { value: "14", label: "Days" },
              { value: "20", label: "Hours" },
              { value: "50", label: "Mins" },
              { value: "10", label: "Secs" },
            ].map((item, index) => (
              <div
                key={index}
                className="h-16 w-16 sm:h-20 sm:w-20 grid place-content-center text-center bg-white rounded-full shadow-lg"
              >
                <h4 className="text-xl sm:text-2xl font-bold">{item.value}</h4>
                <p className="text-xs sm:text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
