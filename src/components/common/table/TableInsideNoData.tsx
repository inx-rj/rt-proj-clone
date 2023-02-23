import { Images } from "../../../helper/images";

const TableInsideNoData = () => {
  return (
    <div className="no-data-found max-w-[250px] w-full mx-auto text-center">
      <div className="icon ">
        <img
          src={Images?.NoDataFound}
          alt="No data found"
          className="w-full h-full"
        />
      </div>
      <div className="content">
        <h6 className="card-text">No data found</h6>
      </div>
    </div>
  );
};

export default TableInsideNoData;
