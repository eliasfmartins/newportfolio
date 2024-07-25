import { HiArrowDownRight } from 'react-icons/hi2';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const RoutateBtn = () => {
  return (
    <BtnContainer>
      <Link href={'/work'}>
        <div className='content'>
          <Image src={'/rounded-text.png'} width={185} height={185} alt='' className='imagem' />
          <HiArrowDownRight className='arrow' size={38} />
        </div>
      </Link>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  border-radius: 50%;
  border: solid white 1px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;

  @media (max-width: 900px) {
    backdrop-filter: blur(2px);
  }

  &:hover {
    .arrow {
      color: #ff8c00;
      margin-left: 15px;
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
    animation: rotate 6s linear infinite;
    transform-origin: center center;
		height: 100%;
		width: 100%;
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
