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
            hideSelectedOptions={false}
            classNamePrefix="react-select"
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
        padding: 0,
        fontSize: 12,
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
        minHeight: 20.33,
        height: 20.33
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: 0
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        display: 'none'
    }),
    indicatorContainer: (provided, state) => ({
        ...provided,
        padding: 0
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: 12,
        lineHeight: 1.33,
        padding: 0,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        paddingBottom: 10,
        color: state.isSelected ? '#1071FF' :'rgba(0, 0, 0, 0.87)',
        backgroundColor: state.isFocused ? 'rgba(0, 0, 0, 0.05)' : 'transparent'
    }),
    menu: (provided, state) => ({
        ...provided,
        paddingTop: 18,
    }),
    multiValue: (provided, state) => ({
        ...provided,
        color: 'rgba(0, 0, 0, 0.54)',
        borderRadius: 24
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        color: 'rgba(0, 0, 0, 0.54)',
        textOverflow: 'clip'
    })
}