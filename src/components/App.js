import React from 'react';
import Counter from './Counter';

const App = () => {
    return (
        <>
            {/* Starting Greeting Here */}
            <div className="container-fluid">
                <div className="row">
                    <div className="text-center col-sm-12">
                        <h1 className="h2 mt-5">React & Redux Refresher</h1>
                    </div>
                </div>
            </div>
            {/* Ending Greeting Here */}

            {/* Starting The Counter Component Here */}
            <Counter />
            {/* Starting The Counter Component Here */}
        </>
    );
}

export default App;
