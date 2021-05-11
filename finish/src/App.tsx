import { BrowserRouter as Router, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { ToolHeader } from "./components/ToolHeader";
import { ToolFooter } from "./components/ToolFooter";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Sidebar } from "./components/Sidebar";

import { useColorToolStore } from "./hooks/useColorToolStore";
import { useCarToolStore } from "./hooks/useCarToolStore";

import { ColorToolStoreProvider } from "./contexts/colorToolStoreContext";
import { CarToolStoreProvider } from "./contexts/carToolStoreContext";

import { ColorListContainer } from "./containers/ColorListContainer";
import { AddColorFormContainer } from "./containers/AddColorFormContainer";
import { CarTableContainer } from "./containers/CarTableContainer";
import { AddCarFormContainer } from "./containers/AddCarFormContainer";

import { colors, cars } from "./data.json";

export function App() {
  return (
    <Router>
      <Layout>
        <ToolHeader headerText="The App" />
        <Menu />
        <main>
          <ColorToolStoreProvider store={useColorToolStore(colors)}>
            <Route path="/color-list">
              <ColorListContainer />
            </Route>
            <Route path="/add-color">
              <AddColorFormContainer />
            </Route>
          </ColorToolStoreProvider>
          <CarToolStoreProvider store={useCarToolStore(cars)}>
            <Route path="/car-table">
              <CarTableContainer />
            </Route>
            <Route path="/add-car">
              <AddCarFormContainer />
            </Route>
          </CarToolStoreProvider>
          <Route path="/" exact>
            <Home />
          </Route>
        </main>
        <aside>
          <Sidebar />
        </aside>
        <ToolFooter companyName="A Cool Company, Inc." />
      </Layout>
    </Router>
  );
}
