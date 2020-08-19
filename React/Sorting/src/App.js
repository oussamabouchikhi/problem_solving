import React, {useState, useEffect} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const prods = articles.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1);
    const [products, setProducts] = useState(prods);

    const handleSortByUpvotesDesc = () => {
        const updated = [...articles].sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1);
        setProducts(updated);
    }

    const handleSortByDateDesc = () => {
        const updated = [...articles].sort((a, b) => (a.date < b.date) ? 1 : -1);
        setProducts(updated);
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button 
                    data-testid="most-upvoted-link" className="small"
                    onClick={handleSortByUpvotesDesc}
                    >Most Upvoted</button>
                <button 
                    data-testid="most-recent-link" className="small"
                    onClick={handleSortByDateDesc}
                    >Most Recent</button>
            </div>
            <Articles articles={products}/>
        </div>
    );

}

export default App;
