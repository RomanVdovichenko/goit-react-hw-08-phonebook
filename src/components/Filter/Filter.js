import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <div>
      <label>
        <input
          type="text"
          className={css.filter}
          onChange={handleChangeFilter}
          placeholder='Find contacts by name'
        />
      </label>
    </div>
  );
};