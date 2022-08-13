import { Link } from "react-router-dom";
import Loadingimg from "./Loadingimg";
import useProperties from "./../hooks/useProperties";

const Properties = () => {
  const [properties] = useProperties();

  return (
    <div>
      <section class="bg-gray-900 text-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {properties.length === 0 ? (
              <Loadingimg />
            ) : (
              <>
                {properties.map((property) => {
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
                    <div class="p-4 md:w-1/2 lg:w-1/3">
                      <div
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                        class="h-full border-2 border-red-400 bg-black border-opacity-60 rounded-lg overflow-hidden"
                        key={_id}
                      >
                        <img
                          class="lg:h-64 md:h-48 w-full object-cover object-center"
                          src={image}
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest  title-font  text-white mb-1">
                            {type} | {country}
                          </h2>
                          <h1 class="title-font text-3xl font-medium text-white mb-3">
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
                              class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Buy Now
                              </button>
                            </Link>
                            <span class="text-white mr-3  inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none  pr-3 py-1 ">
                              {bedrooms} bedrooms | {bathrooms} bathrooms |{" "}
                              {surface} sq ft
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
