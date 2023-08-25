const DataRow = ({ children }) => {
  return (
    <div className="grid place-content-center p-12 gap-10 md:grid-cols-[repeat(2,_auto)]">
      {children}
    </div>
  );
};

export default DataRow;
