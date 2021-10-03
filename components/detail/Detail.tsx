interface DetailProps {
  name: String;
}

const Detail: React.FC<DetailProps> = ({ name }: DetailProps) => {
  return (
    <>
      <div className="flex flex-row"></div>
      <header>{name}</header>
      <div className="">This is the detail component</div>
    </>
  );
};

export default Detail;
