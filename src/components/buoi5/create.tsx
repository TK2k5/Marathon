interface ICreatePros {
  handleAddProducted: () => void;
  isEdited: boolean;
}

const Create = ({ handleAddProducted, isEdited }: ICreatePros) => {
  return (
    <div>
      <button
        onClick={() => handleAddProducted()}
        className="bg-blue-500 text-white rounded py-2 px-2"
      >
        {isEdited ? "Sửa" : "Thêm"}
      </button>
    </div>
  );
};

export default Create;
