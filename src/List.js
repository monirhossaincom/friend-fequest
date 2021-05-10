import React from 'react';

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, title, image } = person;
        return (
          <article key={id} removeItem={removeItem} className='person'>
            <img src={image} alt='Iamge' />
            <div>
              <h4>{name}</h4>
              <p>{title}</p>
            </div>
            <button
              type='button'
              className='btn-sm'
              onClick={() => removeItem(id)}
            >
              Delete
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
