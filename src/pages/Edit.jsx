import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit as EditIcon, Delete } from "@mui/icons-material";
import {
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import PanoramaPanillumEdit from "../client/edit/PanoramaPanillumEdit";
import { UserContext } from "../states/user_context";
import { app, database } from "../firebase/firebase";
import Layout from "../layout/Layout";
import { doc } from "firebase/firestore";

const Edit = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const filteredData = fetchedData.filter(
    (paranoma) => paranoma.owner === user.uid
  );

  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "offers"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const deleteDocFromFirebase = async (uid) => {
    const q = query(
      collection(getFirestore(app), "offers"),
      where("uid", "==", uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async(docSingle) => {
      const data = docSingle.data();
      // doc.data() is never undefined for query doc snapshots
      if (data.uid === uid)
      console.log(docSingle.id);
        try {
          await deleteDoc(doc(getFirestore(app),"offers",docSingle.id));
          alert("Paranoma Deleted successfully");
        } catch (error) {
          console.log(error);
        }
    });
  };

  useEffect(() => {
    const fetchTours = async () => {
      const satoshi = value.docs.map((doc) => doc.data());
      setFetchedData(satoshi);
    };

    fetchTours();
  }, [value]);

  useEffect(() => {
    if (user == undefined || user == null) {
      navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <div>
        {fetchedData && (
          <div className="flex ">
            {filteredData.map((item, index) => {
              console.log(item);
              return (
                <div key={index}>
                  <p className="text-white p-2 bg-slate-800 rounded-t-md capitalize">
                    {item.title}
                  </p>
                  <div>
                    <PanoramaPanillumEdit img={item?.image[0]?.image} />
                  </div>
                  <div className="flex justify-between items-center text-white p-4   bg-slate-800 ">
                    <div>{item.description}</div>
                    <div>
                      <p className="rounded-b-md capitalize">
                        <span
                          className="cursor-pointer"
                          onClick={() => navigate(`/edit/${item.uid}`)}
                        >
                          <EditIcon />
                        </span>
                        <span
                          className="text-red-700 ml-3 cursor-pointer"
                          onClick={() => deleteDocFromFirebase(item.uid)}
                        >
                          <Delete />
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Edit;
