import React from 'react';
import styles from './InformationCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const InformationCard: React.FC<({icon: IconDefinition, name: string, information: string})> = (props) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={props.icon} className={styles.icon}/>
            <p>{props.name}</p>
            <p>{props.information}</p>
        </div>
    )
}

export default InformationCard;