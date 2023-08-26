import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CircularProgress,
} from "@nextui-org/react";

export const DataDisplay = ({ title, variant, unit }) => {
  return (
    <Card className="w-[25em] h-[30em]  self-center justify-self-center ">
      <CardBody className="justify-center items-center">
        <h3 className="font-semibold text-3xl mb-7"> {title} </h3>
        <CircularProgress
          classNames={{
            svg: "w-[15em] h-[15em] drop-shadow-md",
            track: "stroke-white/10",
            value: "text-4xl font-semibold text-white",
          }}
          formatOptions={{ style: "unit", unit: unit }}
          color={variant}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="w-[100%] justify-center">
        <Button
          className="mb-5 font-semibold text-2xl p-6"
          variant="light"
          color={variant}
        >
          Edit Parameters
        </Button>
      </CardFooter>
    </Card>
  );
};
