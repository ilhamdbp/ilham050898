import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = props => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/ilham">
            <a style={linkStyle}>Ilham Dwi Bagus Prakoso</a>
        </Link>
    </div>
);

export default Header;