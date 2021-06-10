// Functional stateLESS component

//funkciniu budu taip issidestrukturizuojam propsus, paduotus app.js renderyje
const NavBar = ({ countersCount, activeCount, isNavBarLight, myNavColors }) => {
  return (
    <nav className={myNavColors}>
      <span className='navbar-brand mb-0'>
        <strong>Counters</strong>Anywhere{' '}
        <span className='badge badge-pill badge-warning'>
          <span>
            {countersCount}/{activeCount}
          </span>
        </span>
      </span>
      <button onClick={() => !isNavBarLight} className='btn btn-outline-info'>
        Night Mode
      </button>
    </nav>
  );
};
export default NavBar;

// import React, { Component } from 'react';
// class NavBar extends Component {
//   render() {
//     const { countersCount, activeCount } = this.props;
//     return (
//       <nav className='navbar navbar-expand-lg navbar-light bg-light'>
//         <span className='navbar-brand mb-0'>
//           <strong>Counters </strong> Anywhere | <strong> Total Counters {countersCount}</strong> | Positive counters :
//           {activeCount}
//         </span>
//       </nav>
//     );
//   }
// }

// export default NavBar;
