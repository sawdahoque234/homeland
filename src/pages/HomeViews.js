import { Link } from "react-router-dom";
import { BiBed, BiBath } from "react-icons/bi";
import useProperties from "./../hooks/useProperties";
const HomeViews = () => {
  const [properties] = useProperties();
  return (
    <div>
      <section class=" bg-gray-900 text-white">
        <hr className="bg-gray-800  mx-20" />
        <div class=" px-5 py-10 mx-auto">
          <h1
            className="py-8  mb-6  lg:text-[50px]  text-4xl font-bold font-mono text-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Our Summer Best Properties
          </h1>

          <div class="flex flex-wrap -m-4">
            {properties.slice(0, 4).map((property) => {
              const {
                name,
                _id,
                image,
                type,
                description,
                bedrooms,
                price,
                surface,
                bathrooms,
                country,
              } = property;
              return (
                <div class="p-4 md:w-1/2 lg:w-1/4">
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                    key={_id}
                  >
                    <img
                      class="lg:h-64 md:h-36 w-full object-cover object-center"
                      src={image}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest  title-font  text-white mb-1">
                        {type} | {country}
                      </h2>
                      <h1 class="title-font text-4xl font-medium text-white mb-3">
                        {name}
                      </h1>
                      <h1 class=" text-2xl font-medium text-white mb-3">
                        Price: ${price}
                      </h1>
                      <p class="leading-relaxed mb-3 text-left">
                        {description?.slice(0, 150)}
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <Link
                          to={`/orderpage/${_id}`}
                          class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          <button class="flex mx-auto text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Buy Now
                          </button>
                        </Link>
                        <span class="text-white   inline-flex pl-4 text-xl lg:ml-auto md:ml-0 ml-auto leading-none  py-1 ">
                          {bedrooms}{" "}
                          <span className="mx-2">
                            {" "}
                            <BiBed />
                          </span>
                          | {bathrooms}{" "}
                          <span className="mx-2">
                            {" "}
                            <BiBath />
                          </span>{" "}
                          | {surface}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link
              to="/properties"
              class="text-red-500 inline-flex items-center text-2xl py-5 md:mb-2 lg:mb-0"
            >
              See More
              <svg
                class="w-4 h-4 ml-2 text-2xl"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeViews;
