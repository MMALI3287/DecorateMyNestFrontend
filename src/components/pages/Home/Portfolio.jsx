import Header from "../../templates/Header/Header";
import Footer from "../../templates/Footer/Footer";
import ApiCalls from "../../../apis/APICalls";
import { useEffect, useState } from "react";
const Portfolio = () => {
  const api = new ApiCalls();
  const [Catalog, setCatalog] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const catalog = await api.getCatalogs();
        const reversedCatalog = catalog.reverse();

        setCatalog(reversedCatalog);
        console.log(reversedCatalog);
      } catch (error) {
        console.error("Failed to fetch catalog:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div>
        <h1 className="text-7xl font-bold text-blur-950 mt-20 text-center  pb-10 mx-20">
          Catalog
        </h1>
        <div className="grid grid-cols-3 gap-4 mx-20 mb-10">
          {Catalog.map((catalog) => (
            <div
              key={catalog.CatalogId}
              className="rounded overflow-hidden shadow-lg p-6 bg-white transform transition duration-500 ease-in-out hover:scale-105"
            >
              <img
                className="w-full h-64 object-cover"
                src={`${catalog.MimeType},${catalog.Picture}`}
                alt={catalog.Name}
              />
              <div className="mt-4">
                <h1 className="text-xl font-bold">{catalog.Name}</h1>
                <p className="mt-2 text-gray-600">{catalog.Description}</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Price: ${catalog.EstimatedPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="grid grid-cols-3 mx-20 gap-20">
          <div className="mt-5">
            <img
              className="full"
              src="https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/stylish-compositon-modern-living-room-interior-with-frotte-armchair-sofa-plants-painting-wooden-commode-side-table-elegant-home-accessories-template-copy-spacexa-550x362.jpg"
              alt=""
            />
            <h1 className="text-2xl text-blue-950 font-semibold mt-3 pl-3">
              Modern Minimalism
            </h1>
            <p className="text-blue-400 mt-2 pl-3">High Line</p>
          </div>
          <div className="mt-5">
            <img
              className="full"
              src="https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-550x362.jpg"
              alt=""
            />
            <h1 className="text-2xl text-blue-950 font-semibold mt-3 pl-3">
              Rustic Revival
            </h1>
            <p className="text-blue-400 mt-2 pl-3">THE OAKS</p>
          </div>
          <div className="mt-5">
            <img
              className="full"
              src="https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/natural-mountain-rock-wall-modern-living-room-interior-3d-render-550x362.jpg"
              alt=""
            />
            <h1 className="text-2xl text-blue-950 font-semibold mt-3 pl-3">
              Rustic Revival
            </h1>
            <p className="text-blue-400 mt-2 pl-3">SUSTAINABLE LIVING</p>
          </div>
          <div className="mt-5">
            <img
              className="full"
              src="https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/stylish-living-room-interior-with-design-furnitre-elegant-accessories-3d-render-550x362.jpg"
              alt=""
            />
            <h1 className="text-2xl text-blue-950 font-semibold mt-3 pl-3">
              Bohemian Haven
            </h1>
            <p className="text-blue-400 mt-2 pl-3">MODERN HOUSE BUILDING.</p>
          </div>
          <div className="mt-5">
            <img
              className="full"
              src="https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-style-550x362.jpg"
              alt=""
            />
            <h1 className="text-2xl text-blue-950 font-semibold mt-3 pl-3">
              Art Deco Extravaganza
            </h1>
            <p className="text-blue-400 mt-2 pl-3">MARINA BAY SANDS</p>
          </div>
          <div className="mt-5">
            <img
              className="full"
              src="https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/interior-design-modern-apartment-with-cozy-furniture-wabisabi-style-3d-render-550x362.jpg"
              alt=""
            />
            <h1 className="text-2xl text-blue-950 font-semibold mt-3 pl-3">
              Tropical Paradise
            </h1>
            <p className="text-blue-400 mt-2 pl-3">MODERN FARMHOUSE</p>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
