import { Divider } from "@nextui-org/react";
const Dashboard = ({ children }) => {
	return (
		<div className="dashboardContainer p-5 ">
			<section className="mt-24 dashboard ">
				<h1 className="text-xl font-semibold">Dashboard</h1>

				<p>
					From here you would be able to monitor all the parameters of your indoor and
					change it if needed
				</p>
			</section>
			<Divider className="mt-4" />
			<section className="cardDisplay">{children}</section>
		</div>
	);
};

export default Dashboard;
