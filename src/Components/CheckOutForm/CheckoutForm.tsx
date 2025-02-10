import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm:React.FC<{open: boolean, onClose: () => void}> = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={style}>
                <PaymentElement />
            </Box>
        </Modal>
    );
};

export default CheckoutForm;