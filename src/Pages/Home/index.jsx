import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Home = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex flex-col items-center gap-3 mb-6">
        <h1 className="text-lg font-serif">
          {window.location.pathname === "/"
            ? "HOME"
            : window.location.pathname.substring(1).toLocaleUpperCase()}
        </h1>
        <input
          type="text"
          placeholder="Search Product"
          className="w-80 p-4 border border-black rounded-lg"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
          value={context.searchByTitle}
        />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
