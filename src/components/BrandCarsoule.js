import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import AliceCarousel from "react-alice-carousel";
import CustomLoader from "./CustomLoader";
import brand1 from "../assests/img/entry__bottom__logo__in__1.svg";

const BrandCarsoule = () => {
  const [loading, setLoading] = useState(false);

  const CollectionData = [
    // <img src="../assests/img/delivery.jpg" role="presentation" />,
    // <img src="path-to-img" role="presentation" />,
    // <img src="path-to-img" role="presentation" />,
    {
      url: "img/logo.jpg",
    },
    {
      url: "images/brand7.png",
    },
    {
      url: "images/brand8.png",
    },
    {
      url: "images/brand9.png",
    },
  ];

  const theme = createTheme({
    TitleWrapper: {
      marginTop: "100px",
      textAlign: "center",
      marginBottom: "5rem",
    },
    Heading: {
      fontSize: "2rem",
      fontweight: "300",
      marginBottom: "1.5rem",
    },
    SubHeading: {
      color: "#636e72",
    },
    carousel: {
      height: "10%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "black",
    },
  });

  // const useStyles = makeStyles((theme) => ({
  //   TitleWrapper: {
  //     marginTop: "100px",
  //     textAlign: "center",
  //     marginBottom: "5rem",
  //   },
  //   Heading: {
  //     fontSize: "2rem",
  //     fontweight: "300",
  //     marginBottom: "1.5rem",
  //   },
  //   SubHeading: {
  //     color: "#636e72",
  //   },
  //   carousel: {
  //     height: "10%",
  //     display: "flex",
  //     alignItems: "center",
  //   },
  //   carouselItem: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     cursor: "pointer",
  //     textTransform: "uppercase",
  //     color: "black",
  //   },
  // }));

  // const classes = theme();

  const items = CollectionData.map((val) => {
    const { url } = val;

    return (
      <>
        {loading ? (
          <CustomLoader />
        ) : (
          <div>
            <img
              src={url}
              alt=""
              height="150"
              width="180"
              style={{ marginBottom: 10 }}
            />
          </div>
        )}
      </>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 4,
    },
  };

  return (
    <>
      <section>
        <div
          // className={classes.TitleWrapper}
          style={{
            marginTop: "100px",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          <h2
            // className={classes.Heading}
            style={{
              fontSize: "2rem",
              fontweight: "300",
              marginBottom: "1.5rem",
            }}
          >
            Shop By Brands
          </h2>
          <p
            // className={classes.SubHeading}
            style={{ color: "#636e72" }}
          >
            Select from the premium product and save plenty money
          </p>
        </div>
        <div
          // className={classes.carousel}
          style={{ height: "10%", display: "flex", alignItems: "center" }}
        >
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            responsive={responsive}
            items={items}
            autoPlay
          />
        </div>
      </section>
    </>
  );
};

export default BrandCarsoule;
