//компонент с фотографиями
export default function ProjectList({photo}) {
    return (
        <div>
            {photo.map((item, idx) => 
                <img className="image" src={item.img} alt={item.category} key={idx} />
            )}            
        </div>        
    );
}