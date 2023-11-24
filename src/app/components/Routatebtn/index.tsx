import { HiArrowDownRight } from 'react-icons/hi2';
import styled from 'styled-components';
import Link from 'next/link';
// import { HiArrowDownRight } from 'react-icons/hi';
import Image from 'next/image';

export const RoutateBtn = () => {
	return (
		<BtnContainer>
			<Link href={'/work'}>
				<div className='content'>
					<Image src={'/rounded-text.png'} width={141} height={148} alt='' className='imagem' />
					<HiArrowDownRight className='arrow' size={38} />
				</div>
			</Link>
		</BtnContainer>
	);
};

export const BtnContainer = styled.div`
  position: relative;
  width: 185px;
  height: 185px;
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  background-image: url('/circle-star.svg');
  background-size: cover;
  background-position: center;
 &:hover{
	.arrow {
		/* transform: rotate(-80deg); */
		color: #FF8C00;

		margin-left: 25px;
	}

 }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  .imagem {
    margin: auto;
    animation: rotate 6s linear infinite;
    transform-origin: center center;
    width: 100%;
    height: 100%;
    max-width: 141px;
    max-height: 148px;
  }

  .arrow {
    position: absolute;
		transition: 0.5s;
		font-weight: 700;
		top: 40%;
    font-size: 2rem;
		color: white;
    transform: rotate(-50deg);
  }
	
`;
