import Image from 'next/image';
import styled from 'styled-components';

export const Bulb = () => {
	return <ContainerBulb> <Image src={'/bulb.png'} width={260} height={350} alt="imagem bulb" /> </ContainerBulb>;
};
export const ContainerBulb = styled.div`
	position: fixed;
	left: -156px;
	bottom: 15px;
	rotate: 12px;
	height: auto;
	width: auto;

	mix-blend-mode: color-dodge;
	animation: pulse 4s linear infinite;
	z-index: 10;



	@keyframes pulse {
    0% {
			opacity: 1;
    }
    50% {
			opacity: 0.3;
    }
		100%{
			opacity: 0.8;
		}
  }
`;