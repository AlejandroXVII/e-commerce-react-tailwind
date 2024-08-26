import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  let context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <p>MyOrders</p>
      <div>
        {context.order?.map((ord, index) => (
          <OrdersCard
            amount={ord.numberItems}
            date={ord.date}
            totalPrice={ord.total}
            index={index}
            key={index}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrders;
