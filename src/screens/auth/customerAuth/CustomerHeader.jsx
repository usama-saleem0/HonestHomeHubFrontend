import React from 'react'
import { useState } from 'react';
import useTheme from '../../../hooks/theme';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import CustomerLogin from './CustomerLogin';
import CustomerSignUp from './CustomerSignUp';
import { user_color } from '../../../utils/color';

const CustomerHeader = ({ submitHandle }) => {
    const theme = useTheme()
    const [isLogin, setIsLogin] = useState(true);
    const [setIndex, setSetIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const btn_data = [
        {
            name: 'Login',
        },
        {
            name: 'SignUp',
        },
    ]


    useEffect(() => {

        if (setIndex === null) {
            setSetIndex(0);
        }
    }, []);
    const handleToggle = (e, i) => {
        const { value } = e
        setSetIndex(i);
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    return (
        <Stack style={{marginLeft:"-50px"}}>

            <Stack justifyContent={'center'} alignItems={'center'}>
                <Stack sx={{
                    border: `1px solid black`,
                    borderRadius: '10px',
                    width: "230px"

                }}

                    flexDirection={'row'} alignItems={'center'}>
                    {
                        btn_data.map((e, i) => (
                            <Stack
                                key={i}
                                onClick={() => handleToggle(e, i)}
                                sx={{
                                    background: i === setIndex ? user_color : 'transparent',
                                    borderTopRightRadius: setIndex === 1 ? '10px' : null,
                                    borderBottomRightRadius: setIndex === 1 ? '10px' : null,
                                    borderTopLeftRadius: setIndex === 0 ? '10px' : null,
                                    borderBottomLeftRadius: setIndex === 0 ? '10px' : null,
                                    color: i === setIndex ? '#ffffff' : '#000000',

                                 
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    overflow: "hidden",
                                    zIndex: 1,
                                    padding: "12px 54px 12px 53px",
                                    justifyContent:'center',
                                    alignItems:'center'

                                }}
                            // className='toggle_btn'
                            >
                                {e.name}
                            </Stack>
                        ))
                    }
                </Stack>
            </Stack>


            {isLogin ? (
                <div style={{ textAlign: 'start' }}>

                    <CustomerLogin />
                </div>
            ) : (
                <div style={{ textAlign: 'start' }}>
                    <CustomerSignUp submitHandle={submitHandle} />
                </div>
            )}

        </Stack>
    );
};

export default CustomerHeader