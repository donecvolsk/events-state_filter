//компонент для кнопок
export default function Filters(props) {  
    const {nameButton, elem, func } = props;
    return (                
        <div>                      
            {nameButton.map((item, idx) => 
            <button
            onClick = {() => func(item)}
            key={idx}
            className= {elem === item ? "active" : ""}
            >
            {item}
            </button>
            )}                                  
        </div>   
    );
}