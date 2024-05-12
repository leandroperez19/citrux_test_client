import { FC, ReactNode } from "react";
import { NotAuthLayoutWrapper } from "./NotAuth.layout.styled";
import { useScreen } from "@/hooks/useScreen";
import logo from "@/assets/static/logo.png";
import googleIcon from "@/assets/icons/google-icon-logo.svg";
import authBackground from "@/assets/static/auth-background.jpg";
import { Link } from "react-router-dom";
import Button from "@components/Button/Button";

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
    const isSignIn = page === "sign-in";

    return (
        <NotAuthLayoutWrapper>
            <div className="top-left mx-auto max-w-lg lg:mx-0">
                <div className="logo flex gap-2 font-bold items-center text-lg">
                    <img src={logo} alt="logo" className="w-10 h-10" />
                    <h2>SUMMARIZER</h2>
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
                { ['sign-in', 'sign-up'].includes(page) && 
                    <>
                        <span className="or mt-5 text-xs">Or</span>
                        <div className="extra-auth-options mt-5">
                            <Button
                                tailwindClass="flex gap-5 items-center grow px-5 w-full justify-center"
                                color="transparent"
                            >
                                <img src={googleIcon} alt="google-icon" className="w-5 h-5"/>
                                <span>
                                    {isSignIn ? "Sign in" : "Sign up"} with Google
                                </span>
                            </Button>
                        </div>
                    </>
                }
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
