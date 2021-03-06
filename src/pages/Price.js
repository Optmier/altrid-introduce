import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionFrame from '../components/SectionFrame';
import '../styles/price_page.scss';
import styled from 'styled-components';
import PriceData from '../datas/PriceData.json';
import MenuData from '../datas/MenuData.json';
import ChannelService from '../components/ChannelIO/ChannelService';
import Radio from '@material-ui/core/Radio';
import { Link, withRouter } from 'react-router-dom';

const BadgeButton = styled.a`
    background-color: ${(props) => (props.type === 'group' ? '#3b168a' : 'white')};
    color: ${(props) => (props.type === 'group' ? 'white' : '#1d3853')};
    cursor: pointer;
    width: 510px;
    padding: 0.5rem 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 11px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
    transition: all 0.3s;
    & .badge-left {
        display: flex;
        align-items: center;

        & p {
            padding-left: 1rem;
            font-size: 0.875rem;
            font-weight: 600;
        }
    }
    & .badge-right {
        display: flex;
        align-items: center;

        & p {
            padding-right: 1rem;
            font-size: 0.7rem;
            font-weight: 400;
            color: $fistColor;
        }
    }

    &:hover {
        & .badge-right {
            transition: all 0.5s;
            margin-right: -5px;
        }
    }

    @media (min-width: 0px) and (max-width: 768px) {
        & {
            width: 100%;
            box-sizing: border-box;
            & .badge-left {
                width: 85%;
            }
            & .badge-right {
                & > p {
                    display: none;
                }
            }
        }
    }
`;

