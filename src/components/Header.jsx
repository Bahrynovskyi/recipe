/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Header = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [_, setSearchParams] = useSearchParams();
  const handleClick = () => {
    handleSearch(searchTerm);
    if (searchTerm) {
      setSearchParams({
        search: searchTerm,
      });
    }
    setSearchTerm("");
  };

  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Look for <span>Banger</span> Food
        </h1>
        <p className="header-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ea
          ullam, libero exercitationem dicta error fugit autem doloremque id
          laudantium.
        </p>
        <div className="header-input-container">
          <input
            type="text"
            placeholder="Find a recipe..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/closeup-shot-delicious-pasta-white-plate_181624-28817.jpg?w=1380&t=st=1712485447~exp=1712486047~hmac=96ffa3d74d4d59b3f006e3599bc50214fdb56255221f53d50902583dc9cb802f"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
};

export default Header;
