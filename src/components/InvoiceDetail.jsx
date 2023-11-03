import { useParams } from "react-router-dom";
import { invoiceData } from "../data/invoiceData";
import getIsoDateFormat from "../utils/getIsoDateFormat";
export default function InvoiceDetail() {
  const { slug } = useParams();
  const queryInvoice = invoiceData.find((invoice) => invoice.number == +slug);
  if (!queryInvoice) {
    return <div> Not found!!!!</div>;
  }
  return (
    <>
      <p className="text-3xl decoration-4 ">
        <strong>Total Due: </strong>
        <data value={`${queryInvoice.amount.split("$")[1]}.00`}>
          {queryInvoice.amount}
        </data>
      </p>
      <p>
        {queryInvoice.name}: {queryInvoice.number}
      </p>
      <p>
        Due Date:{" "}
        <time dateTime={getIsoDateFormat(queryInvoice.due)}>
          {queryInvoice.due}
        </time>
      </p>
    </>
  );
}
