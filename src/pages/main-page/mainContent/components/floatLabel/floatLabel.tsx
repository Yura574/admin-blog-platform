import React, {useState} from "react";

import style from './floatLabel.module.scss'

type FloatLabelType = {
    children: React.ReactNode,
    label: string,
    value: string
}

export const FloatLabel = (props:FloatLabelType) => {
    const [focus, setFocus] = useState(false);
    const {children, label, value} = props;

    const labelClass =
        focus || (value && value.length !== 0) ? `${style.label} ${style.labelFloat}` : style.label;

    return (
        <div
            className={style.floatLabel}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            {children}
            <label className={labelClass}>{label}</label>
        </div>
    );
};
