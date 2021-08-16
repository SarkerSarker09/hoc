

import Customer from './Customer'
import withCustomCustomer from './withCustomCustomer'

const CurrentCustomer = withCustomCustomer(Customer);


function App() {
  const userIds = [1,2,3,4,5,6,7,8];

  return (
    <div >
      { 
        userIds.map(item => ( <CurrentCustomer  key={item} id={item}/> ))        
      }
    </div>
  );
}

export default App;
