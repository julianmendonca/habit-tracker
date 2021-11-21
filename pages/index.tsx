import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Router from "next/router";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import ColorModeButton from "../components/buttons/ColorModeButton";
import CenteredBox from "../components/cards/CenteredBox";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const handleSuccesLogin = () => {
    Router.push("/history");
  };
  return (
    <CenteredBox>
      <Flex alignItems="center" justifyContent="space-around" mt="20">
        <GoogleLogin
          clientId="685479742912-vbmi76gjr0mdj8dicv1spm4fh56g8upl.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={handleSuccesLogin}
          onFailure={() => alert("error")}
          cookiePolicy={"single_host_origin"}
          style={{ borderRadius: 35 }}
        />
      </Flex>
    </CenteredBox>
  );
};

export default Home;
