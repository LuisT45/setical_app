const DataRow = ({ children }) => {
  return (
    <div className="grid place-content-center p-12 gap-5 md:grid-cols-2">
      {children}
    </div>
  );
};

export default DataRow;
