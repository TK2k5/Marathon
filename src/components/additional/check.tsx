const Check = () => {
  return (
    <div>
      <h1 className="text-primarydark font-Inter font-medium">Status:</h1>
      <div className="flex gap-6 items-center">
        <label className="flex justify-center gap-2">
          <input
            type="radio"
            className="accent-success w-6 h-6"
            defaultChecked
          />
          Active
        </label>
        <label className="flex justify-center gap-2">
          <input type="radio" className="accent-success w-6 h-6" />
          Inactive
        </label>
      </div>
    </div>
  );
};

export default Check;
