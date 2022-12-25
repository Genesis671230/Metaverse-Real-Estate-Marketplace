import React, { useContext, useEffect, useState } from "react";
import Hero from "../client/components/Home/Hero";
import Deals from "../client/components/Home/Deals";
import Rooms from "../client/components/Home/Rooms";
import Services from "../client/components/Home/Services";
import Footer from "../client/components/kit/Footer";

import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "../firebase/firebase";

function Home() {
  const [fetchedData, setFetchedData] = useState([]);

  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "offers"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    const fetchTours = async () => {
      const satoshi = value.docs.map((doc) => doc.data());

      setFetchedData(satoshi);
    };
    fetchTours();
  }, [value]);
  return (
    <div>
      {fetchedData && (
        <>
          <Hero />
          <Rooms fetchedData={fetchedData} />
          <div className="md:mx-36 overflow-hidden">
            <Services />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
