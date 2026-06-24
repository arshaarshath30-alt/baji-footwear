import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import SchoolBags from "./pages/SchoolBags";
import TravelBags from "./pages/TravelBags";
import FootwearShop from "./pages/FootwearShop";
import KidsCollection from "./pages/KidsCollection";
import PriceGuide from "./pages/PriceGuide";
import Gallery from "./pages/Gallery";
import VisitUs from "./pages/VisitUs";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,                      Component: Home },
      { path: "about",                    Component: About },
      { path: "collections",              Component: Collections },
      { path: "school-bags-sivagangai",   Component: SchoolBags },
      { path: "travel-bags-sivagangai",   Component: TravelBags },
      { path: "footwear-shop-sivagangai", Component: FootwearShop },
      { path: "kids-collection",          Component: KidsCollection },
      { path: "price-guide",              Component: PriceGuide },
      { path: "gallery",                  Component: Gallery },
      { path: "visit-us",                 Component: VisitUs },
      { path: "*",                        Component: NotFound },
    ],
  },
]);
