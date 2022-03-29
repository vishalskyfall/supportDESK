import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import { Link } from "react-router-dom";

function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    // tickets = 1
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        <div className="ticket">
          <div>{new Date(tickets.createdAt).toLocaleString("en-US")}</div>
          <div>{tickets.product}</div>
          <div className={`status status-${tickets.status}`}>
            {tickets.status}
          </div>
          <Link
            to={`/ticket/${tickets._id}`}
            className="btn btn-reverse btn-sm"
          >
            View
          </Link>
        </div>
      </div>
    </>
  );
}

export default Tickets;
