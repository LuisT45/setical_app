import { DataDisplay } from "./components/containers/Card";
import Dashboard from "./components/containers/Dashboard";
import Layout from "./components/layouts/layout";
import DataRow from "./components/containers/DataRow";

function App() {
  return (
    <Layout>
      <Dashboard>
        <DataRow>
        </DataRow>
      </Dashboard>
    </Layout>
  );
}

export default App;
