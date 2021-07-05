import React from "react";
import { FilterStyled } from "./FilterStyled";

const Filter = ({ filter, doFilter }) => {
  return (
    <FilterStyled>
      <h2>Find your contact by name</h2>
      <input
        type="text"
        name="filter"
        onChange={doFilter}
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </FilterStyled>
  );
};

export default Filter;
