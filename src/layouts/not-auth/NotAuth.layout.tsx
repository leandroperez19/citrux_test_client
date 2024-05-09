import { FC, ReactNode } from "react";
import { NotAuthLayoutWrapper } from "./NotAuth.layout.styled";
import { useScreen } from "@/hooks/useScreen";
import logo from "@/assets/static/logo.png";
import googleIcon from '@/assets/icons/google-icon-logo.svg';
import authBackground from '@/assets/static/auth-background.jpg';
import { Link } from "react-router-dom";

type NotAuthLayoutProps = {
    page: "sign-in" | "sign-up";
    children: ReactNode;
};

const NotAuthLayout: FC<NotAuthLayoutProps> = ({ page, children }) => {
    const { isMobile } = useScreen(1024);
    const isSignIn = page === "sign-in";

    return (
        <NotAuthLayoutWrapper>
            <div className="top-left mx-auto max-w-lg lg:mx-0">
                <div className="logo flex gap-2 font-bold items-center text-lg">
                    <img src={logo} alt="logo" className="w-10 h-10"/>
                    <h2>SUMMARIZER</h2>
                </div>
                <div className="message mt-5">
                    <h3 className="text-2xl font-bold">{isSignIn ? "Welcome Back!" : "Join Us!"}</h3>
                    <p className="text-sm">
                        {`${isSignIn ? "Don't" : "Already"} have an account?`}{" "}
                        <Link to={isSignIn ? "/sign-up" : "/sign-in"} className="font-medium">
                            {isSignIn ? "Sign Up" : "Sign In"}
                        </Link>
                    </p>
                </div>
                { children }
                <span className="or mt-5 text-xs">
                    Or
                </span>
                <div className="extra-auth-options mt-5">
                    <button className="flex gap-5 items-center grow px-5 w-full justify-center">
                        <img src={googleIcon} alt="google-icon" className="w-5 h-5"/>
                        <span>{isSignIn ? 'Sign in' : 'Sign up'} with Google</span>
                    </button>
                </div>
            </div>
            {!isMobile && 
                <div className="bottom-right">
                    <img src={authBackground} alt="background" className="h-full w-full object-cover"/>
                </div>
            }
        </NotAuthLayoutWrapper>
    );
};

export default NotAuthLayout;
