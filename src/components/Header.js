// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <div className="header">
           <h1 >CALL A FRIEND</h1>
           <p>your friendly contact app</p>
           <p>*****************************************</p>
        </div>
    );
};

export default Header;