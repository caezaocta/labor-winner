import ButtonMui from '@mui/material/Button';

const Button = ({ buttonText, onClick }) => {
    return (
        <>
            <ButtonMui variant="contained" onClick={onClick}>{buttonText}
            </ButtonMui>
        </>
    );
};

export default Button;
