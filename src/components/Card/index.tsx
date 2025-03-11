import styled from 'styled-components'

const Card = styled.div<any>`
  width: 100%;
  padding: ${({ padding }) => padding || '1.25rem'};
  border: ${({ border }) => border || 'none'};
  border-radius: 0; /* Angular edges */
  position: relative;

  /* Blue strip on the left border */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px; /* Adjust the width of the strip */
    background-color: ${({ theme }) => theme.colors.primary}; /* Use theme color or a custom color */
  }
`

export default Card

export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.invertedContrast};
  background-color: ${({ theme }) => theme.colors.invertedContrast};
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.tertiary};
`
