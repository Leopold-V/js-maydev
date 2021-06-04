import { auth } from '../app/firebase';

export const LoginPage = () => {
    const handleClick = () => {
        auth.signInWithEmailAndPassword('leopold12d12@gmail.com', 'nusgpmfg79');
    }
    return (
        <button onClick={handleClick} className="btn-primary text-gray font-light">
           Login 
        </button>
    )
}
