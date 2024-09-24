import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'; 
import IconifyIcon from 'components/base/IconifyIcon';
import { useBreakpoints } from 'providers/useBreakpoints';

interface SendAmountInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendAmountInput: React.FC<SendAmountInputProps> = ({ value, onChange, setOpenModal }) => {
  const { up } = useBreakpoints();
  const upMd = up('md');

  const handleButtonClick = () => {
    setOpenModal(true); // Trigger modal when the button is clicked
  };

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 1,
        px: 0.5,
        gap: { xs: 1.5, sm: 3 },
      }}
    >
      <Typography
        fontWeight="regular"
        color="text.secondary"
        whiteSpace="nowrap"
        sx={{ fontSize: { xs: 'caption.fontSize', md: 'body2.fontSize' } }}
      >
        Write Amount
      </Typography>
      <TextField
        type="number"
        placeholder="525.50"
        value={value}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="primary"
                size={upMd ? 'large' : 'medium'}
                sx={{
                  borderRadius: 'inherit',
                  minWidth: { xs: 80, sm: 120 },
                }}
                endIcon={<IconifyIcon icon="ph:telegram-logo" color="common.white" />}
                onClick={handleButtonClick}
              >
                Send
              </Button>
            </InputAdornment>
          ),
        }}
        size={upMd ? 'medium' : 'small'}
        variant="filled"
        sx={() => ({
          '& .MuiFilledInput-root': {
            paddingRight: 0,
            borderRadius: 40,
          },
          '&::placeholder': {
            color: 'text.secondary',
            ml: 5,
          },
        })}
      />
    </Stack>
  );
};

export default SendAmountInput;
