const Image = (props) => {
  console.log(props.item);
  return (
    <>
      <img
        className="w-full object-cover h-[273px] rounded-3xl"
        src={props.item.download_url}
        alt=""
      />
    </>
  );
};

export default Image;
