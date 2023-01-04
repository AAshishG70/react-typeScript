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

export const BuyButton = styled.div`
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 0;
  width: 100px;
`

export const Container = styled.div`
  margin: 18% 10%;
  padding: 20px;
  height: 200px;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  position: relative;
  ${Image} {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
