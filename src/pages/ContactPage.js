import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';


function ContactPage() {
    return (
        <div className="body">
            <h1>Contact Us</h1>
            <p>
                sdsfgggdrgdgd@email.com <br></br>
                1398923972397492794

            </p>
            <div className='horizontal-flex' >
                <IconButton className='sm-icon' aria-label="Facebook" href="https://www.facebook.com/LittleRogueMelbourne/">
                    <FacebookIcon  fontSize='large' />
                </IconButton>
                <IconButton className='sm-icon' aria-label="Instagram" href="https://www.instagram.com/littleroguemelbourne/">
                    <InstagramIcon  fontSize='large' />
                </IconButton>

            </div>

        </div>
    );
}
export default ContactPage;