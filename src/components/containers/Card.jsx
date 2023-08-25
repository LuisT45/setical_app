import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
} from "@nextui-org/react";

export const DataDisplay = () => {
  return (
    <Card className="w-[240px] h-[240px] ">
      <CardBody className="justify-center items-center p-5">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter>
        <Chip></Chip>
      </CardFooter>
    </Card>
  );
};
