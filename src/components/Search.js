"use client";
import React, { useState } from "react";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export default function Search(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    <div>
      <div>
        <div>
          <input
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div>
          <button
            variant="contained"
            color="primary"
            onClick={() => {
              // Search
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <ul component="nav" aria-label="main mailbox folders">
          {listPlace.map((item) => {
            return (
              <div key={item.place_id}>
                <li
                  button
                  onClick={() => {
                    setSelectPosition(item);
                  }}
                >
                  <p primary={item.display_name} />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}