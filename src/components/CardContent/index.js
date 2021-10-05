import './style.scss'
import DrawingView from '../DrawingView'
import DrawingList from '../DrawingList'

const CardContent = () => {
    return (
        <div className="cardContent bg-white row">
            <DrawingList className={'col-lg-4'} />
            <DrawingView className={'col-12 col-lg-8'} />
        </div>
    );
}


export default CardContent;