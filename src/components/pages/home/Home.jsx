import React from "react";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { Redirect } from "react-router-dom";
import WidgetHome from "./WidgetHome";
import LastOrders from "./LastOrders";

const Home = () => {
  const userInfo = useSelector((state) => state.userInfo);

  const validateIsAuthenticated = useCallback(() => {
    if (!userInfo) {
      return <Redirect to="/signin" />;
    } else {
      return <Redirect to="/" />;
    }
  }, [userInfo]);
  useEffect(() => {
    validateIsAuthenticated();
  }, [validateIsAuthenticated]);
  return (
    <>
      <div className="home">
        {userInfo && userInfo.roleId === 1 ? (
          <>
            <div className="productsList_pageTitle">
              <Typography variant="body1">Dashboard</Typography>
              <Typography variant="body1" style={{ color: "grey" }}>
                {" "}
                / Products
              </Typography>
            </div>
            <WidgetHome />
            <LastOrders />
          </>
        ) : (
          <Redirect to="/signin" />
        )}
      </div>
    </>
  );
};

export default Home;