function Price({ history }) {
    const [priceState, setPriceState] = useState('personal');

    const handleChange = (event) => {
        setPriceState(event.target.value);
    };

    const goToPayments = () => {
        history.push('/payment');
    };

    return (
        <>
            <Helmet>
                <title>Altrid, ???????????? | ???????????? ?????? ?????? ?????????</title>
            </Helmet>
            <SectionFrame id="price_section_header">
                <div className="header-text">
                    ?????????????????? ????????????,
                    <br />
                    ?????? ????????? ??????????????????.
                </div>
                <div className="desc-text">
                    ?????? ?????? ??????, ?????? ????????? ????????? <br />
                    ????????? ???????????? ?????????????????????.
                </div>
                {/* <div className="header-btn">
                    <button onClick={goToPayments}>?????? ????????????</button>
                </div> */}
            </SectionFrame>
            <SectionFrame id="price_section_1">
                <div className="price-title">
                    <div className="title-left">
                        <BadgeButton
                            type={priceState}
                            href="https://www.notion.so/1b2bb0974ccb4148bc78e945a7c51413"
                            target="_blank"
                            alt="badge"
                        >
                            <div className="badge-left">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
                                        fill="#E6F6F6"
                                    />
                                    <path
                                        d="M16.9176 8.02507L10.285 14.2859L8.50025 12.3272C7.71329 11.7001 6.47633 12.4305 7.03829 13.3707L9.16003 16.7903C9.49699 17.2077 10.285 17.6251 11.0709 16.7903C11.4079 16.3729 17.8166 8.9642 17.8166 8.9642C18.6046 8.12942 17.5926 7.39898 16.9176 8.02507V8.02507Z"
                                        fill="#13E2A1"
                                    />
                                </svg>
                                <p>?????? ???????????? ??????, ????????? ???????????? ???????????????!</p>
                            </div>
                            <div className="badge-right">
                                <p>?????? ???????????? </p>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z"
                                        fill="#13E2A1"
                                    />
                                </svg>
                            </div>
                        </BadgeButton>
                    </div>
                    <div className="title-right">
                        <div>
                            <Radio
                                checked={priceState === 'personal'}
                                onChange={handleChange}
                                value="personal"
                                color="default"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'personal' }}
                            />
                            ??????
                        </div>

                        <div>
                            <Radio
                                checked={priceState === 'group'}
                                onChange={handleChange}
                                value="group"
                                color="default"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'group' }}
                            />
                            ??????
                        </div>
                    </div>
                </div>

                <div className="price-menu">
                    <div className="col">
                        <div>
                            <div className="menu-header">?????? ??????</div>
                            <div className="menu-desc">
                                ????????? ??????????????? 10%??? ???????????? ?????? ????????????, ?????? 1?????? ??? ???????????? ???????????????.
                            </div>
                        </div>
                        <button
                            className="price-button"
                            onClick={() => {
                                // alert('?????? ????????????!!\n????????? jun094@optmier.com?????? ????????????.');
                                // ChannelService.openChat(undefined, '???????????? ???????????? ????????????.');
                                ChannelService.showMessenger();
                            }}
                        >
                            ?????? ????????????
                        </button>
                    </div>
                    {Object.keys(MenuData).map((i, idx) => (
                        <div key={idx} className="col-box">
                            <div className="menu-box-title ">
                                <div className="header" id={'color-' + i}>
                                    {i}
                                </div>

                                <svg
                                    onClick={goToPayments}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z"
                                        fill="#707070"
                                    />
                                </svg>
                                <Link to={`/pricing/details?plan=${i}`}>
                                    <div className="mobile-header-more">
                                        ?????? ??? ????????? ??????
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z"
                                                fill="#707070"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                            <div className="menu-box-price">
                                <div className="pre-price">
                                    <span className="text">{MenuData[i]['price']}</span> <span>???</span>
                                </div>
                                <div className="current-price" id={'color-' + i}>
                                    {MenuData[i]['discount_' + priceState]}
                                    <span>???</span>
                                    <span style={{ color: '#828282', paddingLeft: '10px' }}>(?????????/???)</span>
                                </div>
                            </div>
                            <div className="menu-box-desc">{MenuData[i]['desc']}</div>
                        </div>
                    ))}
                </div>

                <div className="price-table">
                    <div className="col-desc">
                        {Object.keys(PriceData['Free']).map((i) =>
                            i[0] === 'h' ? (
                                <div key={i}>
                                    <div className="row-hr"></div>
                                    <div className="row-left-title">{PriceData['Free'][i]}</div>
                                </div>
                            ) : (
                                <div key={i} className="row-left">
                                    {i}
                                </div>
                            ),
                        )}
                    </div>
                    {Object.keys(PriceData).map((i) => (
                        <div key={i} className="col">
                            {Object.keys(PriceData[i]).map((j, idx) =>
                                PriceData[i][j] === '????????? ??????' ||
                                PriceData[i][j] === '?????????/?????? ??????' ||
                                PriceData[i][j] === '????????? ??????' ||
                                PriceData[i][j] === '??????/AI ??????' ||
                                PriceData[i][j] === '?????? ??????' ? (
                                    i === 'Free' ? (
                                        <div key={idx}>
                                            <div className="row-hr"></div>
                                            <div className="row-title" id="color-Free">
                                                {i}
                                            </div>
                                        </div>
                                    ) : i === 'Standard' ? (
                                        <div key={idx}>
                                            <div className="row-hr"></div>
                                            <div className="row-title" id="color-Standard">
                                                {i}
                                            </div>
                                        </div>
                                    ) : (
                                        <div key={idx}>
                                            <div className="row-hr"></div>
                                            <div className="row-title" id="color-Premium">
                                                {i}
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div key={idx} className="row">
                                        {PriceData[i][j] === 1 ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.99991 16.1698L4.82991 11.9998L3.40991 13.4098L8.99991 18.9998L20.9999 6.99984L19.5899 5.58984L8.99991 16.1698Z"
                                                    fill="#3B168A"
                                                />
                                            </svg>
                                        ) : PriceData[i][j] === '-' ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 12.5H5V11H15V12.5Z" fill="#949494" />
                                            </svg>
                                        ) : (
                                            PriceData[i][j]
                                        )}
                                    </div>
                                ),
                            )}
                        </div>
                    ))}
                </div>

                <div className="price-footer"></div>
            </SectionFrame>
        </>
    );
}

export default withRouter(Price);
