import React from 'react';
import Input from './UI/Input/Input';
import Select from './UI/Select/Select';

const PostFilter = ({ filter, updateFilter }) => {
  return (
    <div className="post-filter">
      <Select
        value={filter.selectedType}
        onChange={selectedValue => updateFilter({ ...filter, selectedType: selectedValue })}
        options={[{value: 'title', name: 'по названию'}, {value: 'body', name: 'по описанию'}]}
      />
      <Input
        value={filter.searchQuery}
        placeholder="Поиск..."
        onChange={event => updateFilter({...filter, searchQuery: event.target.value })}
      />
    </div>
  );
};

export default PostFilter;