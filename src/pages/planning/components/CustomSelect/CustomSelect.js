import { useState } from "react";
import Select, { components } from 'react-select';
import * as Image from '../../icons';
import './CustomSelect.scss'

function CustomSelect({ optionsData }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };

    return (
        <Select
            styles={customStyles}
            value={selectedOption}
            onChange={handleChange}
            options={optionsData}
            isMulti={true}
            defaultValue={optionsData[0]}
            placeholder='Все'
            components={{ DropdownIndicator }}
            isClearable={false}
        />
    );
}

export default CustomSelect;

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <Image.DropDown />
        </components.DropdownIndicator>
    );
};


const customStyles = {
    container: (provided, state) => ({
        ...provided,
        width: '100%',
        fontSize: 12,
        lineHeight: 1.33,
        fontFamily: "Montserrat",
        fontWeight: 500,
        fontColor: "#000000",
    }),

    placeholder: (provided, state) => ({
        ...provided,
        color: "#000000",
        opacity: 0.9
    }),
    control: (provided, state) => ({
        ...provided,
        border: 'none',
        padding: 0,
        minHeight: 0
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: 0,
        borderRadius: 24
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        display: 'none'
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: 12,
        lineHeight: 1.33,
        padding: 0,
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 20,
        color: state.isFocused ? '#1071FF' : 'black',
        backgroundColor: state.isFocused && 'transparent',
      }),
      menu: (provided, state) => ({
        ...provided,
        paddingTop: 18,
      }),
}