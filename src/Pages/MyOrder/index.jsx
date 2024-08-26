import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  let context = useContext(ShoppingCartContext);
  let linkIndex = window.location.pathname.split("/")[2];
  linkIndex === "last" ? (linkIndex = context.order.length - 1) : linkIndex;
  return (
    <Layout>
      <p>MyOrder</p>
      <div className="flex flex-col gap-3 w-80">
        {context.order.length != 0 ? (
          context.order?.[linkIndex].itemList.map((item) => (
            <OrderCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageURL={item.images}
              price={item.price}
            />
          ))
        ) : (
          <p>No hay ninguna orden</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
