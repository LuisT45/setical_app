import { DataDisplay } from "./components/containers/Card";
import Dashboard from "./components/containers/Dashboard";
import Layout from "./components/layouts/layout";

function App() {
  return (
    <Layout>
      <Dashboard>
        <DataDisplay />
      </Dashboard>
    </Layout>
  );
}

export default App;
