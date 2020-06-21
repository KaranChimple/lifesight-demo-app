import React from 'react';
import Tabs from './components/Tabs/Tabs';
import Channel from './components/Screens/Channel';
import Flight from './components/Screens/flight';
import Budget from './components/Screens/budget';
import { TAB1, TAB2, TAB3 } from './components/Screens/constants';
import { Provider } from 'react-redux';
import store from './store';
require('./styles.css');

function App() {
    return (
        <Provider store={store}>
            <div>
                <div className='header-container'>
                    <h6>CAMPAIGN NAME</h6>
                    <div className='main-header-div'>
                        <h1>Manis Ad Mobile</h1>
                    </div>
                </div>

                <Tabs>
                    <div label={TAB1}>
                        <Channel />
                    </div>
                    <div label={TAB2}>
                        <Flight />
                    </div>
                    <div label={TAB3}>
                        <Budget />
                    </div>
                </Tabs>
            </div>
        </Provider>
    );
}

// const container = document.createElement('div');
// document.body.appendChild(container);
// render(<App />, container);

export default App;