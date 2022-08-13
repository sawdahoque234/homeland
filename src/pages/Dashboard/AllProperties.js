import useProperties from "../../hooks/useProperties";

const AllProperties = () => {
  const [properties, setProperties] = useProperties();
  const handledelete = (property) => {
    const url = `http://localhost:5000/properties/${property}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Property Deleted successfully!!!");
          const remaining = properties.filter(
            (property) => property._id !== property
          );

          setProperties(remaining);
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <div class="overflow-x-auto">
        {properties.length ? (
          <table class="table table-zebra text-xl w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-lg">Type</th>
                <th className="text-lg ">Property Name</th>
                <th className="text-lg ">Price</th>
                <th className="text-lg ">Address</th>
                <th className="text-lg ">Bedroom</th>
                <th className="text-lg ">Bathroom</th>
                <th className="text-lg ">Surface</th>
                <th className="text-lg ">Build</th>
                <th className="text-lg ">Action</th>
              </tr>
            </thead>
            {properties.map((property, index) => (
              <>
                <tbody>
                  <tr>
                    <th>{index + 1}</th>
                    <td>{property.type}</td>
                    <td>{property.name}</td>
                    <td>{property.price}</td>
                    <td>{property.address}</td>
                    <td>{property.bedrooms}</td>
                    <td>{property.bathrooms}</td>
                    <td>{property.surface}</td>
                    <td>{property.year}</td>

                    <td>
                      <button
                        onClick={() => handledelete(property._id)}
                        className="inline-flex text-white bg-red-500 border-0 p-2  focus:outline-none hover:bg-indigo-600 rounded text-sm"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        ) : (
          <h1 className="text-4xl text-red-600 overflow-y-hidden">
            No Data found!!
          </h1>
        )}
      </div>
    </div>
  );
};

export default AllProperties;
