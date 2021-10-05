import './style.scss'

const Notify = ({ message, type }) => {
    return (
        <div className={`notify text-white fs-6 border-m ${type === 'error' ? 'bg-danger' : 'bg-success'}`}>{message}</div>
    );
}


export default Notify;