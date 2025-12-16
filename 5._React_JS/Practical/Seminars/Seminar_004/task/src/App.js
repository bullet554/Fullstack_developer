/* import Box from "./components/Box";
import pic from "./components/img.jpg"
import List from "./components/List"; */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPage from "./components/ListPage";
import DetailPage from "./components/DetailPage";

function App() {
  /* const renderItems = () => {
    return [
      <Box key="1" style={{ background: 'lightgray' }}>
        <h2>Hello</h2>
      </Box>,

      <Box key="2" style={{ background: 'lightblue' }}>
        <h3>World</h3>
      </Box>,

      <Box key="3" style={{ background: 'lightgreen' }}>
        <img src={pic} alt={Image} />
      </Box>
    ];
  }; */

  const productsList = [
    { id: 1, name: "product-1", description: "Here is the product description No. 1", price: 100 },
    { id: 2, name: "product-2", description: "Here is the product description No. 2", price: 200 },
    { id: 3, name: "product-3", description: "Here is the product description No. 3", price: 300 },
    { id: 4, name: "product-4", description: "Here is the product description No. 4", price: 400 }
  ];

  return (
    <div>
      {/* <List renderItems={renderItems} /> */}

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<ListPage productsList={productsList} />} />
            <Route path="/detail/:id" element={<DetailPage productsList={productsList} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
