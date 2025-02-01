import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import InformationCardStyle from './styles/InformationCard.module.css';

const EditableField = ({ icon, value, name, isEditing, onEditClick, onCancelClick, onInputChange, inputType }) => {
    return (
        <div className={InformationCardStyle.editableFieldContainer}>
            <div className={InformationCardStyle.iconContainer}>
                {name === 'tmp_lahir_leader' ? (
                    <Icon icon="stash:pin-place" className={InformationCardStyle.placeIcon}/>
                ) : (
                    <FontAwesomeIcon icon={icon} />
                )}
            </div>
            <div className={InformationCardStyle.editableField}>
                {isEditing ? (
                    <div className={InformationCardStyle.inputContainer}>
                        {inputType === 'select' ? (
                            <select name={name} value={value} onChange={onInputChange}>
                                <option value="BINUSIAN">BINUSIAN</option>
                                <option value="Non-BINUSIAN">Non-BINUSIAN</option>
                            </select>
                        ) : inputType === 'date' ? (
                            <input
                                type="date"
                                name={name}
                                value={value}
                                onChange={onInputChange}
                            />
                        ) : (
                            <input
                                type="text"
                                name={name}
                                value={value}
                                onChange={onInputChange}
                            />
                        )}
                        <span className={InformationCardStyle.cancelIcon} onClick={() => onCancelClick(name)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </div>
                ) : (
                    <span>{value}</span>
                )}
                {!isEditing && (
                    <span className={InformationCardStyle.editIcon} onClick={() => onEditClick(name)}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </span>
                )}
            </div>
        </div>
    );
};

export default EditableField;
