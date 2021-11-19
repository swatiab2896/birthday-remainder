import React from 'react';

const currDate = new Date().getDate();
const currMonth = new Date().getMonth();
const currYear = new Date().getFullYear();
function List({list}){
    return (<>
            {list.map((person)=>{
            const {id, name, age, image} = person;
            const personDate = new Date(age).getDate();
            const personMonth = new Date(age).getMonth();
            const personYear = new Date(age).getFullYear();
            if(currDate===personDate && currMonth===personMonth)
            {
                return (
                    <div className='fields'>
                            <img className='image' src={image} alt={name}></img>
                            <div>
                            <h4>{name}</h4>
                            <p>{currYear-personYear} Years</p>
                            </div>
                     </div>);
            }
            
    })}
    
    </>)
};

export default List;