import errorGif from './error.gif'

const ErrorMessage = () => {
    return(
        <img style={{ display: 'block', width:'250px', height: '250px', objextFit: 'contain', margin: '0 auto'}} src={errorGif}/>
    )
}

export default ErrorMessage;