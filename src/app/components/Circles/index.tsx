import Image from 'next/image';
import styled from 'styled-components';

export const Circles = () => {
	return (
		<ImageContainer>
			<Image src={'/circles.png	'} width={260} height={200} alt='circle-img' />
		</ImageContainer>);
};
const ImageContainer = styled.div`
	position: fixed;
	right: 0px;
	bottom: 0;
	mix-blend-mode: color-dodge;
	animation: pulse 2s linear infinite;
	z-index:1 ;

	// Go FUll Page
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
/* image{
	animation: rotate 6s linear infinite;

} */
`;