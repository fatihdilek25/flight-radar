import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
  console.log();
  return (
    <header>
      <div>
        <div className="logo">
          <img src="/logo-f.png" alt="" />
          <h3>
            Uçuş <br /> Radarı
          </h3>
        </div>
      </div>
      <h4>
        {store.isLoading
          ? "Belirtilen alandaki uçuş sayısı hesaplanıyor"
          : `${store.flights.length} uçuş bulundu`}
      </h4>
    </header>
  );
};

export default Header;
