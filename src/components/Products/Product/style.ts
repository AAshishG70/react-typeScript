import styled from '../../../style/styled-components'

export const Image = styled.div``

export const Shipping = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 5px;
  font-size: 0.6rem;
  cursor: default;
`

export const Title = styled.div``

export const Price = styled.div``

export const Value = styled.div``

export const BuyButton = styled.button`
  height: 38px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 0;
  border: none;
  display: block;
  width: 100%;
  left: 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`

export const Container = styled.div`
  margin: 2%;
  padding: 10px;
  height: 250px;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  position: relative;
  ${Image} {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
