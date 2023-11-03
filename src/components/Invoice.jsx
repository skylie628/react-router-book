import { NavLink } from "react-router-dom";
import { invoiceData } from "../data/invoiceData";
import { Outlet } from "react-router-dom";
export default function Invoice() {
  return (
    <section className="flex">
      <section className="flex-1 p-3 border-r border-black">
        <ul className="flex flex-col gap-3">
          {invoiceData.map((x) => (
            <li key={x.number}>
              <NavLink to={`../invoice/${x.number}`}>{x.name}</NavLink>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex-[4] flex flex-col gap-3 p-3 ">
        <Outlet />
      </section>
    </section>
  );
}
