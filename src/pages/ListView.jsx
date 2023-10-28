import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ListView = ({ openModal }) => {
  const store = useSelector((store) => store);

  const [itemOfset, setItemOfset] = useState(0);
  const itemPerPage = 10;
  const endOfset = itemOfset + itemPerPage;
  const currentItems = store.flights.slice(itemOfset, endOfset);
  const pageCount = Math.ceil(store.flights.length / itemPerPage);
  const handleClickPage = (e) => {
    const newOffset = (e.selected * itemPerPage) % store.flights.length;
    setItemOfset(newOffset);
  };
  return (
    <div className="list-page">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td onClick={() => openModal(flight.id)}>Detay</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="paginate"
        activeClassName="active"
        pageCount={pageCount}
        nextLabel="Sonraki Sayfa >"
        previousLabel="< Önceki Sayfa"
        onPageChange={handleClickPage}
      />
    </div>
  );
};

export default ListView;
