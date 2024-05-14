import { FC, ReactNode, useEffect } from "react";
import { NotAuthLayoutWrapper } from "./NotAuth.layout.styled";
import { useScreen } from "@/hooks/useScreen";
import logo from "@/assets/static/logo-full.png";
// import googleIcon from "@/assets/icons/google-icon-logo.svg";
import authBackground from "@/assets/static/auth-background.jpg";
import { Link, useNavigate } from "react-router-dom";
// import Button from "@components/Button/Button";
import { useUser } from "@/hooks/useUser";
import { test } from "@/services/authService";

// todo google sign in

type NotAuthLayoutProps = {
    page: "sign-in" | "sign-up" | "recover";
    children: ReactNode;
};

const getLayoutContent = (page: NotAuthLayoutProps["page"]) => {
    const map = {
        "sign-in": {
            title: "Welcome Back!",
            subtitle: "Don't have an account?",
            link: {
                text: "Sign Up",
                path: "/sign-up",
            },
        },
        "sign-up": {
            title: "Join Us!",
            subtitle: "Already have an account?",
            link: {
                text: "Sign In",
                path: "/sign-in",
            },
        },
        recover: {
            title: "Find your account",
            subtitle:
                "Enter the email associated with your account to change your password. Or",
            link: {
                text: "Sign Up",
                path: "/sign-up",
            },
        },
    } as const;
    return map[page] ?? map["sign-in"];
};

const NotAuthLayout: FC<NotAuthLayoutProps> = ({ page, children }) => {
    const { isMobile } = useScreen(1024);
    // const isSignIn = page === "sign-in";

    const { user, userLoading } = useUser();
    const navigate = useNavigate();

    const tryReq = async () => {
        const res = await test();
        console.log(res);
    }

    // const googleSign = async () => {
    //     window.open('http://localhost:5000/auth/google/callback', "_self")
    // }

    useEffect(() => {
        if(!user) return;
        navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    if(user || userLoading) return

    return (
        <NotAuthLayoutWrapper>
            <div className="top-left mx-auto max-w-lg lg:mx-0">
                <div className="logo flex gap-2 font-bold items-center text-lg">
                    <img src={logo} alt="logo" className="h-12" />
                </div>
                <div className="message mt-5">
                    <h3 className="text-2xl font-bold">
                        {getLayoutContent(page).title}
                    </h3>
                    <p className="text-sm">
                        {getLayoutContent(page).subtitle}{" "}
                        <Link
                            to={getLayoutContent(page).link.path}
                            className="font-medium"
                        >
                            {getLayoutContent(page).link.text}
                        </Link>
                    </p>
                </div>
                {children}
                <button onClick={tryReq}>test here</button>
                {/* { ['sign-in', 'sign-up'].includes(page) && 
                    <>
                        <span className="or mt-5 text-xs">Or</span>
                        <div className="extra-auth-options mt-5">
                            <Button
                                tailwindClass="flex gap-5 items-center grow px-5 w-full justify-center"
                                color="transparent"
                                // onClick={googleSign}
                            >
                                <img src={googleIcon} alt="google-icon" className="w-5 h-5"/>
                                <span>
                                    {isSignIn ? "Sign in" : "Sign up"} with Google
                                </span>
                            </Button>
                        </div>
                    </>
                } */}
            </div>
            {!isMobile && (
                <div className="bottom-right">
                    <img
                        src={authBackground}
                        alt="background"
                        className="h-full w-full object-cover"
                    />
                </div>
            )}
        </NotAuthLayoutWrapper>
    );
};

export default NotAuthLayout;
