import { collection, getFirestore } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { app } from "../firebase/firebase";
import Layout from "../layout/Layout";
import { setEditParanomaData } from "../redux/editParanoma";
import { UserContext } from "../states/user_context";
import MapViewEdit from "../client/edit/edit-components/MapEdit";
import SearchBarEdit from "../client/edit/edit-components/SearchBarEdit";
import TransactionTypeEdit from "../client/edit/edit-components/TransactiontypeEdit";
import EstatetypeEdit from "../client/edit/edit-components/EstatetypeEdit";
import UploadsEdit from "../client/edit/edit-components/UploadsEdit";

const EditParanoma = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "offers"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    const fetchTours = async () => {
      const satoshi = value.docs.map((doc) => doc.data());
      const editParanomaData = satoshi.find(
        (paranoma) => paranoma.uid === params.uid
      );
      dispatch(setEditParanomaData(editParanomaData ));
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
        <MapViewEdit/>
        <SearchBarEdit/>
        <TransactionTypeEdit/>
        <EstatetypeEdit/>
        <UploadsEdit/>
      </div>
    </Layout>
  );
};

export default EditParanoma;
