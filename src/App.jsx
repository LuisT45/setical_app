import { DataDisplay } from "./components/containers/Card";
import Dashboard from "./components/containers/Dashboard";
import Layout from "./components/layouts/layout";
import DataRow from "./components/containers/DataRow";

function App() {
  return (
    <Layout>
      <Dashboard>
        <DataRow>
          <DataDisplay title="Temperature" unit="celsius" variant="danger" />
          <DataDisplay title="Humidity" unit="percent" variant="primary" />
          <DataDisplay title="Soil Humidity" unit="percent" variant="warning" />
          <DataDisplay title="Water Tank" unit="liter" variant="secondary" />
        </DataRow>
      </Dashboard>
    </Layout>
  );
}

export default App;
