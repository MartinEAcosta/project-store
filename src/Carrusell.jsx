import { useRef, useState } from 'react';
import { data } from './assets/data.js';
import './styles/carrusell.css';

export function Carrusell (){
    const minLimit = 0;
    const maxLimit = data.length-1;

    let imgContainerRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);


    const prev = () => {
        if(!imgContainerRef.current) return;
        if(currentIndex != minLimit){
            let newIndex = (currentIndex - 1);
            setCurrentIndex(newIndex);
            imgContainerRef.current.scrollLeft = newIndex * imgContainerRef.current.clientWidth;
        }
    };

    const next = () => {
        if(!imgContainerRef.current) return;
        if(currentIndex != maxLimit){
            let newIndex = (currentIndex + 1);
            setCurrentIndex(newIndex);
            imgContainerRef.current.scrollLeft = newIndex * imgContainerRef.current.clientWidth;
        }
    };

    return (
        <div className="containerSlider">
            <div className="content">
                <div className="prev" onClick={prev} ></div>
                <div className="sliderPanel" ref={imgContainerRef}>
                    {data.map((item) => (<img key={item.id} src={item.imgUrl}/>))}
                </div>
                <div className="next" onClick={next} ></div>
            </div>
        </div>
    )
}
