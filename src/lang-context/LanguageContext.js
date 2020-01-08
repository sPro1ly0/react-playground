import React from 'react';

const LanguageContext = React.createContext({//function by React
    lang: window.navigator.language,
    setLang: () => {

    },
})

export default LanguageContext;