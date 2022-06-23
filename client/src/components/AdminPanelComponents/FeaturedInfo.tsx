import React, { useEffect, useState } from 'react';
import {isAuth} from "../../helpers/auth";
import axios from 'axios';
import "../../styles/FeaturedInfo.scss";

const FeaturedInfo = () => {

  const [aCount, setACount] = useState();
  const [saCount, setSaCount] = useState();
  const [seCount, setSeCount] = useState();
  const [eCount, setECount] = useState();
  const [sCount, setSCount] = useState();
  const [uCount, setUCount] = useState();

  useEffect(() => {
    function getAdmins(){
        axios.get(`https://localhost:5000/api/Stat/get-users-count/${isAuth().institutes[0].id}`).then((res) => {
            setACount(res.data.adminsCount);
            setSaCount(res.data.superAdminsCount);
            setSeCount(res.data.superEditorsCount);
            setECount(res.data.editorsCount);
            setSCount(res.data.subscribersCount);
            setUCount(res.data.adminsCount+res.data.superAdminsCount+res.data.superEditorsCount+res.data.editorsCount + res.data.subscribersCount + res.data.subscribersCount)
        }).catch((err) => {
            console.log(err.message);
        })
    }
    getAdmins();
  }, [])

  return (
    <>
    <div className="featuredAP">
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Super Admins</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">{saCount}</span>
        </div>
        <span className="featuredAP-Des">Total no. of registered Super Admins</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Admins</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">{aCount}</span>
        </div>
        <span className="featuredAP-Des">Total no. of registered Admins</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Super Editors</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">{seCount}</span>
        </div>
        <span className="featuredAP-Des">Total no. of registered Super Editors</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Editors</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">{eCount}</span>
        </div>
        <span className="featuredAP-Des">Total no. of registered Editors</span>
      </div>
    </div>
    <div className="featuredAP">
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Subscribers</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">{sCount}</span>
        </div>
        <span className="featuredAP-Des">Total no. of registered Subscribers</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Degrees</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">Degreee</span>
        </div>
        <span className="featuredAP-Des">Total no. of Degrees offer</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Users</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">{uCount}</span>
        </div>
        <span className="featuredAP-Des">Total no. of registered users</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Editors</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">2,225</span>
        </div>
        <span className="featuredAP-Des">Total no. of registered Editors</span>
      </div>
    </div>
  </>
  )
}

export default FeaturedInfo;