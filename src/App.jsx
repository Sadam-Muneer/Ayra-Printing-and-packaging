import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Abot from "./components/About";
import Item from "./components/items";
// import Service from './components/service';
import Approach from "./components/Approach";
import Map from "./components/map";
import FAQ from "./components/Faq";
import CustomPackaging from "./pages/Customs"; // Import your CustomPackaging component
import StickersLabels from "./pages/Stickers";
import About from "./pages/About";
import Careers from "./pages/Career";
import Contact from "./pages/Contacts";
import Quote from "./pages/quote";
import ScrollToTop from "./ScrollToTop";

import Advertisingboxes from "./pages/Custom/advertising-boxes";
import BathBombBoxes from "./pages/Custom/BathBombBoxes";
import Boxwithwindow from "./pages/Custom/boxwithwindow";
import Candleboxes from "./pages/Custom/Candleboxes";
import Carddeckboxes from "./pages/Custom/Carddeckboxes";
import Clothingboxes from "./pages/Custom/clothingboxes";
import Dispenserboxes from "./pages/Custom/Dispenserboxes";
import Giftboxes from "./pages/Custom/Giftboxes";
import Hairextensionboxes from "./pages/Custom/Hairextensionboxes";
import Pillowboxes from "./pages/Custom/Pillowboxes";
import PRboxes from "./pages/Custom/PRboxes";
import Rigidboxes from "./pages/Custom/Rigidboxes";
import Shoeboxes from "./pages/Custom/Shoeboxes";
import Sleeveboxes from "./pages/Custom/Sleeveboxes";
import Soapboxes from "./pages/Custom/Soapboxes";
import Tuckboxes from "./pages/Custom/Tuckboxes";
import Gableboxes from "./pages/Custom/Gableboxes";
import Mailerboxes from "./pages/Custom/Mailerboxes";
import Customboxes from "./pages/Custom/Customboxes";
import Cardboardboxes from "./pages/Custom/Cardboardboxes";
import Hardboxes from "./pages/Custom/Hardboxes";
import Medicineboxes from "./pages/Custom/Medicineboxes";

import Bottlelabels from "./pages/Sticker/Bottlelabels";
import Clearlabels from "./pages/Sticker/Clearlabels";
import Customlabels from "./pages/Sticker/Customlabels";
import Foillabels from "./pages/Sticker/Foillabels";
import Holographiclabels from "./pages/Sticker/Holographiclabels";
import Kisscutlabels from "./pages/Sticker/Kisscutlabels";
import Metalliclabels from "./pages/Sticker/Metalliclabels";
import Paperlabels from "./pages/Sticker/Paperlabels";
import PElabels from "./pages/Sticker/PElabels";
import PPlabels from "./pages/Sticker/PPlabels";
import Securitylabels from "./pages/Sticker/Securitylabels";
import Thermallabels from "./pages/Sticker/Thermallabels";
import Vinyllabels from "./pages/Sticker/Vinyllabels";
import Waterprooflabels from "./pages/Sticker/Waterprooflabels";

import GraphiDesignBuilder from "./pages/graphic-link-builder";
import ProductionStaff from "./pages/productionstaff";
import Accountant from "./pages/Accountant";

import JobGraphicDesigner from "./pages/jobgraphicdesigner";
import JobProductStaff from "./pages/jobproductstaff";
import JobAccountant from "./pages/jobaccountant";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {/* <Navbar /> */}
              <Header />
              <Carousel />
              <Abot />
              <Item />
              {/* <Service /> */}
              <Approach />
              <Map />
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/custom"
          element={
            <Layout>
              <CustomPackaging />
            </Layout>
          }
        />
        <Route
          path="/sticker"
          element={
            <Layout>
              <StickersLabels />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/career"
          element={
            <Layout>
              <Careers />
            </Layout>
          }
        />
        <Route
          path="/contacts"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/quote"
          element={
            <Layout>
              <Quote />
            </Layout>
          }
        />

        <Route path="/advertising-boxes" element={<Advertisingboxes />} />
        <Route path="/Box-with-window" element={<Boxwithwindow />} />
        <Route path="/Candle-Boxes" element={<Candleboxes />} />
        <Route path="/Bath-Bomb-Boxes" element={<BathBombBoxes />} />
        <Route path="/Card-deck-boxes" element={<Carddeckboxes />} />
        <Route path="/Clothing-boxes" element={<Clothingboxes />} />
        <Route path="/Dispenser-boxes" element={<Dispenserboxes />} />
        <Route path="/Gift-boxes" element={<Giftboxes />} />
        <Route path="/Hair-extension-boxes" element={<Hairextensionboxes />} />
        <Route path="/Pillow-Boxes" element={<Pillowboxes />} />
        <Route path="/PR-Boxes" element={<PRboxes />} />
        <Route path="/Rigid-Boxes" element={<Rigidboxes />} />
        <Route path="/Shoe-Boxes" element={<Shoeboxes />} />
        <Route path="/Sleeve-Boxes" element={<Sleeveboxes />} />
        <Route path="/Soap-Boxes" element={<Soapboxes />} />
        <Route path="/Tuck-Boxes" element={<Tuckboxes />} />
        <Route path="/Gable-Boxes" element={<Gableboxes />} />
        <Route path="/Mailer-Boxes" element={<Mailerboxes />} />
        <Route path="/Custom-Boxes" element={<Customboxes />} />
        <Route path="/Cardboard-Boxes" element={<Cardboardboxes />} />
        <Route path="/Hard-Boxes" element={<Hardboxes />} />
        <Route path="/Medicine-Boxes" element={<Medicineboxes />} />

        <Route path="/Bottle-Labels" element={<Bottlelabels />} />
        <Route path="/Clear-Labels" element={<Clearlabels />} />
        <Route path="/Custom-Labels" element={<Customlabels />} />
        <Route path="/Foil-Labels" element={<Foillabels />} />
        <Route path="/Holographic-Labels" element={<Holographiclabels />} />
        <Route path="/Kiss-cut-Labels" element={<Kisscutlabels />} />
        <Route path="/Metallic-Labels" element={<Metalliclabels />} />
        <Route path="/Paper-Labels" element={<Paperlabels />} />
        <Route path="/PE-Labels" element={<PElabels />} />
        <Route path="/PP-Labels" element={<PPlabels />} />
        <Route path="/Security-Labels" element={<Securitylabels />} />
        <Route path="/Thermal-Labels" element={<Thermallabels />} />
        <Route path="/Vinyl-Labels" element={<Vinyllabels />} />
        <Route path="/Water-Proof-Labels" element={<Waterprooflabels />} />

        <Route path="/Graphic-Designer" element={<GraphiDesignBuilder />} />
        <Route path="/Production-Staff" element={<ProductionStaff />} />
        <Route path="/Accountant" element={<Accountant />} />

        <Route path="/job-Graphic-Designer" element={<JobGraphicDesigner />} />
        <Route path="/job-Product-Staff" element={<JobProductStaff />} />
        <Route path="/job-Accountant" element={<JobAccountant />} />
      </Routes>
    </Router>
  );
}

export default App;
