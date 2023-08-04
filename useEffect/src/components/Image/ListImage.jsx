import axios from "axios";
import Image from "./Image";
import { useEffect, useState } from "react";

const ListImage = () => {
  const [listImage, setListImage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const getListImages = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${currentPage}&limit=${pageSize}`
    );
    if (res && res.data) {
      setListImage(res.data);
    }
  };
  const handlePrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    if (currentPage <= 1) {
      setCurrentPage(1);
    }
  };
  const handleNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    if (currentPage >= 13) {
      setCurrentPage(13);
    }
  };
  const handlePageSize = () => {
    setPageSize((pageSize) => pageSize + 4);
    if (pageSize >= 100) {
      setCurrentPage(100);
    }
  };
  useEffect(() => {
    getListImages();
  }, [currentPage, pageSize]);
  console.log(listImage);
  return (
    <div className="h-[100vh] max-w-[1440px] mx-auto my-0  mt-5">
      <div className=" flex flex-wrap gap-2 justify-center items-center">
        {listImage.length > 0 &&
          listImage.map((item) => {
            return (
              <div
                className="w-[336px] bg-white p-3 shadow-lg rounded-lg transition-all"
                key={item.id}
              >
                <Image item={item} />
              </div>
            );
          })}
      </div>
      <div className="control-page flex justify-center items-center w-full gap-x-10 mt-4">
        <div
          onClick={handlePrevPage}
          className="py-2 px-6 bg-blue-600 text-white shadow-lg rounded-xl cursor-pointer"
        >
          Prev Page
        </div>
        <div
          onClick={handleNextPage}
          className="py-2 px-6 bg-blue-600 text-white shadow-lg rounded-xl cursor-pointer"
        >
          Next Page
        </div>
      </div>
      <div className="control-limit flex justify-center items-center w-full gap-x-10 mt-4">
        <div
          onClick={handlePageSize}
          className="py-2 px-6 bg-cyan-400 text-white shadow-xl  rounded-xl cursor-pointer"
        >
          Load More
        </div>
      </div>
    </div>
  );
};

export default ListImage;
