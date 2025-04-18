import React from 'react';

function LogIn() {
    return (
      <div
        data-layer="Log in"
        className="LogIn"
        style={{
            width: 1440,
            height: 1056,
            position: 'relative',
            background: '#222222',
            overflow: 'hidden',
        }}
    >
        <div
            data-layer="Ellipse 1"
            className="Ellipse1"
            style={{
                width: 644,
                height: 632,
                left: -244,
                top: 563,
                position: 'absolute',
                opacity: 0.30,
                background: '#00C8C8',
                boxShadow: '200px 200px 200px ',
                borderRadius: 9999,
                filter: 'blur(100px)',
            }}
        />
        <div
            data-layer="Ellipse 2"
            className="Ellipse2"
            style={{
                width: 746,
                height: 560,
                left: 244,
                top: -302,
                position: 'absolute',
                opacity: 0.30,
                background: '#003366',
                boxShadow: '200px 200px 200px ',
                borderRadius: 9999,
                filter: 'blur(100px)',
            }}
        />
        <div
            data-layer="Ellipse 3"
            className="Ellipse3"
            style={{
                width: 582,
                height: 527,
                left: 958,
                top: -208,
                position: 'absolute',
                opacity: 0.30,
                background: '#FF9800',
                boxShadow: '200px 200px 200px ',
                borderRadius: 9999,
                filter: 'blur(100px)',
            }}
        />
        <div
            data-layer="Ellipse 3"
            className="Ellipse3"
            style={{
                width: 644,
                height: 632,
                left: 915,
                top: 300,
                position: 'absolute',
                opacity: 0.30,
                background: '#003366',
                boxShadow: '200px 200px 200px ',
                borderRadius: 9999,
                filter: 'blur(100px)',
            }}
        />
        <div
            data-layer="Createadminacount"
            className="Createadminacount"
            style={{
                width: 665,
                height: 66,
                left: 387,
                top: 844,
                position: 'absolute',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <span
                style={{
                    color: '#00C8C8',
                    fontSize: 24,
                    fontFamily: 'Outfit',
                    fontWeight: '500',
                    lineHeight: 36,
                    wordWrap: 'break-word',
                }}
            >
                Not registered yet?{' '}
            </span>
            <span
                style={{
                    color: '#FF9800',
                    fontSize: 24,
                    fontFamily: 'Outfit',
                    fontWeight: '500',
                    textDecoration: 'underline',
                    lineHeight: 36,
                    wordWrap: 'break-word',
                }}
            >
                Sign up
            </span>
            <span
                style={{
                    color: 'white',
                    fontSize: 24,
                    fontFamily: 'Outfit',
                    fontWeight: '500',
                    lineHeight: 36,
                    wordWrap: 'break-word',
                }}
            >
                {' '}
                for your admin account
            </span>
        </div>
        <div
            data-layer="loginbutton"
            className="Loginbutton"
            style={{
                width: 466,
                height: 67,
                left: 487,
                top: 771,
                position: 'absolute',
                opacity: 0.90,
                background: '#FF9800',
                borderRadius: 20,
            }}
        />
        <div
            data-layer="Login"
            className="Login"
            style={{
                width: 344,
                height: 168,
                left: 548,
                top: 721,
                position: 'absolute',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 36,
                fontFamily: 'Outfit',
                fontWeight: '700',
                lineHeight: 54,
                wordWrap: 'break-word',
            }}
        >
            Log in{' '}
        </div>
        <div
            data-layer="Forgot Password?"
            className="ForgotPassword"
            style={{
                width: 246,
                height: 66,
                left: 951,
                top: 661,
                position: 'absolute',
                textAlign: 'right',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: '#00C8C8',
                fontSize: 24,
                fontFamily: 'Outfit',
                fontWeight: '500',
                lineHeight: 36,
                wordWrap: 'break-word',
            }}
        >
            Forgot Password?{' '}
        </div>
        <div
            data-layer="passwordbox"
            className="Passwordbox"
            style={{
                width: 954,
                height: 67,
                left: 244,
                top: 586,
                position: 'absolute',
                opacity: 0.80,
                background: '#003366',
                borderRadius: 20,
            }}
        />
        <div
            data-layer="Frame"
            className="Frame"
            style={{
                left: 1135,
                top: 603,
                position: 'absolute',
            }}
        >
            <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.5">
                    <g opacity="0.5">
                        <path
                            d="M16.5 20.625C17.594 20.625 18.6432 20.1904 19.4168 19.4168C20.1904 18.6432 20.625 17.594 20.625 16.5C20.625 15.406 20.1904 14.3568 19.4168 13.5832C18.6432 12.8096 17.594 12.375 16.5 12.375C15.406 12.375 14.3568 12.8096 13.5832 13.5832C12.8096 14.3568 12.375 15.406 12.375 16.5C12.375 17.594 12.8096 18.6432 13.5832 19.4168C14.3568 20.1904 15.406 20.625 16.5 20.625Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.81917 15.7396C3.86517 9.592 9.66354 5.15625 16.5014 5.15625C23.3352 5.15625 29.1308 9.58787 31.1795 15.73C31.3445 16.2277 31.3445 16.764 31.1795 17.2604C29.1349 23.408 23.3352 27.8438 16.4987 27.8438C9.66492 27.8438 3.86792 23.4121 1.82054 17.27C1.6552 16.7733 1.6552 16.2364 1.82054 15.7396H1.81917ZM23.7188 16.5C23.7188 18.4145 22.9582 20.2506 21.6045 21.6044C20.2507 22.9582 18.4146 23.7188 16.5 23.7188C14.5855 23.7188 12.7494 22.9582 11.3956 21.6044C10.0418 20.2506 9.28129 18.4145 9.28129 16.5C9.28129 14.5855 10.0418 12.7494 11.3956 11.3956C12.7494 10.0418 14.5855 9.28125 16.5 9.28125C18.4146 9.28125 20.2507 10.0418 21.6045 11.3956C22.9582 12.7494 23.7188 14.5855 23.7188 16.5Z"
                            fill="white"
                        />
                    </g>
                </g>
            </svg>
        </div>
        <div
            data-layer="yourpassword..."
            className="Yourpassword"
            style={{
                width: 496,
                height: 40,
                left: 272,
                top: 600,
                position: 'absolute',
                opacity: 0.50,
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Outfit',
                fontWeight: '500',
                lineHeight: 30,
                wordWrap: 'break-word',
            }}
        >
            yourpassword...
        </div>
        <div
            data-layer="Password"
            className="Password"
            style={{
                width: 587,
                height: 55,
                left: 244,
                top: 516,
                position: 'absolute',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 24,
                fontFamily: 'Outfit',
                fontWeight: '500',
                lineHeight: 36,
                wordWrap: 'break-word',
            }}
        >
            Password{' '}
        </div>
        <div
            data-layer="emailbox"
            className="Emailbox"
            style={{
                width: 954,
                height: 67,
                left: 243,
                top: 434,
                position: 'absolute',
                opacity: 0.80,
                background: '#003366',
                borderRadius: 20,
            }}
        />
        <div
            data-layer="youremail@email.com..."
            className="YouremailEmailCom"
            style={{
                width: 496,
                height: 40,
                left: 272,
                top: 448,
                position: 'absolute',
                opacity: 0.50,
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Outfit',
                fontWeight: '500',
                lineHeight: 30,
                wordWrap: 'break-word',
            }}
        >
            youremail@email.com...
        </div>
        <div
            data-layer="Email"
            className="Email"
            style={{
                width: 587,
                height: 55,
                left: 243,
                top: 364,
                position: 'absolute',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 24,
                fontFamily: 'Outfit',
                fontWeight: '500',
                lineHeight: 36,
                wordWrap: 'break-word',
            }}
        >
            Email
        </div>
        <div
            data-layer="Log in with your email"
            className="LogInWithYourEmail"
            style={{
                width: 409,
                height: 168,
                left: 515,
                top: 251,
                position: 'absolute',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 32,
                fontFamily: 'Outfit',
                fontWeight: '500',
                lineHeight: 48,
                wordWrap: 'break-word',
            }}
        >
            Log in with your email
        </div>
        <div
            data-layer="Frame"
            className="Frame"
            style={{
                width: 139,
                height: 139,
                left: 650,
                top: 167,
                position: 'absolute',
                overflow: 'hidden',
            }}
        >
            <div
                data-layer="user"
                className="User"
                style={{
                    width: 112.94,
                    height: 112.94,
                    left: 13.03,
                    top: 13.03,
                    position: 'absolute',
                    background: 'white',
                }}
            />
        </div>
        <div
            data-layer="FACEPASS"
            className="Facepass"
            style={{
                width: 344,
                height: 168,
                left: 243,
                top: 34,
                position: 'absolute',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: '#FF9800',
                fontSize: 48,
                fontFamily: 'Outfit',
                fontWeight: '300',
                lineHeight: 72,
                letterSpacing: 7.20,
                wordWrap: 'break-word',
            }}
        >
            FACEPASS
        </div>
    </div>
  );
  }

  export default LogIn;
  