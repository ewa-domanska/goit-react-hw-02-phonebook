export const Filter = ({searchContact}) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={searchContact}/>
</div>
  );
};
