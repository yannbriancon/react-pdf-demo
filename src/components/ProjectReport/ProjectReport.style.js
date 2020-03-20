import styled from '@react-pdf/styled-components';

// Create styles
export const Body = styled.Page`
    padding: 35px 35px 65px;
`;

export const Title = styled.Text`
    font-size: 24px;
    text-align: center;
    font-family: 'Oswald';
`;

export const Subtitle = styled.Text`
    font-size: 18px;
    margin: 12px;
    font-family: 'Oswald';
`;

export const Text = styled.Text`
    margin: 12px;
    font-size: 14px;
    text-align: justify;
    font-family: 'Times-Roman';
`;
  
export const Image = styled.Image`
    height: 50px;
    object-fit: contain;
`;

export const Header = styled.Text`
    font-size: 12px;
    margin-bottom: 20px;
    text-align: center;
    color: grey;
`;

export const PageNumber = styled.Text`
    position: absolute;
    font-size: 12px;
    bottom: 30px;
    left: 0;
    right: 0;
    text-align: center;
    color: grey;
`;