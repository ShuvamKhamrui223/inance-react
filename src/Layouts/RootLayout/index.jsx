import { useState } from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Container from "../../Container";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import SectionLoader from "../../components/common/PreLoaders/SectionLoader";
import Info from "../../components/sections/Info";

const RootLayout = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const navigation = useNavigation();
  const currentLocation = useLocation();

  if (navigation.state === "loading") return <SectionLoader />;
  return (
    <>
      <Header sidebarToggler={setSidebarVisibility} />
      <main className="">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Info />
      <Footer />
    </>
  );
};

export default RootLayout;
