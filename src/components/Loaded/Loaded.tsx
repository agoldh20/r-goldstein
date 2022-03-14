import React, {useState} from 'react';
import Home from '../Home/Home';
import Location from '../Location/Location';
import Header from '../Header/Header';
import About from '../About/About';
import Forms from '../Forms/Forms';
import Contact from '../Contact/Contact';

const Loaded = () => {
  const [loadedComponent, setLoadedComponent] = useState('home')

    const renderedComponent = () => {
        switch(loadedComponent) {
            case 'home':
                return (<Home/>);
            case 'about':
                return (<About/>);
            case 'location':
                return (<Location/>);
            case 'forms':
                return (<Forms/>);
            case 'contact':
                return (<Contact/>);
            default: 
                return (<Home/>);
        }
    }
  return (
    <div>
      <Header setComponent={setLoadedComponent}/>
      {renderedComponent()}
    </div>
  )
}

export default Loaded;