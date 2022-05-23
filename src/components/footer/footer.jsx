import React from 'react';
import './style-footer.css';

export default function Footer() {
    return <footer id='contact'>

        <div className="footer-text">
            <p>2022 Gonzalo Soriano | gonzalosofran@hotmail.com | 46023 Valencia</p>

        </div>
        <div className="social-icons">
            
            <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_134_123)">
                    <rect x="5.67676" y="6.11328" width="44.6098" height="42.0312" rx="4.12576" fill="#0883F4" />
                    <path d="M38.586 13.4941C39.3896 13.4941 40.1603 13.8134 40.7285 14.3816C41.2967 14.9498 41.6159 15.7204 41.6159 16.524V37.733C41.6159 38.5366 41.2967 39.3072 40.7285 39.8754C40.1603 40.4437 39.3896 40.7629 38.586 40.7629H17.377C16.5735 40.7629 15.8028 40.4437 15.2346 39.8754C14.6664 39.3072 14.3472 38.5366 14.3472 37.733V16.524C14.3472 15.7204 14.6664 14.9498 15.2346 14.3816C15.8028 13.8134 16.5735 13.4941 17.377 13.4941H38.586ZM37.8286 36.9755V28.9464C37.8286 27.6366 37.3082 26.3804 36.3821 25.4543C35.4559 24.5281 34.1997 24.0077 32.8899 24.0077C31.6022 24.0077 30.1024 24.7955 29.3753 25.9772V24.2956H25.1486V36.9755H29.3753V29.5069C29.3753 28.3404 30.3145 27.386 31.481 27.386C32.0435 27.386 32.583 27.6095 32.9807 28.0072C33.3785 28.405 33.6019 28.9444 33.6019 29.5069V36.9755H37.8286ZM20.2251 21.9171C20.9001 21.9171 21.5474 21.649 22.0247 21.1717C22.502 20.6944 22.7702 20.0471 22.7702 19.3721C22.7702 17.9632 21.634 16.8118 20.2251 16.8118C19.5461 16.8118 18.8949 17.0816 18.4147 17.5617C17.9346 18.0418 17.6649 18.6931 17.6649 19.3721C17.6649 20.781 18.8162 21.9171 20.2251 21.9171ZM22.3308 36.9755V24.2956H18.1345V36.9755H22.3308Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d_134_123" x="0.261692" y="0.698215" width="57.5029" height="54.9243" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="1.03144" dy="1.03144" />
                        <feGaussianBlur stdDeviation="3.22325" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_123" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_123" result="shape" />
                    </filter>
                </defs>
            </svg>

            <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_134_126)">
                    <rect x="5.87134" y="6.11328" width="44.0941" height="42.0312" rx="4.12576" fill="#9A08F3" />
                    <path d="M27.9183 11.979C25.9289 11.979 23.9589 12.3709 22.121 13.1322C20.283 13.8935 18.6129 15.0094 17.2062 16.4161C14.3651 19.2572 12.769 23.1105 12.769 27.1283C12.769 33.8243 17.1169 39.5053 23.1312 41.5201C23.8886 41.6413 24.131 41.1717 24.131 40.7627C24.131 40.4142 24.131 39.4598 24.131 38.2024C19.9347 39.1114 19.0408 36.1724 19.0408 36.1724C18.344 34.4151 17.3593 33.9455 17.3593 33.9455C15.9807 33.0062 17.4653 33.0365 17.4653 33.0365C18.9803 33.1426 19.7832 34.5969 19.7832 34.5969C21.1012 36.8996 23.3281 36.2179 24.1916 35.8543C24.328 34.8696 24.7218 34.203 25.146 33.8243C21.7829 33.4456 18.2531 32.1427 18.2531 26.3708C18.2531 24.6893 18.8288 23.341 19.8135 22.2654C19.662 21.8866 19.1317 20.3111 19.965 18.266C19.965 18.266 21.2375 17.8569 24.131 19.8112C25.3278 19.4779 26.6306 19.3113 27.9183 19.3113C29.206 19.3113 30.5089 19.4779 31.7057 19.8112C34.5992 17.8569 35.8717 18.266 35.8717 18.266C36.7049 20.3111 36.1747 21.8866 36.0232 22.2654C37.0079 23.341 37.5836 24.6893 37.5836 26.3708C37.5836 32.1579 34.0386 33.4304 30.6604 33.8091C31.2057 34.2788 31.7057 35.2029 31.7057 36.6118C31.7057 38.6418 31.7057 40.2779 31.7057 40.7627C31.7057 41.1717 31.948 41.6565 32.7207 41.5201C38.7349 39.4901 43.0676 33.8243 43.0676 27.1283C43.0676 25.1389 42.6758 23.1689 41.9145 21.3309C41.1531 19.4929 40.0372 17.8229 38.6305 16.4161C37.2238 15.0094 35.5537 13.8935 33.7157 13.1322C31.8777 12.3709 29.9078 11.979 27.9183 11.979Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d_134_126" x="0.456272" y="0.698215" width="56.987" height="54.9243" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="1.03144" dy="1.03144" />
                        <feGaussianBlur stdDeviation="3.22325" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_126" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_126" result="shape" />
                    </filter>
                </defs>
            </svg>

            <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_134_129)">
                    <rect x="5.55005" y="6.11328" width="44.0941" height="42.0312" rx="4.12576" fill="#00D3F0" />
                    <path d="M43.4433 18.0391C42.2768 18.5694 41.0194 18.9178 39.7166 19.0844C41.0497 18.2815 42.0799 17.009 42.5646 15.4789C41.3073 16.2364 39.9135 16.7666 38.444 17.0696C37.2472 15.7667 35.5657 15.0093 33.6569 15.0093C30.0968 15.0093 27.1881 17.9179 27.1881 21.5083C27.1881 22.0234 27.2487 22.5233 27.3548 22.993C21.9616 22.7203 17.1593 20.1297 13.9628 16.2061C13.4022 17.1605 13.0841 18.2815 13.0841 19.4632C13.0841 21.7204 14.2203 23.7201 15.9776 24.8563C14.902 24.8563 13.9022 24.5533 13.0235 24.0989C13.0235 24.0989 13.0235 24.0989 13.0235 24.1443C13.0235 27.2954 15.2656 29.9313 18.2349 30.5222C17.6895 30.6736 17.1138 30.7494 16.523 30.7494C16.114 30.7494 15.7049 30.7039 15.3111 30.6282C16.1291 33.1884 18.5076 35.0972 21.3708 35.1427C19.159 36.9 16.3564 37.9302 13.2962 37.9302C12.7811 37.9302 12.2661 37.8999 11.751 37.8393C14.6293 39.6875 18.0531 40.7631 21.7192 40.7631C33.6569 40.7631 40.2165 30.8554 40.2165 22.2658C40.2165 21.978 40.2165 21.7053 40.2014 21.4174C41.4739 20.5085 42.5646 19.3571 43.4433 18.0391Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d_134_129" x="0.134983" y="0.698215" width="56.987" height="54.9243" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="1.03144" dy="1.03144" />
                        <feGaussianBlur stdDeviation="3.22325" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_129" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_129" result="shape" />
                    </filter>
                </defs>
            </svg>

            <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_134_132)">
                    <rect x="6.229" y="6.11328" width="44.0941" height="42.0312" rx="4.12576" fill="#11D600" />
                    <path d="M28.3368 11.979C20.0653 11.979 13.3238 18.7204 13.3238 26.992C13.3238 29.6431 14.0207 32.2185 15.3235 34.4909L13.2026 42.2776L21.156 40.187C23.3527 41.3838 25.822 42.0201 28.3368 42.0201C36.6083 42.0201 43.3497 35.2786 43.3497 27.0071C43.3497 22.9925 41.7894 19.2204 38.9564 16.3874C36.1235 13.5394 32.3513 11.979 28.3368 11.979ZM28.3519 14.5089C31.6848 14.5089 34.8055 15.8118 37.1688 18.1751C39.517 20.5384 40.8198 23.6743 40.8198 27.0071C40.8198 33.8849 35.2146 39.475 28.3368 39.475C26.0947 39.475 23.898 38.8841 21.9892 37.7328L21.5347 37.4753L16.8082 38.7175L18.0656 34.1121L17.7626 33.6273C16.5203 31.6731 15.8538 29.3552 15.8538 26.992C15.8689 20.1142 21.459 14.5089 28.3519 14.5089ZM23.0194 20.0536C22.777 20.0536 22.368 20.1445 22.0195 20.5232C21.6862 20.9019 20.7015 21.826 20.7015 23.6591C20.7015 25.5073 22.0498 27.2798 22.2165 27.5373C22.4286 27.7949 24.8827 31.5822 28.6549 33.188C29.5487 33.597 30.2456 33.8243 30.791 33.9909C31.6848 34.2788 32.5028 34.2333 33.1543 34.1424C33.8814 34.0364 35.3661 33.2335 35.6842 32.3548C36.0023 31.4761 36.0023 30.7338 35.9114 30.5672C35.8054 30.4157 35.563 30.3248 35.1843 30.1582C34.8055 29.9461 32.9573 29.0371 32.624 28.9159C32.2756 28.7947 32.0635 28.7341 31.7757 29.0977C31.5333 29.4764 30.8061 30.3248 30.594 30.5672C30.3668 30.8247 30.1547 30.855 29.7911 30.6732C29.3972 30.4763 28.1853 30.0824 26.7613 28.8099C25.6402 27.81 24.8979 26.5829 24.6707 26.2042C24.4889 25.8406 24.6555 25.6134 24.8373 25.4467C25.0039 25.2801 25.2463 25.0074 25.3978 24.7802C25.5948 24.5681 25.6554 24.4014 25.7766 24.159C25.8977 23.9015 25.8371 23.6894 25.7463 23.5076C25.6554 23.341 24.8979 21.4625 24.5798 20.7201C24.2768 19.993 23.9738 20.0839 23.7314 20.0687C23.5193 20.0687 23.2769 20.0536 23.0194 20.0536Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d_134_132" x="0.813938" y="0.698215" width="56.9873" height="54.9243" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="1.03144" dy="1.03144" />
                        <feGaussianBlur stdDeviation="3.22325" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_132" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_132" result="shape" />
                    </filter>
                </defs>
            </svg>

        </div>
        <div className="footer-text">
            <p><a href="">Terms of use</a> - <a href="">Privacy</a> - <a href="">Cookies</a> </p>

        </div>
    </footer>;
}