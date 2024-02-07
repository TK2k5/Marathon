interface IUserTHPros {
  th1: string;
  th2: string;
  th3: string;
  th4: string;
}

const TableTh = ({ th1, th2, th3, th4 }: IUserTHPros) => {
  return (
    <tr>
      <th className="px-6 py-3 border border-black">{th1}</th>
      <th className="px-6 py-3 border border-black">{th2}</th>
      <th className="px-6 py-3 border border-black ">{th3}</th>
      <th className="px-6 py-3 border border-black">{th4}</th>
    </tr>
  );
};

export default TableTh;
