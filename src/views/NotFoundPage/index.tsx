import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            404 Not Found
            <Link to="/">Navigate to Home Page</Link>
        </div>
    );
}
