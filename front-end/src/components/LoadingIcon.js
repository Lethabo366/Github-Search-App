import loadingImage from '../fe_da_silva-loading-7528_512.gif';

// Below function will return a loading gif to be displayed
function LoadingIcon (){
    return(
        <div className="loadingIcon-container">
            <img src={loadingImage} className="loading-image"/>
        </div>
    )
}

export default LoadingIcon;