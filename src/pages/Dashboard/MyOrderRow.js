import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MyOrderRow = ({ order, index }) => {
  const { _id, name, price } = order.order;
  const { user } = useAuth();

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user}</td>
      <td>{price}</td>
      {/* <td>{amount}</td> */}
      {/* <td>
        {paid ? (
          <div>
            <p className="text-success">Paid</p>
            <p className="text-success">Transaction Id: {transactionId}</p>
          </div>
        ) : (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-success btn-xs">Pay Now</button>
          </Link>
        )}
      </td> */}
      {/* <td>{status}</td> */}
      {/* <td>
        {!paid && (
          <label
            onClick={() => setOrder(order)}
            for="cancel-order"
            class="btn btn-xs"
          >
            Cancel
          </label>
        )}
      </td> */}
    </tr>
  );
};

export default MyOrderRow;
