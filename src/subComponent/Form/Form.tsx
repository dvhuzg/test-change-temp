const Form = ({ name, age, address, desc, onChange, onChangeInput }: any) => {
  return (
    <div>
      <form action="">
        <div className="name">
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            onChange={onChangeInput}
            name="name"
            id=""
          />
        </div>
        <div className="age">
          <label htmlFor="">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={onChangeInput}
          />
        </div>
        <div className="address">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            id=""
            value={address}
            onChange={onChangeInput}
          />
        </div>
        <div className="desc">
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="desc"
            id=""
            value={desc}
            onChange={onChangeInput}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
