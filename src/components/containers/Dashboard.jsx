import { Divider } from "@nextui-org/react";
const Dashboard = ({ children }) => {
	return (
		<div className="dashboardContainer mt-unit-5xl pr-unit-2xl pl-unit-2xl 2xl:pr-unit-8xl 2xl:pl-unit-8xl ">
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
