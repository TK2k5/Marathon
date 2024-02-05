interface IModalDeletePros {
  visible: boolean;
  onClose: () => void;
  handleModalDelete: (id: number | string) => void;
  id: number | string;
  name?: string;
}

const ModalDelete = ({
  visible,
  onClose,
  handleModalDelete,
  id,
  name = "User",
}: IModalDeletePros) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="h-auto w-[560px] bg-white rounded-lg px-5 py-6 flex flex-col">
        <div className="flex justify-between pb-3 border-b border-primarylight">
          <p className="font-Inter font-bold text-xl">Confirm Delete</p>
          <button onClick={() => onClose()}>X</button>
        </div>
        <div className="h-[150px] my-2 flex justify-center items-center">
          <p className="font-Inter text-lg">
            Are you sure you want to delete <span>{name}</span> permanently. You
            can’t undo this action.
          </p>
        </div>
        <div className="grid grid-flow-col justify-stretch gap-5 pt-3 border-t border-primarylight">
          <button
            onClick={() => onClose()}
            className="border border-secondarydark text-secondarydark font-Inter py-3 px-2 rounded-md"
          >
            CANCEL
          </button>
          <button
            onClick={() => handleModalDelete(id)}
            className="bg-primary text-white py-3 px-2 font-Inter rounded-md"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
