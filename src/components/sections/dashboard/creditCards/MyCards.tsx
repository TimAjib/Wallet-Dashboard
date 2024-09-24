import { Link, Stack, Typography } from '@mui/material';
import CreditCard, { CreditCardData } from 'components/sections/dashboard/creditCards/CreditCard';
import { Fragment } from 'react/jsx-runtime';
import SimpleBar from 'simplebar-react';

/* ---------------------------- Credit Card Data----------------------------- */
interface CardData {
  theme: 'blue' | 'white';
  data: CreditCardData;
  id: number;
}
const cardData: CardData[] = [
  {
    id: 1,
    theme: 'blue',
    data: {
      balance: '1790000',
      cardHolder: 'Camila Lopez',
      validThru: '12/26',
      cardNumber: '3778 **** **** 2763',
    },
  },
  {
    id: 2,
    theme: 'white',
    data: {
      balance: '0',
      cardHolder: 'Camila Lopez',
      validThru: '01/27',
      cardNumber: '5647 **** **** 5688',
    },
  },
];

const accountDetails = {
  accountNumber: '9673927372',
  iban: 'EB1868387629067498762746349',
};

const MyCards = () => {
  return (
    <Fragment>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pt: 3, pb: 2.5 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 'body2.fontSize', md: 'h6.fontSize', xl: 'h3.fontSize' },
            fontWeight: 600,
          }}
        >
          My Cards
        </Typography>
        <Link
          variant="h5"
          href="#!"
          sx={{
            fontSize: { xs: 'caption.fontSize', md: 'body1.fontSize', xl: 'h5.fontSize' },
            fontWeight: 600,
            pr: 1,
          }}
        >
          See All
        </Link>
      </Stack>

      {/* Display Account Number and IBAN */}
      <Stack
        direction="column"
        justifyContent="flex-start"
        sx={{ mb: 3, p: 2, bgcolor: 'grey.100', borderRadius: 2 }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, fontSize: { xs: 'body1.fontSize', md: 'body1.fontSize' } }}
        >
          <strong>Account Number:</strong> {accountDetails.accountNumber}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, fontSize: { xs: 'body1.fontSize', md: 'body1.fontSize' } }}
        >
          <strong>IBAN:</strong> {accountDetails.iban}
        </Typography>
      </Stack>

      <SimpleBar style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Stack direction="row" justifyContent="space-between" gap={4} sx={{ minWidth: 800 }}>
          {cardData.map((card) => (
            <CreditCard key={card.id} theme={card.theme} cardData={card.data} />
          ))}
        </Stack>
      </SimpleBar>
    </Fragment>
  );
};

export default MyCards;