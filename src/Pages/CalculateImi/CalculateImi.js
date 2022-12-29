import React from 'react';

const CalculateImi = () => {
   return (
      <div>
         <div>
               <div>
                  <form action="">
                        <div>
                           <h2>Loan Calculator:</h2>
                        </div>
                     <div>
                        <label htmlFor="loan-amount">Loan amount: </label>
                        <input type="number" id="loan-amount" placeholder="loan amount: "  />
                     </div>
                     <div>
                        <label htmlFor="interest">Interest:</label>
                        <input type="number" id='interest' placeholder="interest %" />
                     </div>
                     <div>
                        <label htmlFor="month">month</label>
                        <input type="number" placeholder="month" id='month'  />
                     </div>
                  </form>
               </div>
         </div>
         <div>

         </div>
      </div>
   );
};

export default CalculateImi;