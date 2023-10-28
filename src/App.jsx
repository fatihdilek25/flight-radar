import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import SideDetail from "./components/SideDetail";
function App() {
  const [showMap, setShowMap] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  const openModal = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };

  return (
    <>
      <Header />
      <div className="select-button">
        <button
          className={showMap ? "active" : ""}
          onClick={() => setShowMap(true)}
        >
          Harita
        </button>
        <button
          className={!showMap ? "active" : ""}
          onClick={() => setShowMap(false)}
        >
          Uçuş listesi
        </button>
      </div>

      {showMap ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}
      {showDetail && (
        <SideDetail detailId={detailId} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
