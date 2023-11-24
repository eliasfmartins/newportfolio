import Image from 'next/image';
import styled from 'styled-components';

export const TopLeftImg = () => {
	return (
		<ContainerImg>
			<Image src='/top-left-img.png' width={400} height={400} alt='left-img' />
		</ContainerImg >
	);
};
export const ContainerImg = styled.main`
width: 400px;
position: absolute;
	left: 0;
	top: 0;
	mix-blend-mode: lighten;
	z-index: 10;
@media (max-width:600px){
	width: 200px;

}
`;