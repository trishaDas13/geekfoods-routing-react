import './Footer.css';

function Footer(){
 return(
    <footer>
        <div className="icon">
            <svg width="42" height="42" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="#0d967f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3m-2-10a7 7 0 1 0-14 0"/>
            </svg>
            <p>logoipsum</p>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Incidunt consequuntur amet culpa cum itaque neque.</p>
        <ul>
            <li>About</li>
            <li>Careers</li>
            <li>History</li>
            <li>Servies</li>
            <li>Projects</li>
            <li>Blogs</li>
        </ul>
        <ul>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-github"></i></li>
            <li><i class="fa-brands fa-dribbble"></i></li>
        </ul>
    </footer>
 );
}

export default Footer;