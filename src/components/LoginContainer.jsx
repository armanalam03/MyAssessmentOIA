import React, {useEffect} from 'react'
import '../styles/LoginContainer.css'
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../auth/firebaseAuthConfig'
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import GoogleIcon from '../assets/icons/google-icon.png'
import AppleIcon from '../assets/icons/apple-icon.png'
import GitHubIconGrey from '../assets/icons/github-icon-grey.png'
import TwitterIconGrey from '../assets/icons/twitter-icon-grey.png'
import LinkedInIconGrey from '../assets/icons/linkedin-icon-grey.png'
import DiscordIconGrey from '../assets/icons/discord-icon-grey.png'
import toast from 'react-hot-toast';

function LoginContainer() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then( data => {
      const user = data.user;
      localStorage.setItem('userAccessToken', user.accessToken);
      localStorage.setItem('userName', user.displayName);
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userProfilePhoto', user.photoURL);
    }).catch((error) => {
      console.error(error)
    });
  };

  return (
    <section className="login-container">
      <h1 className="signin-heading">Sign In</h1>
      <h4 className="signin-description">Sign in to your account</h4>
      <div className="SSO-providers-container">
        <div className="SSO-provider" onClick={() => signInWithGoogle()} >
          <img src={GoogleIcon} alt="Google" />
          <span>
            Sign in with Google
          </span>
        </div>
        <div className="SSO-provider">
          <img src={AppleIcon} alt="Apple" />
          <span>
            Sign in with Apple
          </span>
        </div>
      </div>
      {/* <LoginForm /> */}
      <form>
        <label>
          Email address
          <input type="email" name="email" className='input' />
        </label>
        <label>
          Password
          <input type="password" name="password" className='input' />
        </label>
        <span className="forgot-password">
          Forgot password?
        </span>
        <div className="signin-btn" onClick={() => toast.error("Login with Google")}>
          <span>Sign In</span>
        </div>
      </form>
      <div className="register-container">
        <span>
        Don’t have an account?
        </span>
        <span className="register-link">
          Register here
        </span>
      </div>
      <section className="social-media-handles-container footer">
        <img src={GitHubIconGrey} alt="Github" className="social-media-handle" />
        <img src={TwitterIconGrey} alt="Twitter" className="social-media-handle" />
        <img src={LinkedInIconGrey} alt="LinkedIn" className="social-media-handle" />
        <img src={DiscordIconGrey} alt="Discord" className="social-media-handle" />
      </section>
    </section>
  )
}

export default LoginContainer