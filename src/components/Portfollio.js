//Это компонет в котором будут дочерние компоненты Filters и ProjectList
import { useState } from "react";
import './Filters.css';
import './ProjectList.css';
import { data } from '../data';
import Filters from './Filters';
import ProjectList from './ProjectList';

export default function Portfolio() {
    const nameButton = ["All", "Websites", "Flayers", "Business Cards"];//названия кнопок
    const [clicButton, setClicButton] = useState("All");//состояние активной кнопки
    const [arrData, setArrData] = useState(data);//состояние блока фотографий

    function click(item) {
        console.log(item);
        setClicButton(item);
        if(item === "All") {
            setArrData(data);
        } else {
            setArrData(data.filter((el) => {
                return el.category === item;                
            }));           
        }
    }
    return (
        <div>
            <Filters nameButton={nameButton} elem={clicButton} func = {click}/>
            <ProjectList photo={arrData}/>
        </div>
        
    );
}