import './style.scss'
import DrawingView from '../DrawingView'
import DrawingList from '../DrawingList'

const CardContent = () => {
    return (
        <div className="cardContent bg-white row">
            <DrawingView className={'col-8'} />
            <DrawingList className={'col-4'} />
        </div>
    );
}


export default CardContent;