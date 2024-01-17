const CrudBuoi4 = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[500px] bg-white">
        <h1 className="text-lg text-center">Thêm - Sửa - Xóa</h1>

        <div className="w-full flex items-center gap-4">
          <input
            type="text"
            className="border border-gray-200 rounded py-2 px-2 w-full  "
            placeholder="Nhập tên"
          />
          <button className="bg-blue-500 text-white rounded py-2 px-2">
            Thêm
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <h2>Sản phẩm 1</h2>
            <p>$12000</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-blue-500 text-white rounded py-2 px-2">
              Sửa
            </button>
            <button className="bg-red-500 text-white rounded py-2 px-2">
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudBuoi4;
