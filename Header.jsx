import React from 'react';

const Header = ({totalIncome}) => {
    return (
        <div className='container'>
            <h1 style={{}}>Income Tracker</h1>
            <div className='total-income'>Ghc{totalIncome}</div>
        </div>
    );
}

export default Header;
