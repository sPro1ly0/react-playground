import React, { Fragment } from 'react';

function ItemGroup(props) {
  const items = props.items.map(item => <li key={item.name}>{item.name}</li>);
  return (
    <Fragment>
        {items}
    </Fragment>
  );
}

function Table(props) {
  return (
    <Fragment>
        <ul>
            <ItemGroup items={props.winners}/>
            <ItemGroup items={props.losers}/>
            <Fragment>
                <label htmlFor="dueDate">Due Date 
                    <span className="requiredField">(required)</span>
                </label>
                <input 
                    type="date" 
                    id="dueDate" 
                    name="dueDate"
                    aria-label="Due date for book return"
                    aria-required="true"
                    aria-describedby="dueDateConstraint"/>
                <div id="dueDateContraint">Due date must be within 6 months of the current date.</div>
                
                <label htmlFor="ccNumber">Credit Card Number
                    <span className="requiredField">(required)</span>
                </label>
                <input
                    type="text"
                    id="ccNumber"
                    name="ccNumber"
                    aria-label="Credit card number"
                    aria-required="true"
                    aria-describedby="ccError"
                    aria-invalid="true"/>
                <div 
                    className="errorMessage"  
                    id="ccError"
                    style={{color:"red"}}
                    >
                    Please enter a valid credit card number
                </div> 
            </Fragment> 
        </ul>

        
    </Fragment>
    
  )
}
//aria-describedby === id of the input's div description
export default Table;