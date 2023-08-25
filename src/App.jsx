import { DataDisplay } from "./components/containers/Card";
import Dashboard from "./components/containers/Dashboard";
import Layout from "./components/layouts/layout";
import DataRow from "./components/containers/DataRow";

function App() {
  return (
    <Layout>
      <Dashboard>
        <DataRow>
          <DataDisplay title="Temperature" variant={"danger"} />
          <DataDisplay title="Humidity" variant={"primary"} />
          <DataDisplay title="Soil Humidity" variant={"warning"} />
          <DataDisplay title="Water Tank" variant={"secondary"} />
        </DataRow>
      </Dashboard>
    </Layout>
  );
}

export default App;
