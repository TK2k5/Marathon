interface IFormGroupPros {
  Name: string;
  children: React.ReactNode;
}

const FormGroup = ({ Name, children }: IFormGroupPros) => {
  return (
    <>
      <h1 className="text-primarydark font-Inter font-medium">{Name}</h1>
      {children}
    </>
  );
};

export default FormGroup;
