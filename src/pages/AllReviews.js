import Loadingimg from "./Loadingimg";
import useReviews from "./../hooks/useReviews";

const AllReviews = () => {
  const [reviews] = useReviews();

  return (
    <div>
      <section class="bg-gray-900 text-white">
        <hr className="mx-24" />
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 className="py-4 text-4xl  mb-6 lg:text-[50px] font-bold font-mono text-center">
              Customers Review
            </h1>
            <p className="text-gray-500 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              harum vel asperiores quo nemo ipsum, ipsa cupiditate consequatur
              quaerat
            </p>
          </div>
          <div class="flex flex-wrap -m-4 ">
            {reviews.length === 0 ? (
              <Loadingimg />
            ) : (
              <>
                {reviews?.map((review) => {
                  const { name, message } = review;
                  return (
                    <div class="p-4 md:w-1/3 ">
                      <div
                        class="flex rounded-lg h-full bg-gray-800 p-8 flex-col border border-red-500"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                      >
                        <div class="flex items-center mb-3">
                          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="sm:w-16 sm:h-16 w-10 h-10"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <h2 class=" text-lg title-font font-medium text-yellow-500">
                            {name}
                          </h2>
                        </div>
                        <div class="flex-grow">
                          <p class="leading-relaxed text-base text-left">
                            {message}
                          </p>
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

export default AllReviews;
