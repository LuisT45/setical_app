import { Divider } from "@nextui-org/react";
const Dashboard = ({ children }) => {
  return (
    <div className="p-12 mt-unit-4xl w-full md:w-[70%]">
      <section className="mt-12 dashboard ">
        <h1 className="text-3xl font-semibold">Dashboard</h1>

        <p className="text-lg">
          From here you would be able to monitor all the parameters of your
          indoor and change it if needed
        </p>
      </section>
      <Divider className="mt-10" />
      <section className="cardDisplay">{children}</section>
    </div>
  );
};

export default Dashboard;
