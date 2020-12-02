import React from 'react';
import '../styles/error_page.scss';
import { withRouter } from 'react-router-dom';

function Error({ history }) {
    return (
        <>
            <div className="error-root">
                <div className="error-wrapper">
                    <h1>404 Error :(</h1>

                    <p>
                        존재하지 않는 주소를 입력하셨거나, <br />
                        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
                    </p>

                    <button
                        onClick={() => {
                            history.replace('/');
                        }}
                    >
                        홈으로 이동
                        <svg xmlns="http://www.w3.org/2000/svg" width="30.414" height="9.978" viewBox="0 0 30.414 9.978">
                            <path id="icon" d="M0 0h28l-8.27 8.27" fill="none" stroke="#fff" strokeWidth="2px" transform="translate(0 1)" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default withRouter(Error);
