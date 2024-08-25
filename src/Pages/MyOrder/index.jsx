import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  let context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <p>MyOrder</p>
      <div className="flex flex-col gap-3 w-80">
        {context.order.length != 0 ? (
          context.order
            ?.slice(-1)[0]
            .itemList.map((item) => (
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
