import CardContainer from 'components/common/CardContainter';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, IconButton, Stack, TextField, Modal, Typography, Button } from '@mui/material'; // Ensure Button is imported
import IconifyIcon from 'components/base/IconifyIcon';
import ReactSwiper, { SwiperComponentProps } from 'components/base/ReactSwiper';
import SendAmountInput from 'components/sections/dashboard/transfer/SendAmountInput';
import SlideItem from 'components/sections/dashboard/transfer/SlideItem';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useState } from 'react';

/* ------------------------- Carousel Data ---------------------------- */
const ItemData = [
  { id: 1, image: '', name: 'User 1', designation: '' },
  { id: 2, image: '', name: 'User 2', designation: '' },
];
/* -------------------------------------------------------------------------- */
const cardSize = { lg: 70, md: 50, sm: 50 };

const QuickTransfer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { only } = useBreakpoints();
  const isMd = only('md');
  const isSm = only('sm');

  const totalSlides = ItemData.length;
  const slidesPerView = (isMd && totalSlides >= 5) || (isSm && totalSlides >= 5) ? 5 : 3;

  const swiperProps: SwiperComponentProps['swiperProps'] = {
    navigation: { nextEl: '.arrow-left', prevEl: '.arrow-right' },
    slidesPerView: slidesPerView,
    spaceBetween: 15,
    slideToClickedSlide: true,
    loop: true,
    centeredSlides: true,
    slideActiveClass: 'swiper-slide-active',
    onRealIndexChange: (swiper) => setCurrentSlide(swiper.realIndex),
    passiveListeners: true,
  };

  const [openModal, setOpenModal] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <CardContainer title="Transfer">
      <Stack gap={4} justifyContent="space-between" sx={{ flex: 1, pl: 0.5 }}>
        <Stack direction="row" sx={{ alignItems: 'center', mt: 2 }}>
          <Box sx={{ minWidth: 0, overflow: 'hidden', flex: 1 }}>
            <ReactSwiper swiperProps={swiperProps}>
              {ItemData.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <SlideItem data={item} cardSize={cardSize} active={currentSlide === index} />
                </SwiperSlide>
              ))}
            </ReactSwiper>
          </Box>
          <IconButton
            className="arrow-left"
            sx={(theme) => ({
              zIndex: 1,
              bgcolor: 'common.white',
              boxShadow: theme.shadows[2],
              mr: 1.15,
              ml: 1,
            })}
          >
            <IconifyIcon icon="iconoir:nav-arrow-right" />
          </IconButton>
        </Stack>

        {/* Transfer Fields */}
        <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <TextField 
            label="Account Number" 
            variant="outlined" 
            size="small" 
            fullWidth 
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <SendAmountInput 
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            setOpenModal={setOpenModal} 
          />
        </Stack>

        {/* Modal for dormant account */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{ bgcolor: 'white', p: 4, borderRadius: 2, maxWidth: 400, margin: 'auto', mt: '20%' }}>
            <Typography id="modal-title" variant="h6" component="h2">
              Account Dormant
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              The account is currently dormant. Please activate it first and try again.
            </Typography>
            <Button onClick={handleCloseModal} variant="outlined" sx={{ mt: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      </Stack>
    </CardContainer>
  );
};

export default QuickTransfer;
