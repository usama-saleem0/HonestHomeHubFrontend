import React, { useState } from 'react';
import "./input.css";
import { MdAddBox } from "react-icons/md";
import { vendor_color } from '../../utils/color';
import { MdOutlineRemoveCircle } from "react-icons/md";
const KeywordInput = ({ style, setKeywordValue }) => {
    const [keyword, setKeyword] = useState('');
    const [keywords, setKeywords] = useState([]);
    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };
    const handleAddKeyword = () => {
        if (keyword.trim() !== '' && keywords.length < 3) {
            setKeywords([...keywords, keyword]);
            setKeywordValue([...keywords, keyword])
            setKeyword('');
        }
    };
    const handleRemoveKeyword = (index) => {
        const updatedKeywords = [...keywords];
        updatedKeywords.splice(index, 1);
        setKeywords(updatedKeywords);
        setKeywordValue(updatedKeywords);
    };
    // console.log(keywords);
    return (
        <div>
            <input
                className="inputStyle"
                type="text"
                value={keyword}
                onChange={handleInputChange}
                placeholder="Type a keyword"
                style={{ padding: "7px", backgroundColor: 'transparent', width:'647px',maxWidth:'647px', ...style }}
            />
            <MdAddBox onClick={handleAddKeyword} style={{
                backgroundColor: vendor_color,
                borderTopRightRadius: "7px",
                borderBottomRightRadius: "7px",
                cursor: 'pointer'
            }} size={40} color={'white'} />
            <div>
                <strong>Keywords:</strong>
                <ul style={{
                    listStyleType: 'none',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    {keywords.map((kw, index) => (
                        <li style={{
                            marginLeft: '5px'
                        }} key={index}>
                            {kw}{' '}
                            <MdOutlineRemoveCircle style={{
                                cursor: 'pointer'
                            }} size={20} color='red' onClick={() => handleRemoveKeyword(index)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default KeywordInput;