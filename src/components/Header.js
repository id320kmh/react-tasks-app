import React from 'react';

import logoUrl from '../assets/images/logo.png';

function Header({headerInitialHeight}) {

    const headerHeight = headerInitialHeight ? headerInitialHeight : 80;

    const headerStyles = {


        mainHeader: {
            width: '100%',
            height: `${headerHeight}px`,
            backgroundColor: '#222',
            overflow: 'hidden'
        },

        mainHeader__row: {
            minWidth: '100%',
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },

        mainHeader__row__column: {
            display: 'flex',
            minWidth: '50px'
        },

        mainHeader__row__logo: {
            width: `${headerHeight-10}px`,
            height: `${headerHeight-10}px`,
            background: `url(${logoUrl}) 0 0 no-repeat`,
            backgroundSize: 'cover'
        },

        mainHeader__row__title: {
            color: '#fff',
            fontSize: '36px',
            fontWeight: 'bold',
            marginLeft: '20px',
            textTransform: 'uppercase'
        }
    }

    return (
        <header className="main-header" style={headerStyles.mainHeader}>
            <div className="main-header__row" style={headerStyles.mainHeader__row}>
                <div className="main-header__column" style={headerStyles.mainHeader__row__column}>
                    <a href="/" className="main-header__logo" style={headerStyles.mainHeader__row__logo}></a>
                </div>
                <div className="main-header__column">
                    <span className="main-header__title" style={headerStyles.mainHeader__row__title}>My template</span>
                </div>
            </div>
        </header>
    )
}

export default Header;