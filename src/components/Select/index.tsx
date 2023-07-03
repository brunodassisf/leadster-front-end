"use client";

import React, { useId } from "react";
import { FaCaretDown } from "react-icons/fa";
import SelectCore, { GroupBase, Props, components } from "react-select";
import { Container } from "./Select.style";

interface ICustomProps {
    label?: string;
}

export interface IOption {
    label: string;
    value: string;
}

const CustomDropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <FaCaretDown size={22} />
        </components.DropdownIndicator>
    );
};

export default function Select<
    IOption,
    IsMulti extends boolean = false,
    Group extends GroupBase<IOption> = GroupBase<IOption>
>({
    label,
    id,
    options,
    ...props
}: Props<IOption, IsMulti, Group> & ICustomProps) {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <SelectCore
                className="select_container"
                instanceId={id}
                options={options}
                classNamePrefix="select_component"
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                {...props}
            />
        </Container>
    );
}
