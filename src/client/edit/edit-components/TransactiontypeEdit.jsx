import React, { useContext, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BiCheck } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useParanoma } from "../../../hooks/useParanoma";
import { PanoramaContext } from "../../../states/panorama_context";

function TransactionTypeEdit() {
  const { datas, setDatas } = useContext(PanoramaContext);
  const editParanomaData = useSelector(
    (state) => state.ParanomaEdit.editParanomaData
  );
  const [transactionType, setTransactionType] = useState("");
  const [price, setPrice] = useState("");
  const [tva, setTva] = useState(false);

  const { editParanoma } = useParanoma();

  useEffect(() => {
    setDatas({
      ...datas,
      transactionType: transactionType,
      price: price,
      tva: tva,
    });
    editParanoma({ transactionType: transactionType, price: price, tva: tva });
  }, [transactionType, price, tva]);

  return (
    <div>
      <div className="h-12  grid  grid-cols-2  my-3">
        <div className="col-span-1">
          <span className="text-base font-medium text-temp-gray">
            TRANSACTION TYPE
          </span>
        </div>
        <div className="col-span-1">
          <span className="text-base font-medium text-temp-gray">PRICE</span>
        </div>
      </div>
      <div className="h-12 grid  grid-cols-2  my-3">
        <div className="flex flex-row gap-5 col-span-1">
          <a
            onClick={() => {
              setTransactionType("sale");
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              editParanomaData.transactionType != "sale"
                ? "bg-temp-gray2"
                : "bg-cyan-900"
            } justify-center text-white text-sm hover:bg-cyan-700 `}
          >
            Sale
          </a>
          <a
            onClick={() => {
              setTransactionType("hire");
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              editParanomaData.transactionType != "hire"
                ? "bg-temp-gray2"
                : "bg-cyan-900"
            } justify-center text-white text-sm hover:bg-cyan-700 `}
          >
            Hire
          </a>
          <a
            onClick={() => {
              setTransactionType("hotel");
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              editParanomaData.transactionType != "hotel"
                ? "bg-temp-gray2"
                : "bg-cyan-900"
            } justify-center text-white text-sm  hover:bg-cyan-700`}
          >
            Hotel Regime
          </a>
        </div>
        <div className="col-span-1 gap-5 w-96">
          <div className="flex flex-row items-center">
            <div className=" w-40 h-10 px-4 bg-[#eee]">
              <input
                type="number"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                defaultValue={editParanomaData.price}
                className="w-full bg-[#eee] h-full outline-none col-span-1"
                placeholder="122"
              />
            </div>
            <div className="ml-3 flex flex-row items-center">
              <a
                onClick={() => {
                  setTva(!tva);
                }}
                className="block w-4 h-4 cursor-pointer border border-temp-gray2"
              >
                {editParanomaData.tva && (
                  <span className="flex justify-center items-center ">
                    <IconContext.Provider value={{ color: "#164e63" }}>
                      <div>
                        <BiCheck />
                      </div>
                    </IconContext.Provider>
                  </span>
                )}
              </a>
              <span className="block text-temp-gray ml-2">+ TVA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionTypeEdit;
