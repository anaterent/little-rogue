import img1 from '../images/landscape.JPG';
import img2 from '../images/matcha-takeaway.JPG';



function ImageBoard() {
    return (
        <div className='image-board'>

            <div className='images-in-board'>
                <img src={img1} alt="mactha latte" />
                {/* <h1>Thanks for visiting!</h1> */}
                <img src={img2} alt="mactha latte" />
            </div>

        </div>

    )

}

export default ImageBoard;