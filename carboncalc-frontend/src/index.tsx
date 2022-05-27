import React, { Suspense } from 'react';
import { render } from 'react-dom';


import './index.css';
import {App} from "./components/App";

const rootElement = document.getElementById('root');

function ReactApp(): JSX.Element {
    return (
        <Suspense fallback={<div />}>
            <App />
        </Suspense>
    );
}

render(<ReactApp />, rootElement);
