import React, {useState} from 'react';
    
function Slides({slides}) {
    const [current, setCurrent] = useState(0);
    
    const handlePrev = () => {
        setCurrent((prevState) => prevState - 1);
    }
    const handleNext = () => {
        setCurrent((prevState) => prevState + 1);
    }
    const handleReset = () => {
        setCurrent(0);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button 
                    data-testid="button-restart" className="small outlined"
                    onClick={handleReset}
                    disabled={current === 0}
                    >Restart</button>
                <button 
                    data-testid="button-prev" className="small"
                    onClick={handlePrev}
                    disabled={current === 0}
                    >Prev</button>
                <button 
                    data-testid="button-next" className="small"
                    onClick={handleNext}
                    disabled={current === slides.length-1}
                    >Next</button>
            </div>
            {slides[current] && (
                <div id="slide" className="card text-center">
                    <h1 data-testid="title">{slides[current].title}</h1>
                    <p data-testid="text">{slides[current].text}</p>
                </div>
            )}
        </div>
    );

}

export default Slides;
